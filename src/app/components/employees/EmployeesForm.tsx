import * as React from 'react';
import { values, get, isUndefined } from 'lodash';
import * as classNames from 'classnames';

import { IDepartment, IDepartmentHashMap } from '../../models/IDepartment';
import { IEmployee } from '../../models/IEmployee';

const styles = require('./employees-form.css');
interface IValidateFields {
  firstName?: string;
  lastName?: string;
}
export interface IProps {
  departments: IDepartmentHashMap;
  onSubmit(employees: IEmployee): void;
  employees?: IEmployee;
  withCancelButton?: boolean;
  cancelHandler?(): void;
}

const getCancelHandler = (props: any) => get(props, 'cancelHandler', (_: any) => true);

const renderErrorForField = (UIErrors: any, fieldName: string) => {
  if (!isUndefined(UIErrors[fieldName]) && UIErrors[fieldName].length > 0) {
    return (
      <span className={classNames('help-block', styles.ValidationError)}>{UIErrors[fieldName]}</span>
    );
  }

  return null;
};

const isFormValid = (state: IState): boolean => {
  return state.firstName.length > 0
  && state.lastName.length > 0
  && state.departmentId > 0;
};

const fieldIsValid = (str: string): boolean => (!isUndefined(str) && str.length > 0);
const DEFAULT_ERRORS_STATE = {
  firstName: '',
  lastName: '',
};

export interface IState {
  firstName: string;
  lastName: string;
  departmentId: number;
  UIErrors?: IValidateFields;
}

export class EmployeesForm extends React.PureComponent<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      UIErrors: DEFAULT_ERRORS_STATE,
      ...this.updateStateFromProps(props),
    };
  }

  public componentWillReceiveProps(nextProps) {
    this.setState({
      UIErrors: DEFAULT_ERRORS_STATE,
      ...this.updateStateFromProps(nextProps),
    });
  }

  private updateStateFromProps = (props: any) => {
    return {
      departmentId: get(props, 'employees.departmentId', 0),
      firstName: get(props, 'employees.firstName', ''),
      lastName: get(props, 'employees.lastName', ''),
    };
  }

  private firstNameOnChange = (e: any): void => {
    const errors = {...this.state.UIErrors};
    if (!fieldIsValid(e.target.value)) {
      errors.firstName = 'Field is required';
    } else {
      // clear previous
      errors.firstName = '';
    }
    this.setState({
      ...this.state,
      firstName: e.target.value,
      UIErrors: errors,
    });
  }

  private lastNameOnChange = (e: any): void => {
    const errors = {...this.state.UIErrors};
    if (!fieldIsValid(e.target.value)) {
      errors.lastName = 'Field is required';
    } else {
      // clear previous
      errors.lastName = '';
    }
    this.setState({
      ...this.state,
      lastName: e.target.value,
      UIErrors: errors,
    });
  }

  private departmentOnChange = (e: any): void => {
    const { value } = e.target;
    const valueInt = +value;
    if (valueInt === 0) {
      return;
    }
    this.setState({
      ...this.state,
      departmentId: valueInt,
    });
  }

  private renderCancelButton = (allow: boolean): any => {
    if (allow) {
      return (
        <button type="button" className="btn btn-flat btn-warning" onClick={getCancelHandler(this.props)}>
          Cancel
        </button>
      );
    }

    return null;
  }

  private submit = () => {
    const {
      departmentId,
      firstName,
      lastName,
    } = this.state;
    this.props.onSubmit({
      departmentId,
      firstName,
      lastName,
    });
  }

  // private clearForm = () => this.setState({...this.state, firstName: '', lastName: '', departmentId: 0});

  public render() {
    const {
      departments,
      withCancelButton,
    } = this.props;

    const {
      firstName,
      lastName,
      departmentId,
      UIErrors,
    } = this.state;

    const dpArray: IDepartment[] = values(departments);
    dpArray.splice(0, 0, {id: 0, name: 'not selected'});
    return (
      <form>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select name="department"
                  id="department"
                  className="form-control"
                  value={departmentId}
                  onChange={this.departmentOnChange}>
            {dpArray.map((d: IDepartment, i: number) => (<option key={i} value={d.id}>{d.name}</option>))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input className="form-control" type="text" value={firstName} onChange={this.firstNameOnChange}/>
          {renderErrorForField(UIErrors, 'firstName')}
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Last name</label>
          <input className="form-control" type="text" value={lastName} onChange={this.lastNameOnChange}/>
          {renderErrorForField(UIErrors, 'lastName')}
        </div>

        <div className="clearfix">
          <div className="form-group">
            <div className="pull-right">
              {this.renderCancelButton(withCancelButton)}
              <button type="button"
                      disabled={!isFormValid(this.state)}
                      className="btn btn-flat btn-success"
                      onClick={this.submit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
