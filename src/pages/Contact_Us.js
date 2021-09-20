import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import validasi from "./validasi";
import { Stress } from './Stress';
import {useDispatch} from "react-redux"
import { tambahData } from '../store/contactSlice';


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

const Contact_Us = () => {
 // main array of objects state || books state || books array of objects
  // const [forms, setForms]=useState(getDatafromLS());
  const [forms, setForms]=useState([]);
  let history = useHistory();

  // input field states
  const [email, setEmail]=useState('');
  const [Pnumber, setNumber]=useState('');
  const [national, setNational]=useState('');
  const [Ppesan, setPpesan]=useState('');
  const [nama, setNama]=useState('');
  

  // form submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let Cform={
      email,
      Pnumber,
      national,
      Ppesan,
      nama
    }
    setForms([Cform]);
    if(forms.length>0){
      history.push('/review')
    }
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(forms));
    
  },[forms])

    
        // const [values, setValues] = useState({
        //     firstname : "",
        //     email : "",
        //     number : "",
        //     national : "",
        //     pesan : ""
        // });

        // const [errors, setErrors] = useState({});

        // const handleChange = (event) =>{
        //     setValues({
        //         ...values,
        //         [event.target.name]: event.target.value, 
        //     });
        // };

        // const handleFormSubmit = (event) => {
        //     event.preventDefault();
        //     setErrors(validasi(values));
        // }


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
            {/* <form onClick={handleFormSubmit}>
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
                id="name"
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
                id="email"
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
                id="Pnumber"
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
                id="nationality"
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
            id="pesanGan"
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

            </form> */}
          <form autoComplete="off" className='form-group'
          onSubmit={handleSubmit}>
            <label>Nama</label>
            <input 
            type="text" 
            className='form-control'
            // required
            onChange={(e)=>setNama(e.target.value)} 
            value={nama}>
            </input>
            
            <label>
                Email Address 
                <span> * </span>
                </label>
                <input 
                // type="email" 
                className="form-control" 
                placeholder="Example@domain.com"
                name ="email"
                value={email}
                // required
                onChange={(e)=>setEmail(e.target.value)}
                /><br></br>

              <label>
                Phone Number
                <span> * </span>
                </label>

                <input 
                type="text" 
                className="form-control" 
                placeholder="0857389xxxxx"
                name="number"
                value={Pnumber}
                // required
                onChange={(e)=>setNumber(e.target.value)}
                />

                <label>Nationality
                <span> * </span>
                </label>

                <select 
                className="form-control" 
                id="exampleFormControlSelect1"
                name="national"
                value={national}
                onChange={(e)=>setNational(e.target.value)}
                >

                <option value="Indonesia">Indonesia</option>
                <option value="Jepang">Jepang</option>
                <option value="Canada">Canada</option>
                <option value="German">German</option>
                <option value="Usa">USA</option>
                </select>

            <label>Message</label>
            <textarea
            className="form-control"
            rows="3"
            name="pesan"
            id="pesanGan"
            value={Ppesan}
            onChange={(e)=>setPpesan(e.target.value)}
            />
            
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
            </div>

        <div id="output">

        </div>
        
        <div className='view-container'>
          {forms.length>0&&<>
            <div className='table-responsive'>
      
                  <Stress forms={forms} />
                
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setForms([])}>Hapus</button>
          </>}
          {forms.length < 1 && <div>Kosong</div>}
        </div>
</div>
    );
}

export default Contact_Us
