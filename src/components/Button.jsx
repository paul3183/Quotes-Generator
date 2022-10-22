import React from 'react';


const Button = ({change, color, colors}) => {
  return (
    <div className='btn'>
      <button style={{backgroundColor: colors[color]}} onClick={change}>{">"}</button>
    </div>
  );
};

export default Button;