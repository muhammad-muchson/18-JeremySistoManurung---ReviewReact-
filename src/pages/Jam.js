import React from 'react';
import {useState} from "react";

const Jam = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime, 1000);
    return (
        <div style={{margin:0,padding:0}}>
            <>
            <h1>{ctime}</h1>
            </>
        </div>
    )
}

export default Jam
