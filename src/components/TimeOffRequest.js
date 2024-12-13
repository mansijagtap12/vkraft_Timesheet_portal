import React, { useState } from 'react';
import { Card, Row, Col, DatePicker, Input, Button } from 'antd';
import AppLayout from './AppLayout';

const { TextArea } = Input;

const TimeOffRequest = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [message, setMessage] = useState('');

  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = () => {
    // Handle the submit logic for time off request
    console.log('Time off request submitted', { startDate, endDate, message });
  };

  return (
    <Card title="Time Off Request" style={{ backgroundColor: 'rgb(210 231 240 / 40%)', color: '#333' }}>
      <Row gutter={16}>
        <Col span={12}>
          <DatePicker
            placeholder="Start Date"
            style={{ width: '100%' }}
            onChange={handleStartDateChange}
            value={startDate}
          />
        </Col>
        <Col span={12}>
          <DatePicker
            placeholder="End Date"
            style={{ width: '100%' }}
            onChange={handleEndDateChange}
            value={endDate}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '16px' }}>
        <Col span={24}>
          <TextArea
            placeholder="Message to Approver"
            rows={4}
            value={message}
            onChange={handleMessageChange}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '16px' }}>
        <Col span={24}>
          <Button type="primary" onClick={handleSubmit} style={{ width: '100%' }}>
            Submit Request
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

const MainPage = ({ username }) => {
  const cardData = [
    { title: 'Attendance Tracking', value: 5, color: 'rgb(163 216 138 / 40%)' },
    { title: 'Pending Leaves', value: 1, color: 'rgb(216 138 138 / 40%)' },
    { title: 'Timesheets Submitted', value: 1, color: 'rgb(192 177 121 / 40%)' },
    { title: 'Timesheets Submitted', value: 1, color: 'rgb(138 172 216 / 40%)' },
  ];

  return (
    <AppLayout username={username}>
      <div className="main-page-content">
        <Row gutter={16} justify="center">
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                style={{
                  backgroundColor: card.color,
                  color: '#fff',
                  textAlign: 'center',
                  borderRadius: '8px',
                }}
              >
                <h3>{card.title}</h3>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{card.value}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Add TimeOffRequest component below */}
        <TimeOffRequest />
      </div>
    </AppLayout>
  );
};

export default TimeOffRequest;
