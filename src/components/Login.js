import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LogoIcon from '../assets/images/Vkraft.png';
import TimesheetImg from '../assets/images/timesheet.png';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState('login'); // State to manage form type: login or register

  // const onFinish = async (values) => {
  //   setLoading(true);
  
  //   const { username, password } = values;
  
  //   try {
  //     // Make an API request to your endpoint
  //     const response = await axios.get(`https://4.240.73.173:8087/login?userName=${username}&password=${password}`);
  //     console.log('API Response:', response.data); 
  //     // Assuming your API responds with success or failure
  //     if (response.status===200) {
  //       onLogin(username);
  //       navigate('/main');
        
  //     } else {
  //       Modal.error({
  //         title: 'Login Failed',
  //         content: 'Invalid username or password. Please try again.',
  //       });
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error); // Log any errors for debugging
  //     Modal.error({
  //       title: 'Error',
  //       content: 'An error occurred during login. Please try again later.',
  //     });
  //   }
  
  //   setLoading(false);
  // };
  const onFinish = async (values) => {
    setLoading(true);
  
    const { username, password } = values;
  
    // Static username and password for testing
    const staticUsername = 'User';
    const staticPassword = '123';
  
    try {
      if (username === staticUsername && password === staticPassword) {
        // Simulate a successful login
        onLogin(username);
        navigate('/main');
      } else {
        Modal.error({
          title: 'Login Failed',
          content: 'Invalid username or password. Please try again.',
        });
      }
    } catch (error) {
      console.error('Login error:', error); // Log any errors for debugging
      Modal.error({
        title: 'Error',
        content: 'An error occurred during login. Please try again later.',
      });
    }
  
    setLoading(false);
  };
  

  const onRegisterFinish = (values) => {
    console.log('Register values:', values);
    Modal.success({
      title: 'Registration Successful',
      content: 'You have successfully registered. Please log in with your new credentials.',
    });
    setFormType('login'); // Switch back to login form after successful registration
  };

  const toggleFormType = () => {
    setFormType(formType === 'login' ? 'register' : 'login');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} className="text-center">
          <img src={TimesheetImg} alt="einvoiceIcon" className="einvoice-icon" />
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className="login-form-container">
          <img src={LogoIcon} alt="LoginLogo" className="login-logo" />
            <Form
              name={formType === 'login' ? 'normal_login' : 'register'}
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={formType === 'login' ? onFinish : onRegisterFinish}
            >
              <h2 className='login-header'>{formType === 'login' ? 'Login' : 'Register'}</h2>
              {formType === 'login' && (
                <>
                  <Form.Item
                    name="username" 
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                      Log in
                    </Button>
                    <a className="register-now" href="#" onClick={toggleFormType}>Register now</a>
                  </Form.Item>
                </>
              )}

              {formType === 'register' && (
                <>
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                      Register
                    </Button>
                    <a className="login-now" href="#" onClick={toggleFormType}>Log in</a>
                  </Form.Item>
                </>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
