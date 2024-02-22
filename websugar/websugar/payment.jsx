import React from 'react';
import './payment1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
    return (
        <>
            <div className='conatiner'>
                <div className='child1'>
                    <p>To get the Payment link</p>
                    <h1>Fill this ABR Form</h1>
                    <div className='child2'>
                        <table cellSpacing={10} cellPadding={8}>
                            <tr>
                                <td className='n1'>NAME<br></br><input type='text' placeholder='Enter the name' required></input></td>
                                <td className='n1'>PHONE NO.<br></br><input type='text' placeholder='Enter your 10 Dig' required></input></td>
                            </tr>
                            <tr>
                                <td className='n1'>EMAIL<br></br><input type='text' placeholder='Enter Your email' required></input></td>
                                <td className='n1'>PASSWORD<br></br><input type='password' placeholder='Enter Your password' required></input></td>
                            </tr>
                            <tr>
                                <td className='n1'>PAN<br></br><input type='text' placeholder='Enter your pan number' required></input></td>
                                <td className='n1'>AADHAR NUMBER<br></br><input type='text' placeholder='Enter your number' required></input></td>
                            </tr>
                            <tr>
                                <td className='n1'>COMPANY NAME<br></br><input type='text' placeholder='Enter the name' required></input></td>
                                <td className='n1'>LINKED PROFILE<br></br><input type='text' placeholder='Enter company name' required></input></td>
                            </tr>
                            <tr><td><button>Submit<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Payment;
