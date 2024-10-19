import React, { useState } from 'react'
import Layout from './Layout/Layout'
import axios from 'axios';
const OtpVerify = () => {

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/company/verify-otp', { email, otp });
            setMessage('OTP verified successfully!');
        } catch (error) {
            setMessage('Failed to verify OTP. Please try again.');
        }
    };
    return (
        <Layout>
            <div className="px-5 py-24 flex justify-center items-center">
                <div className="w-[50%]">
                    <p className="w-[85%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate excepturi natus necessitatibus quo laboriosam accusamus, sed rem error placeat voluptatem at, amet illum unde cupiditate molestias eligendi dicta, laudantium assumenda soluta deleniti temporibus! Alias obcaecati beatae quisquam, laudantium a eligendi!</p>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:mt-0 border p-7 rounded-xl border-blue-600">
                    <h2 className="text-gray-900 text-lg mb-1 title-font text-center font-bold">Sign Up</h2>
                    <p className="leading-relaxed mb-5 text-gray-600 text-center">Lorem ipsum, dolor sit amet...</p>


                    <div className="relative mb-4">
                        <div className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <i className="fas fa-envelope text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Email OTP"
                                value={email}
                                onChange={(e)=>setEmail(e.target.email)}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold mb-4">Verify</button>
                    <div className="relative mb-4">
                        <div className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <i className="fas fa-phone text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Phone OTP"
                                value={otp}
                                onChange={(e)=>setOtp(e.target.value)}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />

                            {0 && <button class="items-center bg-green-500 text-white rounded-full focus:outline-none hover:bg-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </button> ? "" : ""}
                        </div>

                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold mb-4" onClick={handleVerify}>Verify</button>

                </div>
            </div>
        </Layout>
    )
}

export default OtpVerify;
