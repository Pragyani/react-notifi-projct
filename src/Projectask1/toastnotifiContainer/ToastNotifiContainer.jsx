import React, { useRef, useState } from "react";

const ToastNotifiContainer = () => {

    const [showToast, setShowToast] = useState([]);
    const timeRef = useRef({});
    console.log(timeRef)
    
    const handleToastAdd = (message, type) => {
        const id = new Date().getTime();

        const newToast = [...showToast, { id, message, type }];
        setShowToast(newToast);
        timeRef.current[id] = setTimeout(() => handleToastClose(id), 5000)
    }

    const handleToastClose = (id) => {
        clearTimeout(timeRef.current[id]);
        delete timeRef.current[id];
        setShowToast((prevtoast) => {
            const filterArr = prevtoast.filter((showToast) => {
                return showToast.id !== id;
            });
            return filterArr;
        });
    }

    return (
        <>
            <div className="container">
                <div className="toast-container">
                    {
                        showToast.map(({ id, message, type }) => {
                            return (
                                <div className={`toast ${type}`} key={id}>
                                    {message}<span onClick={() => handleToastClose(id)}>x</span>
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