// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    mobile: ''
  });

  const [emailOtp, setEmailOtp] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const { companyName, email: userEmail, password, mobile: userMobile } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(res)
      setEmail(formData.email);
      setMobile(formData.mobile);
      setIsRegistered(true);
      // alert(res.data.msg);
    } catch (err) {
      // console.error(err.response.data.errors);
    }
  };

  const verifyEmailOtp = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-email-otp', { email, otp: emailOtp });
      alert('Email verified successfully!');
    } catch (err) {
      console.error(err.response.data.errors);
    }
  };

  const verifyPhoneOtp = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/verify-phone-otp', { mobile, otp: phoneOtp });
      alert('Phone verified successfully!');
    } catch (err) {
      console.error(err.response.data.errors);
    }
  };

  return (
    <>
      {!isRegistered ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={onChange}
            required
            placeholder="Company Name"
          />
          <input
            type="email"
            name="email"
            value={userEmail}
            onChange={onChange}
            required
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            placeholder="Password"
          />
          <input
            type="text"
            name="mobile"
            value={userMobile}
            onChange={onChange}
            required
            placeholder="Mobile Number"
          />
          <button type="submit">Register</button>
        </form>
      ) : (
        <>
          <form onSubmit={verifyEmailOtp}>
            <input
              type="text"
              name="emailOtp"
              value={emailOtp}
              onChange={e => setEmailOtp(e.target.value)}
              required
              placeholder="Enter Email OTP"
            />
            <button type="submit">Verify Email OTP</button>
          </form>
          <form onSubmit={verifyPhoneOtp}>
            <input
              type="text"
              name="phoneOtp"
              value={phoneOtp}
              onChange={e => setPhoneOtp(e.target.value)}
              required
              placeholder="Enter Phone OTP"
            />
            <button type="submit">Verify Phone OTP</button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;
