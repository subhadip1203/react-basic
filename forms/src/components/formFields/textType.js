import React from 'react'

function TextType(props) {
  const handleChange = ()=>{
    console.log("value cahnge")
  }
  return (
    <>
      <input type="text" {...props}  onChange={handleChange} />
    </>
  )
}

export default TextType
