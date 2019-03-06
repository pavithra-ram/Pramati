import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.css";
class Clicker extends Component {
    state = { 
         click_count_value:0,       
         imgurl:"http://www.petsworld.in/blog/wp-content/uploads/2014/09/cat.jpg"
     }
   
    render() { 
       return ( 
            <div className="">                    
            <img src={this.state.imgurl} className="img-thumbnail imgg m-5" alt="cat image" onClick={this.increment_the_count}/>
            <span className="m-5">{this.return_the_count()}</span>
            <button className="btn btn-secondary" onClick={this.clear_count}>Reset</button>
            </div>
         );
    }
  clear_count=()=>
  {
         this.setState({click_count_value:0});
  }
  increment_the_count=()=>
  {
      this.state.click_count_value++;
      this.setState({click_count_value:this.state.click_count_value});
  }
  return_the_count=()=>
  {
        return this.state.click_count_value;
  }
}
 
export default Clicker;