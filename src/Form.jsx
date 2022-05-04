import React from 'react'
import Button from './Button'

const Form = ({reqType, setRecType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button 
        buttonText='users'
        reqType={reqType}
        setRecType={setRecType}
        />
        <Button 
        buttonText='posts'
        reqType={reqType}
        setRecType={setRecType}
        />
        <Button 
        buttonText='comments'
        reqType={reqType}
        setRecType={setRecType}
        />
    </form>
  )
}

export default Form