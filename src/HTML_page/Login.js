import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login=({history})=>
(
    <Formik
    initialValues={{
        UserName:'',
        Password:''
    }}
    onSubmit={(values)=>
    {
      axios.post("http://localhost:5000/Login",values)
      .then(res=>
        {
          var valid=res.data.valid;
          if(valid)
          {
            history.push('./Message');
          }
          else
          {
            alert("Invalid UserName and Password");
          }
        },
      );
    }}
        validationSchema={
          yup.object({
              UserName:yup.string()
              .required("Required")
              .min(4,"Minimum 4 characters required")
              .max(8,"Maximum length is 8 character"),
              Password:yup.string()
              .required("Required")
              .min(4,"Minimum 4 characters required")
              .max(8,"Maximum length is 8 characters")
            })
        }
    >
        {({handleChange, handleSubmit, errors, values, handleBlur})=>
      (
        <form onSubmit={handleSubmit}>
        <div className="container mt-4">
     <div className="jumbotron">
       <div className="form-group">
     <label>User Name:</label>
     <input
     type="text"
     name="UserName"
     className={errors.UserName ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.UserName}
     />
     {errors.UserName ? (<div className="text-danger">{errors.UserName}</div>):null}
     </div>
     <div className="form-group">
     <label>Password:</label>
     <input
     type="password"
     name="Password"
     className={errors.Password ? "form-control is-invalid":"form-control"}
     autoComplete="off"
     onBlur={handleBlur}
     onChange={handleChange}
     value={values.Password}
     />
    {errors.Password ? (<div className="text-danger">{errors.Password}</div>):null}
     </div>
     <div className="form-group">
       <Link to="./Register">Don't have an account?</Link>
     </div>

     <div>
       <Button type="submit">Login</Button>
       </div>
     </div>
     </div>
     </form> 
      )
     }

    </Formik>
);
export default Login;