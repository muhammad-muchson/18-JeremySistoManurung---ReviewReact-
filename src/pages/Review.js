import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {Link} from "react-router-dom";

function Review() {
    const contacts = useSelector((state) => state.contacts.contacts)
    const[values,setValue] = useState(contacts)
    // console.log(data.nama)
    return (
        <div>
            <div className="content-outer">
                <div className="content-inner">
                    <div className="data">
                        <p>Nama        : {values.firstname}</p>
                        <p>Email       : {values.email}</p>
                        <p>Phone       : {values.number}</p>
                        <p>Nationality : {values.national}</p>
                    </div>
                    
                    <div className="message">
                        <p>{values.pesan}</p>
                    </div>
                    <div className="underline">
                        
                    </div>
                    <div className="closing">
                        <p>Thanks for contacting us!</p>
                        <p>We will be in touch with you shortly.</p>
                    </div>
                    <Link to="/">
                        <div className='button-home'>
                            <p>Home</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Review
