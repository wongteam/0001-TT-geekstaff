import * as React from 'react';
import { Link } from 'react-router';

export interface IProps {
  value: string;
  text: string;
  linkTo: string;
  bgClass?: string;
}

export const StatisticsBox = (props: IProps) => {

  return (
    <div className={`small-box ${props.bgClass}`}>
      <div className="inner text-center">
        <h3>{props.value}</h3>
        <p>{props.text}</p>
      </div>
      <Link to={props.linkTo} className="small-box-footer">
        Manage &nbsp;
        <i className="fa fa-arrow-circle-o-right"/>
      </Link>
    </div>
  );
};
