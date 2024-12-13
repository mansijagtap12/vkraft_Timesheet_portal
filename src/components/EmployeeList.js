import React from 'react';
import { Table, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AppLayout from './AppLayout';

const EmployeeList = () => {
  const dataSource = [
    {
      key: '1',
      employeeId: 'VKSS101',
      name: 'Mansi',
      project: 'Amway',
      
      rm: 'John',
      certifications: 'Flutter',
    },
    {
      key: '2',
      employeeId: 'VKSS101',
      name: 'Rina',
      project: 'AiA',
    
      rm: 'John',
      certifications: 'SQL',
    },
    {
      key: '3',
      employeeId: 'VKSS101',
      name: 'Riya',
      project: 'AiA+',
        
      rm: 'John',
      certifications: 'SQL',
    },
    {
      key: '4',
      employeeId: 'VKSS101',
      name: 'Gayatri',
      project: 'Product',
        
      rm: 'John',
      certifications: 'Kafka',
    },
    {
      key: '5',
      employeeId: 'VKSS101',
      name: 'John',
      project: 'Product',
    
      rm: 'John',
      certifications: 'SQL',
    },
    {
      key: '6',
      employeeId: 'VKSS101',
      name: 'Sai',
      project: 'AIA',
      
      rm: 'John',
      certifications: 'SQL',
    },
  ];

  const columns = [
    {
      title: 'Employee Id',
      dataIndex: 'employeeId',
      key: 'employeeId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      
      
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
    },
    
    {
      title: 'RM',
      dataIndex: 'rm',
      key: 'rm',
    },
    {
      title: 'Certifications',
      dataIndex: 'certifications',
      key: 'certifications',
    },
    {
      title: 'Technologies',
      dataIndex: 'Technologies',
      key: 'Technologies',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} />
          <Button type="link" danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <AppLayout>
      <div className="main-page-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0 }}>Employees List</h2>
          <Button type="primary" style={{ backgroundColor: 'blue', borderColor: '#fadb14' }}>
            Add Employee
          </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} bordered />
      </div>
    </AppLayout>
  );
};

export default EmployeeList;
