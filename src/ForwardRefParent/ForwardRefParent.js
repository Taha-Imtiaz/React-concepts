import React, { Component } from 'react'
import ForwardRef from './ForwardRef/ForwardRef'

 class ForwardRefParent extends Component {
     constructor(props) {
         super(props)
         this.inputRef = React.createRef()
     }
     clickHandler = () => {
         this.inputRef.current.focus()
     }
    render() {
        return (
            <div>
                {/* attach ref to child component */}
                <ForwardRef ref = {this.inputRef}/>
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefParent
