import React from "react";
import CssTransition from "react-transition-group/CssTransition";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = props => {
  return (
    <CssTransition 
        mountOnEnter 
        unmountOnExit 
        in={props.show} 
        timeout={animationTiming}
        classNames={{
            enter: 'ModalOpen' ,
            enterActive: '' ,
            exit: 'ModalClosed' ,
            exitActive: '' 
        }}>
          <div className='Modal'>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
    </CssTransition>
  );
};

export default modal;
