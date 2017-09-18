import * as React from 'react';
import { IDepartment } from '../../models/IDepartment';
import { get, isUndefined } from 'lodash';

export interface IProps {
  onSubmit(department: IDepartment): void;
  defaultData?: IDepartment;
  editMode?: boolean;
  onEditCancel?(): void;
}

export interface IState {
  name: string;
  formIsValid: boolean;
  validationError?: string;
}

/**
 * Render form error
 * @param {string} text
 * @returns {any}
 */
const renderFormError = (text: string) => {
  return (<div className="form-group has-error"><span className="help-block">{text}</span></div>);
};

/**
 * Name field validator
 * @param {string} name
 * @returns {boolean}
 */
const nameIsValid = (name: string): boolean => !isUndefined(name) && name.length > 0;

class DepartmentForm extends React.PureComponent<IProps, IState> {

  constructor(props) {
    super(props);
    const name = get(props, 'defaultData.name', '');
    this.state = {
      name,
      formIsValid: name.length > 0,
      validationError: '',
    };
  }

  private nameOnChange = (e: any): void => this.setState({
    ...this.state,
    name: e.target.value,
    formIsValid: nameIsValid(e.target.value),
  })

  private submitForm = (e: any) => {
    e.preventDefault();
    const { name, formIsValid } = this.state;
    const { editMode } = this.props;
    if (!formIsValid) {
      return this.setState({...this.state, validationError: 'Name is invalid'});
    }
    this.props.onSubmit({
      ...this.props.defaultData,
      name,
    });

    // reset name if non edit mode
    if (!editMode) {
      this.setState({...this.state, name: ''});
    }
  }

  private editCancelHandler = () => {
    const { onEditCancel } = this.props;
    if (!isUndefined(onEditCancel)) {
      onEditCancel();
    }
  }

  public render() {
    const { validationError, formIsValid, name } = this.state;
    const { editMode } = this.props;
    if (editMode) {
      return (
        <td>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" value={name} onChange={this.nameOnChange} />
          </div>
          {validationError.length > 0 && renderFormError(validationError)}
          <div className="form-group pull-right">
            <button onClick={this.editCancelHandler}
                    className="btn btn-warning btn-xs" type="button"
                    disabled={!formIsValid}
                    style={{marginRight: '10px'}}
            >
              <i className="fa fa-ban"/>
            </button>
            <button onClick={this.submitForm}
                    className="btn btn-primary btn-xs" type="button"
                    disabled={!formIsValid}
                    style={{marginRight: '10px'}}
            >
              <i className="fa fa-check"/>
            </button>
          </div>
        </td>
      );
    }

    return (
      <form className="form" onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <div>
            <input type="text" className="form-control" value={name} onChange={this.nameOnChange}/>
            {validationError.length > 0 && renderFormError(validationError)}
          </div>
        </div>
        <div className="form-group pull-right">
          <button type="submit" className="btn btn-primary btn-flat" disabled={!formIsValid}>
            <i className="fa fa-check"/>
          </button>
        </div>
      </form>
    );
  }
}

export { DepartmentForm }
