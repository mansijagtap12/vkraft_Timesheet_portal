import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VkraftLogo from '../assets/images/kraftLogo.png';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FileSearchOutlined,
  LogoutOutlined,
  FilePdfOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown } from 'antd';
import './MainPage.css';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children, username }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/main');
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        onBreakpoint={(broken) => {
          if (broken) {
            setCollapsed(true);
          } else {
            setCollapsed(false);
          }
        }}
      >
        <div
          className="demo-logo-vertical"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={VkraftLogo}
            alt="Logo"
            className={`logo ${collapsed ? 'collapsed-logo' : ''}`}
            style={{ width: '100%' }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[]}
          items={[
            {
              key: 'home',
              icon: <HomeOutlined />,
              label: 'Home',
              onClick: handleLogoClick,
            },
            {
              key: '1',
              icon: <FilePdfOutlined />,
              label: 'Weekly timesheet',
              onClick: () => navigate('/home'),
            },
            {
              key: '2',
              icon: <FileSearchOutlined />,
              label: 'Employee List',
              onClick: () => navigate('/EmployeeList'),
            },
            {
              key: '3',
              icon: <FileSearchOutlined />,
              label: 'Time Off request',
              onClick: () => navigate('/home'),
            },
            {
              key: '4',
              icon: <FileSearchOutlined />,
              label: 'certification',
              onClick: () => navigate('/home'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#f9bb49",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 50,
              height: 64,
            }}
          />
          <h1 style={{ margin: 0 }}>Vkraft Portal </h1>
          <h3  style={{ fontSize: '18px', marginRight: '-350px', marginTop:'20px' }} >Hello {username}!</h3> {/* Display username here */}
          <Dropdown overlay={profileMenu} placement="bottomRight">
            <Button type="text" icon={<UserOutlined />} style={{ fontSize: '16px', marginRight: '16px' }} />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: '20px 16px',
            padding: '10px',
            height: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            alignItems: 'center',
          }}
        >
          {typeof children === 'function' ? children() : children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
