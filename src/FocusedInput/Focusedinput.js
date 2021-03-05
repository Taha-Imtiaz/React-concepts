import React, { useEffect, useRef } from 'react'

const Focusedinput = () => {
    // use ref implementation
    const inputRef = useRef(null)
  
    useEffect(() => {
      // focus the input element
  
  inputRef.current.focus()
    },[])
    return (
        <div>
            <input type = "text" ref = {inputRef}/>
        </div>
    )
}

export default Focusedinput
