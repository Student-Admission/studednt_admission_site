import React from 'react';
import { Form, Input, message } from 'antd';
import '../styles/RegisterStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      console.log('Received values of form:', values);
      const res = await axios.post('http://localhost:5001/api/v1/auth/login', values);
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        message.success(res.data.message || 'Login Successfully');
        navigate('/');
      } else {
        message.error(res.data.message || 'Failed to login');
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error('Failed to login');
    }
  };

  return (
    <div className="form-container flex items-center justify-center min-h-screen bg-gray-100">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="p-12 shadow-2xl rounded-lg border-2 border-black bg-white login-form"
      >
        <h1 className="text-center text-2xl font-bold mb-6">Login Page</h1>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" className="p-3 border rounded large-input" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="password" className="p-3 border rounded large-input" />
        </Form.Item>

        <div className="flex items-center justify-between">
                    <Link to="/register" className="text-blue-500 mr-28">
                        Not a user? Register here
                    </Link>
                    <button className="btn btn-primary mr-60" type="submit">
                        Login
                    </button>
         </div>
      </Form>
    </div>
  );
};

export default Login;
