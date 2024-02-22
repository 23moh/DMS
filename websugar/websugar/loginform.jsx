import React from 'react';
import './loginform1.css'
const Loginform = () => {
    return (
        <div>
            <div className='container'>
                
                <div className='child1'>
                    <h1>Login Form</h1>
                    <div className='table1'>
                        <table>
                            <tr>
                                <td className='data1'>Username<br></br><input type='text' placeholder='Enter Username'></input></td>
                            </tr>
                            <tr>
                                <td className='data1'>Email<br></br><input type='text' placeholder='Enter Email'></input></td>
                            </tr>
                            <tr>
                                <td className='data1'>Password<br></br><input type='password' placeholder='Enter Password'></input></td>
                            </tr>
                            <tr>
                                <td className='data2'><button>Login</button></td>
                            </tr><br></br>
                            <tr>
                                <td><a href='#'> I am Forgotten</a></td>
                                <td><a href='#'>Sing In</a></td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Loginform;
