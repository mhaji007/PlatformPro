import {useState} from 'react';


const initialState = {
    email: '',
    password: ''
};



const Signin = () => {

    const [signinInfo, setSigninInfo] =  useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitting!!')
    }

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }


    return  (
        <div className="signin"> 
        
        <form onSubmit = {handleSubmit}>
            <input name = "eamil" placeholder="Enter your email" value = {signinInfo.email} onChange={handleInputChange}></input>
            <input name = "password" placeholder="Enter your password" value = {signinInfo.password} onChange={handleInputChange}></input>

            <submit type="submit"> Submit </submit>
        </form>
        
        
         </div>

    )
};

export default Signin