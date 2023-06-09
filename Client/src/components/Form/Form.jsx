import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form(props){

    const [userData, setUserData] =useState({
        email:"",
        password:"",
     });

    const [errors, setErrors] =useState ({
        email:"",
        password:"",
    })
     
    const handleChange =e =>{
             const {name,value}= e.target;
             setUserData({
                ...userData,
                [name]: value
             })
    //console.log(userData);

             setErrors(
                validation({
                    ...userData,
                    [name]:value,
                }))
         };

const handleSubmit= (e)=>{
    e.preventDefault();
        props.login(userData);
}

    return(
        <div className={styles.container}>
        <form onSubmit={handleSubmit}>        
            <label>Email: </label>
            <input
             type="text"
             name= "email"
             value={userData.email}
             onChange={handleChange}
             />
             <p className={styles.error}>
                {errors.email && errors.email}            
             </p>
            <br/>
            <label>Password: </label>
            <input
            type="password"
            name= "password"
            value={userData.password}
            onChange={handleChange}
            />
             <p className={styles.error}>
                {errors.password && errors.password}
            
             </p>
            <hr/>
            <button type="submit">Submit</button>
        </form>   
        </div>
        
    )
}