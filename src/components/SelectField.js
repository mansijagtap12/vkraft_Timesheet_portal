import React from 'react'
import { Select, Col } from 'antd';

const SelectField = ({ placeholder, options, span, name, onChange, value, defaultValue }) => {
  return (
    <Col className="gutter-row" span={span} style={{marginBottom:'10px'}}>
    <label htmlFor={name}>{placeholder}</label>
  <Select
      defaultValue={defaultValue}
      style={{
        width: 175,
      }}
      onChange={onChange}
      options={options}
      value={value}
    />
  </Col>
  )
}

export default SelectField;