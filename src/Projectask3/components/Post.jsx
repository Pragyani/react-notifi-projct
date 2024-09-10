import React, { useEffect, useState } from "react";
import './pagination.css';
import Pagination from "./Pagination";

const Post = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async (url) => {
        try {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
            // console.log('data getig', response);
            const data = await response.json();
            // console.log(data);
            setData(data);
        } catch {
            console.log('erorr found ')
        }
    }
    return (
        <>
            <div className="container-p">
                <div className="post-container">
                    <img src="https://picsum.photos/id/30/1280/901" alt="pgition-imge" />
                </div>
                <Pagination />
            </div>

        </>
    )
}
export default Post;