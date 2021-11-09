import React from 'react'
import TextType from './textType'
import SelectType from './selectType'


function FormField(props) {

  const {name,error,hasError, type, ...rest } = props
  
  
  const inputField = () => {
    switch(type) {

      case "select" :   return <SelectType {...rest}/>;
      default       :   return <TextType {...rest}/>;
    }
  }


  return (
    <div>
      {name}: 
      <br/>
      {inputField()}
      <br/>
      {hasError && error !== ' ' ?  <span style={{color:'red'}}>error</span> : null}
    </div>
  )
}

export default FormField
