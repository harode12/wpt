import { Component } from "react";

export default class Fact extends Component {

    constructor(props) {
        super(props)   
        this.a = props.num1;
          this.state = {
            inputValue: '',
            result: null
        };

    }
 calculateFactorial = (n) => {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };

 myEventHandler = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        console.log("in event handler");
           
        const number = parseInt(this.state.inputValue);
        if (!isNaN(number)) {
            const factorialResult = this.calculateFactorial(number);
            this.setState({ result: factorialResult });
        } else {
            this.setState({ result: "Please enter a valid number" });
        }
    }

     handleInputChange = (e) => {
       console.log(e.target.value);
         this.setState({ inputValue: e.target.value });
     }
    // <Fact>
    render() {
        return (
            <>
    <h1>Class Component</h1>
    {/* Enter a number <input
     type="text" id="t1" onBlur={(e) => 
                    { console.log(e.target.value) }}
                    ></input> */}
                     <div>
                        <label >
                    Enter a number:
                </label>
                        <input
                    type="text"
                    id="t1"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                       
                /></div> 

    <button     value="Factorial" 
                onClick={this.myEventHandler}>
                    Call Factorial
                     </button>
                     {this.state.result !== null && (
                    <div >
                        <p>Result:</p>
                        <p>{this.state.result}</p>
                    </div>
                )}
                    </>
        )
    }


}