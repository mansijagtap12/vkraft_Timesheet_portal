import React from 'react';
import { Col, Input } from 'antd';


const InputField = ({ placeholder, name, value, onChange, span }) => {
    return (
        <Col className="gutter-row" span={span} style={{marginBottom:'10px'}}>
            <label htmlFor={name}>{placeholder}</label>
            <Input placeholder={placeholder} name={name} value={value} onChange={onChange} style={{height:'32px'}} />
        </Col>
    );
}

export default InputField;