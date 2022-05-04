import React from 'react'

const Button = ({buttonText, reqType, setRecType}) => {
  return (
    <button
    className={buttonText === reqType ? 'selected' : null}
    type='button'
    onClick={() => setRecType(buttonText)}
    >
        {buttonText}
    </button>
  )
}

export default Button