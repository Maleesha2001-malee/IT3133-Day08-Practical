import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const [user,setUser]= useState({username:'',pwd:'',error:''})
    const getTextInput =(e)=>{
        setUser((prevUser)=>({
            ...prevUser,[name]:CSSMathValue,
        }))
    }

    const authenticate=()=>{
        if(user.username==="Admin" && user.pwd === "abc@123"){
            setUser({username:"",pwd:"",error:""})
            navigate('/dash');
        }else{
            setUser({'error':"Please Check your username and password !"})
        }
    }
    return(
        <div>
            <h1>Login Here</h1>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type ="text" name="username" onChange={getTextInput}/></td>
                </tr>
                <tr>
                    <td style={{ color: 'red' }} colSpan={2}>{user.error}</td>
                </tr>
            </table>
            <button onClick={aunthenticate}>Login</button>
        </div>
    );
}