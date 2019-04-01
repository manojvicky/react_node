import React from "react";
import "../styles.css";

export default class AddTodo extends React.Component{
constructor(props){
    super(props);
    this.state={
        value: ""
    }
    this.setValue = this.setValue.bind(this);
}
setValue(e){

this.setState({
    value: e.target.value.trim()
});
}
render(){
    return (
      <div className="addtodo">
        <div className="adjust">
          <input
            type="text"
            className="addtodoinput"
            value={this.state.value}
            onChange={this.setValue}
          />
          <button
            onClick={() => {
              this.props.action({ title: this.state.value, description: "yoo i am the best" });
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
}
};
