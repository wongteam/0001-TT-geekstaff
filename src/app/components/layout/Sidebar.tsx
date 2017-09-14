import * as React from 'react';
import { Link } from 'react-router';

export interface IMenuItem {
  text: string;
  urlPath: string;
}

export interface IProps {
  menuItems: IMenuItem[];
}

const SideBar = (props: IProps) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu">
        {props.menuItems.map((i: IMenuItem, k: number) => <li key={k}><Link to={i.urlPath}>{i.text}</Link></li>)}
      </ul>
    </section>
  </aside>
);

export { SideBar }
