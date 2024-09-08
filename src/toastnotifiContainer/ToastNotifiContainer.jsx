import React, { useState } from "react";

const ToastNotifiContainer = () => {

    const [showToast, setShowToast] = useState();

    const handleToastAdd = () => {
        setShowToast(true);
        setTimeout(handleToastClose, 5000)
    }

    const handleToastClose = () => {
        setShowToast(false)
    }

    return (
        <>
            <div className="container">
                <div className="toast-container">
                    {showToast && (<div className="toast">
                        Success Toast <span onClick={handleToastClose}>x</span>
                    </div>)}
                </div>
                <div className="button-toast-box">
                    <button onClick={handleToastAdd}>Success Toast</button>
                    <button>Info Toast</button>
                    <button>Warning Toast</button>
                    <button>Error Toast</button>
                </div>
            </div>
        </>
    )
}
export default ToastNotifiContainer;