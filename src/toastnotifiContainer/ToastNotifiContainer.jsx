import React, { useState } from "react";

const ToastNotifiContainer = () => {

    const [showToast, setShowToast] = useState([]);
    console.log('toastData', showToast)
    const handleToastAdd = (message, type) => {
        const id = new Date().getTime();

        const newToast = [...showToast, { id, message, type }];
        setShowToast(newToast);
    }

    const handleToastClose = () => { }

    return (
        <>
            <div className="container">
                <div className="toast-container">
                    {
                        showToast.map(({ id, message, type }) => {
                            return (
                                <div className={`toast ${type}`} key={id}>
                                    {message}<span onClick={handleToastClose}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="button-toast-box">
                    <button onClick={() => handleToastAdd('Success Toast', 'success')}>Success Toast</button>
                    <button onClick={() => handleToastAdd('Info Toast', 'info')}>Info Toast</button>
                    <button onClick={() => handleToastAdd('Warning Toast', 'warning')}>Warning Toast</button>
                    <button onClick={() => handleToastAdd('Error Toast', 'error')}>Error Toast</button>
                </div>
            </div>
        </>
    )
}
export default ToastNotifiContainer;