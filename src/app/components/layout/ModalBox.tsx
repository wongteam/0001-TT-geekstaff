import * as React from 'react';
import * as classNames from 'classnames';

export interface IProps {
  isOpen: boolean;
  title: string;
  closeHandler(): void;
  children?: any;
}

export const ModalBox = (props: IProps) => {
  const VISIBLE_STYLES = {
    display: (props.isOpen) ? 'block' : 'none',
  };
  const VISIBLE_CLASSES = classNames({
    fade: props.isOpen,
    in: props.isOpen,
    modal: true,
  });
  return (
    <div className={VISIBLE_CLASSES} style={VISIBLE_STYLES}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" type="button" onClick={props.closeHandler}>
              <span>x</span>
            </button>
            <h4 className="modal-title">{props.title}</h4>
          </div>

          <div className="modal-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
