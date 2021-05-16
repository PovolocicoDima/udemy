import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group';
import {AlertContext} from '../context/alert/alertContext';

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-dismissible alert-${alert.type || 'warning'}`} role="alert">
                    <strong>Внимание!</strong>
                    {alert.text}
                    <button onClick={hide}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close">
                        &times;
                    </button>
            </div>
        </CSSTransition>
    )
}