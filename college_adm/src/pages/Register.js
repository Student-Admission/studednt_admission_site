import React from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../styles/RegisterStyle.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';

const Register = () => {
    const navigate = useNavigate(); // Use useNavigate hook to get navigation function
    const dispatch = useDispatch();
    const onFinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            console.log('Received values of form:', values);
            const res = await axios.post('http://localhost:5001/api/v1/auth/register', values);
            dispatch(hideLoading());
            if (res.data.success) {
                message.success("Registration successful");
                navigate('/login'); // Navigate to /login route after successful registration
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.error('Error:', error);
            message.error("Something went wrong");
        }
    };

    return (
        <div className="form-container">
            <Form
                layout="vertical"
                onFinish={onFinishHandler}
                className="p-12 shadow-2xl rounded-lg border-2 border-black register-form"
            >
                <h3 className="text-center large-bold-heading">Register Page</h3>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" className="large-input" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type="email" className="large-input" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input type="password" className="large-input" />
                </Form.Item>

                <Form.Item
                    label="Confirm password"
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input type="password" className="large-input" />
                </Form.Item>

                <div className="flex items-center justify-between">
                    <Link to="/login" className="text-blue-500 mr-28">
                        Already a user? Login here
                    </Link>
                    <button className="btn btn-primary mr-60" type="submit">
                        Register
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default Register;
