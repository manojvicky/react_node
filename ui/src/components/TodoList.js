import React from "react";
import "../styles.css";

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.action();
  }
  
  render() {
    let list = this.props.data.map(item => {
      return <div key={item.id}>{item.title}</div>;
    });
    return (
      <div className="todolist">
        {!this.props.loading ? (
          <div className="list">{list}</div>
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}
