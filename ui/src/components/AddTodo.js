import React from "react";
// import div from 'react-bootstrap/div';
// import div from 'react-bootstrap/div';
// import {div, div} from 'react-bootstrap';
import InputElement from "./inputElement";
import "../styles.css";
export default class AddTodo extends React.Component{
constructor(){
  super();
  this.state={
    stateProps: "Yoo"
  }
}
render(){
    return (
      <div className="addtodo">
      <div className="container">
        <div className="row">
          <div className="Col" lg={6} md={6} sm={12} xs={12} style={{marginBottom:"5px"}}>
            <div className="row">
              <div className="Col" lg={4} md={5} sm={12} xs={12}>
                <label className="titlediv">Title :</label>
              </div>
              <div className="Col" lg={8} md={7} sm={12} xs={12}>
                <InputElement stateProps={this.state.stateProps}/>
              </div>
            </div>
          </div>
          <div className="Col" lg={6} md={6} sm={12} xs={12} style={{marginBottom:"5px"}}>
            <div className="row">
              <div className="Col" lg={4} md={5} sm={12} xs={12}>
                <label className="titlediv">Description :</label>
              </div>
              <div className="Col" lg={8} md={7} sm={12} xs={12}>
                <InputElement stateProps={this.state.stateProps}/>
              </div>
            </div>
          </div>
          <div className="Col" lg={{span: 4, offset: 4}} md={{span: 4, offset: 4}} sm={{span: 6, offset: 3}} xs={12}>
          <div
            className="addtodobutton"
            onClick={() => {
              this.setState({stateProps: "YooooY"});
              // this.props.action({ title: this.state.title, description: "yoo i am the best" });
            }}
          >
            Add Todo
          </div>
          </div>
        </div>
       </div>
      </div>
    );
}
};
