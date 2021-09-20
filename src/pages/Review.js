import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {Link} from "react-router-dom";

function Review() {
    // const contacts = useSelector((state) => state.contacts.contacts)
    // getting the values of local storage
    const getDatafromLS=()=>{
        const data = localStorage.getItem('books');
        if(data){
        return JSON.parse(data);
        }
        else{
        return []
        }
    }
    const [forms, setForms]=useState(getDatafromLS());
    // let nama = forms[0].nama;
    let {nama, email, Pnumber,Ppesan,national} = forms[0]
    console.log("nama dari form", nama)
    console.log("form adalah", forms)
    // const[values,setValue] = useState(contacts)
    // console.log(data.nama)\
    return (
        <div>
            <div className="content-outer">
                <div className="content-inner">
                    {/* {forms.Pnumber} */}
                    {/* {forms.map=(e)=>{
                    <div className="data">
                        <p>Nama111        : {nama}</p>
                        <p>Email       : {"values.email"}</p>
                        <p>Phone       : {"values.number"}</p>
                        <p>Nationality : {"values.national"}</p>
                    </div>
                    }} */}
                    <div className="data">
                        {/* <p>Nama111        : {JSON.stringify(forms[0].email)}</p> */}
                        <p>Nama        : {nama}</p>
                        <p>Email       : {email}</p>
                        <p>Phone       : {Pnumber}</p>
                        <p>Nationality : {national}</p>
                    </div>
                    
                    <div className="message">
                        <p>{"values.pesan"}</p>
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
