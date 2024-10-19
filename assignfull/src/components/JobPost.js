import React, { useState } from 'react'
import api from "../api/api";
import Layout from './Layout/Layout';

const JobPost = () => {

    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        experienceLevel: '',
        endDate: '',
        candidates: '',
    });
    const [isSub, setIsSub] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(jobData);
        const candidateEmails = jobData.candidates.split(',').map((email) => email.trim());
        try {
            await api.post('/company/post-job', {
                title: jobData.title,
                description: jobData.description,
                experienceLevel: jobData.experienceLevel,
                endDate: jobData.endDate,
                candidates: candidateEmails,
            });
            setMessage('Job posted successfully');
            setJobData({
                title: '',
                description: '',
                experienceLevel: '',
                endDate: '',
                candidates: '',
            });
            setIsSub(false);
        } catch (error) {
            console.log("Please login")
            setMessage('Failed to post job');
        }
    };
    return (
        <Layout>
            <div className='flex border-t border-gray-500'>
                <div className="w-[9%] border-r border-gray-400">
                    <div className="m-11">
                        <i class="fas fa-home text-gray-500 text-2xl"></i>
                    </div>

                </div>
                
                <div className="flex p-20 align-middle m-10 w-[90%]">
                    {
                        isSub ?
                            (<div className="">
                                <form>
                                    <div className="mb-4 flex items-center">
                                        <label className="block text-sm font-medium text-gray-700 w-1/3" htmlFor="job-title">Job Title</label>
                                        <input type="text"
                                            id="job-title"
                                            name='title'
                                            value={jobData.title}
                                            onChange={handleChange}
                                            className="mt-1 p-2 block w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter job title" required

                                        />
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <label className="block text-sm font-medium text-gray-700 w-1/3" htmlFor="job-description">Job Description</label>
                                        <textarea
                                            id="job-description"
                                            rows={4}
                                            name='description'
                                            value={jobData.description}
                                            onChange={handleChange}
                                            className="mt-1 p-2 block w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter job description" required defaultValue={""} />
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <label className="block text-sm font-medium text-gray-700 w-1/3" htmlFor="experience-level">Experience Level</label>
                                        <select id="experience-level"
                                            name="experienceLevel"
                                            value={jobData.experienceLevel}
                                            onChange={handleChange}
                                            className="mt-1 p-2 block w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required>
                                            <option value="">Select experience level</option>
                                            <option value="entry">Entry Level</option>
                                            <option value="mid">Mid Level</option>
                                            <option value="senior">Senior Level</option>
                                        </select>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <label className="block text-sm font-medium text-gray-700 w-1/3" htmlFor="candidate-email">Candidate Email</label>
                                        <input type="email"
                                            id="candidate-email"
                                            name="candidates"
                                            value={jobData.candidates}
                                            onChange={handleChange}
                                            className="mt-1 p-2 block w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter candidate email" required />
                                    </div>
                                    <div className="mb-4 flex items-center relative">
                                        <label className="block text-sm font-medium text-gray-700 w-1/3" htmlFor="end-date">End Date</label>
                                        <input type="date"
                                            id="end-date"
                                            name="endDate"
                                            value={jobData.endDate}
                                            onChange={handleChange}
                                            className="mt-1 p-2 block w-2/3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required />
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2v2m-8-2v2M4 6h16M4 10h16m-7 4h7m-7 4h7M4 14h4" />
                                            </svg>
                                        </span>
                                    </div>
                                    <button type="submit" className="w-full mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleSubmit}>Submit</button>
                                </form>
                            </div>) : (
                                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700  transition" onClick={()=>setIsSub(true)}>
                                    Create Interview
                                </button>

                            )
                    }
                </div>
            </div>
        </Layout>
    )
}

export default JobPost;
