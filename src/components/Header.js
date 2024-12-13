import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ProfileIcon from '../assets/images/profileIcon.png';

const { Header: AntHeader } = Layout;

const Header = ({ title, isAuthenticated, onLogout, collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    setShowMenu(false);
    onLogout();
    navigate('/login');
  };

  return (
    <AntHeader
      style={{
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <h1 style={{ marginLeft: '16px' }}>{title}</h1>
      </div>
      {isAuthenticated && (
        <div className="profile-container" ref={menuRef} style={{ marginRight: '16px' }}>
          <img
            src={ProfileIcon}
            alt="Profile"
            className="profile-icon"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
          {showMenu && (
            <div className="menu" style={{ position: 'absolute', top: '64px', right: '16px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px', zIndex: 1000 }}>
              <button onClick={handleLogout} style={{ display: 'block', width: '100%', padding: '8px', border: 'none', background: 'none', textAlign: 'left' }}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
