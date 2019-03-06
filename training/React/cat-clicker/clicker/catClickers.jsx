import React, { Component } from 'react';
import Clicker from './catClicker';
class Clickers extends Component {
    state = { 
        cat_count:0,
        counters:[],        
     }
    render() { 
        return (  
            <div className="text-center">
               <h1 className="mb-md-3 mt-md-3"> Simple Cat Clicker Application</h1>
               <button className="btn btn-primary m-md-2" onClick={this.addcats}>Add Cats</button><br/>
               {this.state.counters.map(val=><Clicker key={val}/>              
               )}   
            </div>
        );
    }

    addcats=()=>{
        this.state.cat_count++; 
        let ct=this.state.cat_count;
        console.log("ct : "+ct);
        let id_add="cat_id_"+ct;
        console.log("idadd : "+id_add);
        //adding id as objects to counters array
        this.state.counters.push(id_add);
        //console.log(this);
        //this.state.ids.push("id_"+this.state.count);
       // console.log("ids : "+this.state.ids+"\t");
        console.log(" count : "+this.state.cat_count);
        console.log(this.state.counters);
       //return ct;
        this.setState({counters:this.state.counters});
      
 }
}
 
export default Clickers;