import React, {useState, useEffect} from 'react';
import validasi from "./validasi";
import { Stress } from './Stress';
import {useDispatch,useSelector} from "react-redux"
import { tambahData } from '../store/contactSlice';
import { Link } from 'react-router-dom';
import Review from './Review';


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('forms');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const Contact_Us = () => {

//   const contacts = useSelector((state) => state.contacts.contacts)
//     const dispatch = useDispatch()

//     const[values,setValue] = useState(contacts)


//   const handleSubmit = (e) => {
//               const newData = {
//                   firstname: values.firstname,
//                   email: values.email,
//                   number: values.number,
//                   national: values.national,
//                   message: values.pesan
//               }
//               dispatch(tambahData(newData));

//     useEffect(() => {
//         setValue(
//             {
//                 firstname: "",
//                 email: "",
//                 number: "",
//                 national: "",
//                 pesan: "",
//             }
//         )
//         dispatch(tambahData(values));
//     },[]);

// //  // main array of objects state || books state || books array of objects
  const [forms, setForms]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [email, setEmail]=useState('');
  const [author, setAuthor]=useState('');
  const [Pnumber, setNumber]=useState('');
  const [national, setNational]=useState('');
  const [Ppesan, setPpesan]=useState('');
  const [firtsname, setFirtsname]=useState('');
  

  // form submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let Cform={
      title,
      email,
      author,
      Pnumber,
      national,
      Ppesan,
      firtsname
    }
    setForms([...forms,Cform]);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('forms',JSON.stringify(forms));
  },[forms])

    
  

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
        <form autoComplete="off" className='form-group'
          onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>
                Email Address 
                <span> * </span>
                </label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="Example@domain.com"
                name ="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                /><br></br>

            <label>Author</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>

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
            <label>Nama</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFirtsname(e.target.value)} value={firtsname}></input>
            <br></br>
            {/* <Link to="/Stress"> */}
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
            {/* </Link> */}
          </form>
            </div>

  
        <div className='view-container'>
          {forms.length>0&&<>
            <div className='table-responsive'>
                  <Stress forms={forms} />
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setForms([])}>Remove All</button>
          </>}
          {forms.length < 1 && <div>No books are added yet</div>}
        </div>  
</div>
);
          }



export default Contact_Us
