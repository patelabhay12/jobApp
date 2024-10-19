import React, { useState } from 'react'
import Layout from './Layout/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        name: '',
        phoneNumber: '',
        companyName: '',
        companyEmail: '',
        employeeSize: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Yes verify your otp");
            let comp=await axios.post('http://localhost:8080/api/company/register', {
                name: registerData.name,
                phoneNumber: registerData.phoneNumber,
                companyName: registerData.companyName,
                companyEmail: registerData.companyEmail,
                employeeSize: registerData.employeeSize,
            });
            console.log(comp);
            setMessage('Registration successful! Please verify your email.');
            navigate('/verification');
            setRegisterData({
                name: '',
                phoneNumber: '',
                companyName: '',
                companyEmail: '',
                employeeSize: '',
            });
            console.log(registerData)
        } catch (error) {
            setMessage('Failed to register. Please try again.');
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
                            <i className="fas fa-user text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={registerData.name}
                                onChange={handleChange}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <div className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <i className="fas fa-phone text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Phone no."
                                name="phoneNumber"
                                value={registerData.phoneNumber}
                                onChange={handleChange}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <div className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <i className="fas fa-user text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Company Name"
                                name="companyName"
                                value={registerData.companyName}
                                onChange={handleChange}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <div className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <i className="fas fa-envelope text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Email"
                                name="companyEmail"
                                value={registerData.companyEmail}
                                onChange={handleChange}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <div className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                            <i className="fas fa-users text-gray-500 mr-3"></i>
                            <input
                                type="text"
                                placeholder="Employee Size"
                                name="employeeSize"
                                value={registerData.employeeSize}
                                onChange={handleChange}
                                className="appearance-none bg-transparent border-none text-gray-700  leading-tight focus:outline-none"
                            />
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-3 text-center align-middle p-2">By clicking on proceed you will accept our <span className='text-blue-700'>Terms</span> & <span className='text-blue-700'>Conditions</span></p>
                    <button onClick={handleSubmit} className="text-white flex align-middle text-center justify-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold ">Proceed</button>
                </div>
            </div>

        </Layout>

    )
}

export default SignUp
