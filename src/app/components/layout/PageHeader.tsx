import * as React from 'react';

export interface IProps {
  title: string;
}

const PageHeader = (props: IProps) => (
  <div className="content-header">
    <h1>{props.title}</h1>
  </div>
);

export { PageHeader }
