import {useState} from 'react';
import axios from 'axios';
import CustomInput from '../components/CustomInput';

const initialState = {
    email: '',
    password: ''
};



const Signin = () => {

    const [signinInfo, setSigninInfo] =  useState(initialState);

    const handleSubmit = async(e) => {
        e.preventDefault();

       const response = await axios.post (
           'https://iwallet-api.herokuapp.com/api/auth/signin',
           {...signinInfo}
       );
       console.log('TCL: signin -> response', response);
    };

    const handleInputChange = ({target}) => {
        //console.log(e.target.value);
        const {name, value} = target
        setSigninInfo({
            ...signinInfo,
            [name] : value
        })


    }


    return  (
<div className="signin">

    <form onSubmit={handleSubmit}>
        <CustomInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={signinInfo.email}
            onChange={handleInputChange}/>
        <CustomInput
            type="password"
            name="password"
            placeholder="Enter your password"
            value={signinInfo.password}
            onChange={handleInputChange}/>

        <button type="submit">
            Submit
        </button>
    </form>

</div>

    )
};

export default Signin