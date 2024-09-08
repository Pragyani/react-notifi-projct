import React, { useState } from "react";

const ToastNotifiContainer = () => {

    const [showToast, setShowToast] = useState();

    return (
        <>
            <div className="container">
                <div className="toast-container">
                    {showToast && (<div className="toast">
                        Success Toast <span onClick={() => { setShowToast(false) }}>x</span>
                    </div>)}
                </div>
                <div className="button-toast-box">
                    <button onClick={() => { setShowToast(true) }}>Success Toast</button>
                    <button>Info Toast</button>
                    <button>Warning Toast</button>
                    <button>Error Toast</button>
                </div>
            </div>
        </>
    )
}
export default ToastNotifiContainer;