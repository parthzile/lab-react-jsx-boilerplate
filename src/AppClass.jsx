import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
 
  render(){
    const data = this.props.dataImg;

    return (
      <div className="container">
        <div>
          <img src={data[0].img} alt="" id={data[0].id}/>
        </div>
        <div>
          <img src={data[1].img} alt="" id={data[1].id}/>
        </div>
        <div>
          <img src={data[2].img} alt="" id={data[2].id}/>
        </div>
        <div>
          <img src={data[3].img} alt="" id={data[3].id}/>
        </div>
      </div>
    )
  }
}
