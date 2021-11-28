import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
	fullName: '',
	userName: '',
	phoneNumber: '',
	avatarURL: '',
	password: '',
	confirmPassword: ''
};

const Auth = () => {
	const [form, setForm] = useState(initialState);
	const [isSignUp, setIsSignUp] = useState(false);

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
		console.log(form);
	};

	const switchMode = () => {
		setIsSignUp((prevIsSignUp) => !prevIsSignUp);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="auth__form-container">
			<div className="auth__form-container_fields">
				<div className="auth__form_container_fields-content">
					<p>{isSignUp ? 'Sign Up' : 'Sign In'}</p>
					<form onSubmit={handleSubmit}>
						{isSignUp && (
							<div className="auth__form-container_fields-content_input">
								<label htmlFor="fullName">Full Name</label>
								<input
									name="fullName"
									type="text"
									placeholder="Full Name"
									onChange={handleChange}
									required
								/>
							</div>
						)}
						<div className="auth__form-container_fields-content_input">
								<label htmlFor="userName">User Name</label>
								<input
									name="userName"
									type="text"
									placeholder="User Name"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="auth__form-container_fields-content_input">
								<label htmlFor="phoneNumber">phone Number</label>
								<input
									name="phoneNumber"
									type="number"
									placeholder="Phone Number"
									onChange={handleChange}
									required
								/>
							</div>
							{isSignUp && (
								<div className="auth__form-container_fields-content_input">
									<label htmlFor="avatarURL">avatar URL</label>
									<input
										name="avatarURL"
										type="number"
										placeholder="Avatar URL"
										onChange={handleChange}
										required
									/>
								</div>
							)}
							<div className="auth__form-container_fields-content_input">
									<label htmlFor="password">Password</label>
									<input
										name="password"
										type="password"
										placeholder="Password"
										onChange={handleChange}
										required
									/>
							</div>
							{isSignUp && (
								<div className="auth__form-container_fields-content_input">
									<label htmlFor="confirmPassword">Confirm Password</label>
									<input
										name="confirmPassword"
										type="password"
										placeholder="Confirm Password"
										onChange={handleChange}
										required
									/>
								</div>
							)}
							<div className="auth__form-container_fields-content_button">
								<button>{isSignUp ? "Sign Up" : "Sign In"}</button>
							</div>
					</form>
					<div className="auth__form-container_fields-account">
						<p>{isSignUp ? "Already have an account" : "Don't have an account?"}</p>
						<span onClick={switchMode}>{isSignUp ? 'Sign In' : 'Sign Up'}</span>
					</div>
				</div>
			</div>
			<div className="auth__form-container_image">
				<img src={signinImage} alt="sign in" />
			</div>
		</div>

	)
};

export default Auth;