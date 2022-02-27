import React, { useState } from "react";
import CardWrapper from "./components/card-wrapper";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users:[],
      pageId:1,
      
    }
    this.getData=this.getData.bind(this)
    this.btnClick=this.btnClick.bind(this)
  }
  btnClick(e){
    const pageId=e.target.value
    console.log(pageId);
    this.setState({
      users:[],
      pageId
    })
     this.getData()
  }

  getData(){
    const { pageId }=this.state
    this.setState({
      users:[]
    })
    fetch('https://reqres.in/api/users?page=${pageId}')
    .then(response=>response.json())
    .then(usersdata=>this.setState({users:usersdata.data}))

  }
  
  componentDidMount(){
    this.getData()
    
  }

  render(){
    // console.log(this.state.users);
    return(
      <div>
       
        <CardWrapper users={this.state.users}/>
        <PageId name="1" onClick={this.btnClick}/>
        <PageId name="2" onClick={this.btnClick}/>
        <PageId name="3" onClick={this.btnClick}/>
       
      </div>
    )
  }
}

const PageId=(props)=>{
  return(
    <button
    onClick={props.onClick}
    value={props.name}>{props.name}</button>
  )
}



export default App;
