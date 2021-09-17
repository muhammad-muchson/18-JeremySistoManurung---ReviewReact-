import React, {useState} from 'react';
import validasi from "./validasi";
import {useDispatch} from "react-redux"
import { tambahData } from '../store/contactSlice';
import {v4 as uuidv4} from 'uuid'

const Contact_Us = () => {
        const [values, setValues] = useState({
            firstname : "",
            email : "",
            number : "",
            national : "",
            pesan : ""
        });

        const [errors, setErrors] = useState({});

        const handleChange = (event) =>{
            setValues({
                ...values,
                [event.target.name]: event.target.value, 
            });
        };

        const handleFormSubmit = (event) => {
            event.preventDefault();
            setErrors(validasi(values));
        }

    // const dispatch = useDispatch()

    // const [userInput, setUserInput] = useState('')

    // const handleChange = (e) => {
    //     setUserInput(e.currentTarget.value)
    // }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formIsNotEmpty = userInput === ""
    //     if(formIsNotEmpty){
    //         alert("Input Kosong") 
    //     }
    //     else{
    //         const newItem = {
    //         // id: uuidv4(),
    //         // task: userInput,
    //         // complete: false
    //         id: uuidv4(),
    //         firstname : "",
    //         email : "",
    //         number : "",
    //         national : "" ,
    //         pesan : "",
    //     }
    //         dispatch(tambahData(newItem))
    //         setUserInput("") 
    //     } 


    return (
    <div className="contact">
        <div className="contact-right">
            <div className="left-img">
                <div className="bungkus">
            <img 
            src="/assets/img/charles-rRWiVQzLm7k-unsplash.jpg" 
            alt=""/> 
                </div>
            <div className="left-img-hero">
            <img 
            src="/assets/img/logo-ALTA@2x.png" 
            alt="" /> 
            </div>
            </div>
        </div>
        
        <div className="contact-left m-xl-5">
            <h4>Contact Us</h4>
            <form onClick={handleFormSubmit}>
            <div className="form-group ">
                <label>
                First Name
                <span> * </span>
                </label>

                <input
                type="text" 
                className="form-control" 
                placeholder="Your Full Name Here..."
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                />

                {errors.firstname && <p className="error">{errors.firstname}</p>}
            </div>

            <div className="form-group">
                <label>
                Email Address 
                <span> * </span>
                </label>

                <input 
                type="email" 
                className="form-control" 
                placeholder="Example@domain.com"
                name ="email"
                value={values.email}
                onChange={handleChange}
                />

                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label>
                Phone Number
                <span> * </span>
                </label>

                <input 
                type="text" 
                className="form-control" 
                placeholder="0857389xxxxx"
                name="number"
                value={values.number}
                onChange={handleChange}
                />

                {errors.number && <p className="error">{errors.number}</p>}
            </div>

            <div className="form-group">
                <label>Nationality
                <span> * </span>
                </label>

                <select 
                className="form-control" 
                id="exampleFormControlSelect1"
                name="national"
                value={values.national}
                onChange={handleChange}
                >

                <option value="1">Indonesia</option>
                <option value="2">Jepang</option>
                <option value="3">Canada</option>
                <option value="4">German</option>
                <option value="5">USA</option>
                </select>
            </div>

            <div className="form-group">
            <label>Message</label>
            <textarea
            className="form-control"
            rows="3"
            name="pesan"
            value={values.pesan}
            onChange={handleChange}
            >
            </textarea>
        </div>

        <button 
        type="button" 
        className="btn btn-alta mt-4"
        // onClick={handleFormSubmit}
        style={{
            background:'orange',
            color:'white'
        }}
        >
        Submit
        </button>

            </form>
            </div>
</div>
    );
}

export default Contact_Us
