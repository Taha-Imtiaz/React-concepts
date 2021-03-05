import React, { Component } from 'react'
import ForwardRefParent from '../ForwardRefParent/ForwardRefParent';

//implementing ref in react
 class RefDemo extends Component {
   
    constructor(props) {
        super(props)
         //  create ref
        this.inputRef = React.createRef()

        // 2nd approach(callback ref)
        this.cbRef = null;
        // set callback ref
        this.setCbRef = (element) => {
            this.cbRef = element
        }

    }
   componentDidMount = () => {
       console.log(this.inputRef)
    //    this.inputRef.current.focus()
    // call back(when component mounts)
    if(this.cbRef){
        this.cbRef.focus()
    }

   }
   clickHandler = () => {
       alert(this.inputRef.current.value)
   }
   
    render() {
        return (
            <div>
                {/* UNDERSTANDING REF AND CALLBACK REF */}
              {/* <input type = "text" ref = {this.inputRef}></input>
              <input type = "text" ref = {this.setCbRef}></input>

              <button onClick = {this.clickHandler}>Click</button> */}
              <ForwardRefParent/>
            </div>
        )
    }
}

export default RefDemo
