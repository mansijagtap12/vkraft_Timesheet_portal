import React from 'react';
import { Button, Result } from 'antd';
import AppLayout from './AppLayout';
import { useNavigate } from 'react-router-dom';


const ExtractMessage = ({eInvoiceNo}) => {
  const navigate = useNavigate();
  return (
    <AppLayout>
    <Result
    status="success"
    title="Successfully Submitted!"
    subTitle={eInvoiceNo}
    extra={[
      <Button type="primary" onClick={() => navigate('/home')}>
        Submit Invoice
      </Button>,
      <Button type="primary" onClick={() => navigate('/submittedInvoices')}>
      View Invoice
    </Button>,
    ]}
    />
    </AppLayout>
  );
};
export default ExtractMessage;