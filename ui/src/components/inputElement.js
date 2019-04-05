import React from "react";
import "../styles.css";
export default class InputElement extends React.PureComponent {
constructor(props){
    super(props);
    this.state={
        value: "",
    }
this.setValue = this.setValue.bind(this);
}
setValue(e){
this.setState({
    value: e.target.value.trim()
});
}

render(){
    console.log('this.props', this.props);
    return (
            <input
                type="text"
                className="addtodoinput"
                value={this.state.value}
                onChange={(e)=>this.setValue(e)}
            />     
    );
}
};
