import React from 'react';

const Input = ({placeholder, value, onChange, label, className}) => {
  return <div>
    <label className="block font-bold mb-2" htmlFor="input-id">{label}</label>
    <input
      id="input-id"
      type="text"
      className= {`bg-linen border-2 border-taupe placeholder-taupe placeholder-opacity-60 w-96 text-taupe m-2 py-2 px-4 rounded text-sm ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      
    />
  </div> 
}

export default Input;