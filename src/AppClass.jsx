import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    const data = this.imageData()
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
