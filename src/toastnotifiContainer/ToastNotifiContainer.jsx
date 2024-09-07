import React from "react";

const ToastNotifiContainer = () => {
    return (
        <>
            <div className="container">
                <div className="toast-container">
                    <div className="toast">
                        Success Toast <span>x</span>
                    </div>
                    <div className="button-toast-box">
                        <button>Success Toast</button>
                        <button>Info Toast</button>
                        <button>Warning Toast</button>
                        <button>Error Toast</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToastNotifiContainer;