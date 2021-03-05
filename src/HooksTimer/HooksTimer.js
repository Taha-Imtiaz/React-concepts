import React, { useEffect, useRef, useState } from 'react'

const HooksTimer = () => {
    const [timer, setTimer] = useState(0)
    // useref also holds mutable value
    const intervalRef = useRef()
    useEffect(() => {
 intervalRef.current = setInterval(() => {
    setTimer((prevTimer) => prevTimer + 1)
}, 1000);
return () => {
    clearInterval(intervalRef.current )
}
    },[])
    return (
        <div>
           Hook timer {timer} 
           <button onClick = {() => clearInterval(intervalRef.current )}>Clear Hook Timer</button>
        </div>
    )
}

export default HooksTimer
