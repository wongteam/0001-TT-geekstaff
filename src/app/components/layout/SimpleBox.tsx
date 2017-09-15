import * as React from 'react';

export interface IProps {
  title: string;
  children?: any;
  noPadding: boolean;
}

/**
 * Simple box component with a title. The component was ported from AdminLTE template
 * @param {IProps} props
 * @constructor
 */
export const SimpleBox = (props: IProps) => (
  <div className="box">
    <div className="box-header">
      <h3 className="box-title">{props.title}</h3>
    </div>
    <div className={`box-body table-responsive ${props.noPadding ? 'no-padding' : ''}`}>
      {props.children}
    </div>
  </div>
);
