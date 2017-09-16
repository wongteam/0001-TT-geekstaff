import * as React from 'react';
import { IDepartment } from '../../models/IDepartment';
import { get, isUndefined } from 'lodash';

export interface IProps {
  onSubmit(department: IDepartment): void;
  defaultData?: IDepartment;
  inlineMode?: boolean;
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
    if (!formIsValid) {
      return this.setState({...this.state, validationError: 'Name is invalid'});
    }
    this.props.onSubmit({
      ...this.props.defaultData,
      name,
    });
  }

  public render() {
    const { validationError, formIsValid, name } = this.state;
    const { inlineMode } = this.props;
    if (inlineMode) {
      return (
        <td>
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" value={name} onChange={this.nameOnChange} />
          {validationError.length > 0 && renderFormError(validationError)}
          <button onClick={this.submitForm}
                  className="btn btn-primary btn-xs" type="button"
                  disabled={!formIsValid}>
            <i className="fa fa-check"/>
          </button>
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
