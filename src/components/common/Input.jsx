import React from 'react';

const Input = ({placeholder, value, onChange, label}) => {
  return <div>
    <label className="block text-taupe text-sm font-bold mb-2" htmlFor="input-id">{label}</label>
    <input
      id="input-id"
      type="text"
      className="text-taupe text-sm font-bold mb-2"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
}

export default Input;