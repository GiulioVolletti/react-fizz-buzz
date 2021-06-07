import React , {Component} from 'react';

class Mainlogic extends Component {
    state={
        initialNumber : 0,
        fizzBuzz: 'Start',
    }
    incrementFunction = () => {
        this.setState({initialNumber: this.state.initialNumber + 1})
        if((this.state.initialNumber + 1) % 3 === 0 && (this.state.initialNumber + 1) % 5 === 0){
            this.setState({fizzBuzz: 'Fizz Buzz'})
        } else if ((this.state.initialNumber + 1) % 3 === 0){
            this.setState({fizzBuzz: 'Fizz'})
        } else if ((this.state.initialNumber + 1) % 5 === 0 ){
           // console.log((this.state.initialNumber + 1) % 5 === 0)
            this.setState({fizzBuzz: 'Buzz'})
        }else {
            this.setState({fizzBuzz: this.state.initialNumber + 1})
        }
        
       
        
    }
    
    render () {
       
        return(
            <div>
               <h1>{this.state.fizzBuzz}</h1> 
               <h1>{this.state.initialNumber}</h1> 
               <button style={{padding: '20px', width:'100px', fontSize: '30px', marginBottom: '10px'}} onClick={this.incrementFunction}>+1</button>
           </div>
        )
        
    }
}

export default Mainlogic ;