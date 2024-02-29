import { useState } from 'react';
import "./contact.css"


export default function ContactInput ({e, handleChange, index}) {
  const [focused, setFocused] = useState(false);

  const handleFocus = e => {
    setFocused(true)
  }

  return (
      <div className="formInput">
        <label htmlFor={e.name} className="form-label hidden">
          {e.label}
        </label>        

        <input  
          key={index}       
          {...e}  //get's form elements
          value={e.value}  //gets values entered into form elements
          onChange={handleChange}
          onBlur={handleFocus}
          focused={focused.toString()} 
          arial-label={e.label}
          aria-required="true"
          className={e.className}
        />

        <span className="form-error-msg">{e.errorMsg}</span>
    </div>      
  )
}