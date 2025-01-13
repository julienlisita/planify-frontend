import React from 'react'

const Button = ({ value, onClick }) => {
  return (<div>
    <button
      className="bg-taupe text-linen m-2 py-2 px-4 rounded"
      type='button'
      onClick={() => onClick(value)} >
      {value}
    </button>
  </div>
  );
};

export default Button