import React, { useState } from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import addre1 from '../../assets/addre1.png'
import addre2 from '../../assets/addre2.png'
import addre3 from '../../assets/addre3.png'
import input2 from '../../assets/input2.png'
import input1 from '../../assets/input1.png'
import input3 from '../../assets/input3.png'
import axios from "axios"


const Contact = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState('');

    const formHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setSubmissionStatus('Submitting...');

        try {
            const response = await axios.post ('http://localhost:5000/api/form/info', formData); // Replace with your API endpoint
            setSubmissionStatus('Request submitted successfully!');
            console.log('response:', response.data);
            // Optionally, clear the form or redirect
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmissionStatus('Error submitting request. Please try again.');
            console.error('Error submitting form:', error);
        }
    };


    const navigate = useNavigate();
    return (
        <div className='contact-container'>
            <div className="container-header">
                <div className="container-header-overlay">
                    <div className="container-header-content">
                        <div className="container-header-content">
                            <h1>CONTACT PAGE</h1>
                            <h2>Your Feedback is Important</h2>
                        </div>

                    </div>

                </div>

                <div className="container-navigate">
                    <span onClick={() => navigate('/')}>Home</span>
                    <MdArrowBackIos />
                    <span onClick={() => navigate('/Contact')}>Contact</span>

                </div>

            </div>

            <div className="address-holder">
                <div className="address-holder-content">
                    <img src={addre1} alt="" />
                    <h2>Address Line</h2>
                    <span>145, Awoyaya Road, Ibeju-Lek</span>
                </div>
                <div className="address-holder-content">
                    <img src={addre2} alt="" />
                    <h2>Phone Address</h2>
                    <span>+2348055380547</span>
                </div>
                <div className="address-holder-content">
                    <img src={addre3} alt="" />
                    <h2>Mail Address</h2>
                    <span>nativepot@gmail.com</span>
                </div>
            </div>
            <div className="contact-info-container">
                <div className="contact-info-container-left">
                    <h2>Get in touch</h2>
                    <span>You can reach out to us via the information provided above or make use of the google map</span>
                    <div className="google-map">
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.804920834356!2d3.702249776065406!3d6.470596053377883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bff5d1f99b153%3A0x21940ac8f95390d4!2sRoyal%20Bliss%20Event%20Centre!5e0!3m2!1sen!2sng!4v1754871984492!5m2!1sen!2sng"
                            width="90%" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div className="contact-info-container-right">
                    <h2>Fill Up The Form</h2>
                    <span>Your email address will not be published. Required fields are marked *</span>
                    <form onSubmit={onSubmitHandler} className='form-input'>
                        <div className="input-name">
                            <img src={input3} alt="" />
                            <input name='name' onChange={formHandler} value={formData.name} type="text" placeholder='Your Name' />
                        </div>
                        <div className="input-name">
                            <img src={input1} alt="" />
                            <input name='email' onChange={formHandler} value={formData.email} type="text" placeholder='Email Address' />
                        </div>
                        <div className="input-name-comment">
                            <img src={input2} alt="" />
                            <input name="message" onChange={formHandler} value={formData.message} type="text" placeholder='Write Your Message here' />
                        </div>

                    </form>
                    <button type='submit'>Submit</button>

                </div>
            </div>

        </div>
    )
}

export default Contact;