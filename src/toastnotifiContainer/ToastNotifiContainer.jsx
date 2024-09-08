import React, { useState } from "react";

const ToastNotifiContainer = () => {

    const [showToast, setShowToast] = useState([]);

    const handleToastAdd = (message, type) => {

        const newToast = [...showToast, { message, type }];
        setShowToast(newToast);
    }

    const handleToastClose = () => { }

    return (
        <>
            <div className="container">
                <div className="toast-container">
                    {
                        showToast.map(({ message, type }) => {
                            return (
                                <div className="toast">
                                    {message}<span onClick={handleToastClose}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="button-toast-box">
                    <button onClick={() => handleToastAdd('Success', 'success')}>Success Toast</button>
                    <button onClick={() => handleToastAdd('Info', 'info')}>Info Toast</button>
                    <button onClick={() => handleToastAdd('Warning', 'warning')}>Warning Toast</button>
                    <button onClick={() => handleToastAdd('Error', 'error')}>Error Toast</button>
                </div>
            </div>
        </>
    )
}
export default ToastNotifiContainer;