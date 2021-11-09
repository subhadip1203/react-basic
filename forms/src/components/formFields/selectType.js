import React from 'react'

function SelectType(props) {
  const handleChange = ()=>{
    console.log("value cahnge")
  }
  return (
    <>
      <select value='A' onChange={handleChange}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    </>
  )
}

export default SelectType
