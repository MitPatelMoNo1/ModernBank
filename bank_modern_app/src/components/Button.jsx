import React from 'react'

const Button = ({styles}) => {
  return (
    <div>
      <button type='button' className={`py-5 px-6 bg-blue-gradient rounded-full font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
          Get Started
      </button>
    </div>
  )
}

export default Button