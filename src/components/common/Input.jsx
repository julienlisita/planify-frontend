import React from 'react';

const Input = ({placeholder, value, onChange, label, className}) => {
  return <div>
    <label className="block font-bold mb-2" htmlFor="input-id">{label}</label>
    <input
      id="input-id"
      type="text"
      className= {`border border-taupe placeholder-taupe placeholder-opacity-60 w-96 text-black m-2 py-2 px-4 rounded text-sm ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      
    />
  </div> 
}

export default Input;