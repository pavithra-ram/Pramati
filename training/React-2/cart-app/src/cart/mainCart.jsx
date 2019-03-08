import React, { Component } from 'react';
import Cart from "./displayCart.jsx";
class MainCart extends Component {
    state = {  
        counter:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    }
    /*Reset=()=>
    {
      //console.log("reset - "+this.state.counter[3].id);
      const counters=this.state.counter.map(val => {val.value=0;return val;});
      console.log(counters);
      this.setState({counter:counters});
    }*/
    
    Delete=cid =>
    {
         const counter=this.state.counter.filter(v=>v.id !== cid);
         this.setState({counter});
    }
    render() { 
        return ( 
            <div>
            <button className="btn btn-primary m-3" onClick={this.Reset}>Reset</button>
            {this.state.counter.map(ele=><Cart key={ele.id} value={ele.value} id={ele.id} onDelete={this.Delete}/>)}
            </div>
         );
    }
}
 
export default MainCart;