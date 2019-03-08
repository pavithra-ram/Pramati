import React, { Component } from 'react';
class Cart extends Component {
    state = { 
        count:this.props.value
     }
  
     displaycount=()=>
     {
         let {count}=this.state;
         return count === 0 ? "Zero": count; 
     }
     
     Increment=()=>
     {
        console.log("incr value : ",this.state.count);
        this.setState({count:this.state.count+1});
        //console.log("Increment clicked");
     }

    render() { 
      
        return ( 
            <div>
                 <span className={this.getBadgeClasses()}>{this.displaycount()}</span>
                 <button className="btn btn-secondary m-2" onClick={this.Increment}>Increment</button>
                 <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
         );
    }

    getBadgeClasses=()=>{
        let classes = "m-2 badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Cart;