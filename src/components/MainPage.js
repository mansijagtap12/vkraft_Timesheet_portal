import React from 'react';
import { Card, Row, Col } from 'antd';
import AppLayout from './AppLayout';

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
      </div>
    </AppLayout>
  );
};

export default MainPage;
