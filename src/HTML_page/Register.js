import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
const phone = /[0-9]{10}$/;

const Register=({history})=>
(
    <Formik
    initialValues={{
        Name:'',
        UserName:'',
        PhoneNumber:'',
        Password:'',
        ConfirmPassword:''
    }}
    onSubmit={(values)=>
    {
        axios.post("http://localhost:5000/Register",values)
        history.push('./Login')
      }}
        validationSchema={
          yup.object({
              Name:yup.string()
              .required("Required")
              .min(4,"Minimum 4 characters required")
              .max(8,"Maximum length is 8 character"),
              UserName:yup.string()
              .required("Required")
              .min(4,"Minimum 4 characters required")
              .max(8,"Maximum length is 8 characters"),
              PhoneNumber:yup.string()
              .required("Required")
              .matches(phone,"Phone number is invalid"),
              Password:yup.string()
              .required("Required")
              .min(4,"Minimum 4 characters required")
              .max(8,"Maximum length is 8 characters"),
             ConfirmPassword:yup.string()
             .required("Required")
             .oneOf([yup.ref('Password'),null],"Password doesn't match")
            })
        }
    >
     {({handleChange, handleSubmit, errors, values, handleBlur})=>
      (
        <form onSubmit={handleSubmit}>
        <div className="container mt-4">
     <div className="jumbotron">
       <div className="form-group">
     <label>Name:</label>
     <input
     type="text"
     name="Name"
     autoCorrect="off"
     className={errors.Name ? "form-control is-invalid":"form-control"}
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.Name}
     />
     {errors.Name ? (<div className="text-danger">{errors.Name}</div>):null}
     </div>
     <div className="form-group">
     <label>User Name:</label>
     <input
     type="text"
     name="UserName"
     autoCorrect="off"
     className={errors.UserName ? "form-control is-invalid":"form-control"}
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.UserName}
     />
    {errors.UserName ? (<div className="text-danger">{errors.UserName}</div>):null}
     </div>
     <div className="form-group">
     <label>Phone Number:</label>
     <input
     type="text"
     name="PhoneNumber"
     autoCorrect="off"
     className={errors.PhoneNumber ? "form-control is-invalid":"form-control"}
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.PhoneNumber}
     />
    {errors.PhoneNumber ? (<div className="text-danger">{errors.PhoneNumber}</div>):null}
     </div>
     <div className="form-group">
     <label>Password:</label>
     <input
     type="password"
     name="Password"
     autoCorrect="off"
     className={errors.Password ? "form-control is-invalid":"form-control"}
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.Password}
     />
    {errors.Password ? (<div className="text-danger">{errors.Password}</div>):null}
     </div>
     <div className="form-group">
     <label>Confirm Password:</label>
     <input
     type="password"
     name="ConfirmPassword"
     autoCorrect="off"
     className={errors.ConfirmPassword ? "form-control is-invalid":"form-control"}
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.ConfirmPassword}
     />
    {errors.ConfirmPassword ? (<div className="text-danger">{errors.ConfirmPassword}</div>):null}
     </div>
     <div>
       <Button type="submit">Register</Button>
       </div>
     </div>
     </div>
     </form> 
      )
     }
    </Formik>
);
export default Register;