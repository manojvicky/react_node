import React from "react";
import "../styles.css";

export default class TodoList extends React.Component {
  componentDidMount() {
    this.props.action();
  }
  
  render() {
    let list = this.props.data.map(item => {
      return (
        <div className="listitem" key={item.id}>
          <div className="listitemdiv"><span className="titlespan">Title :</span>{item.title}</div>
          <div className="listitemdescription"><div className="titlespan">description :</div>
            <div className="descriptiondiv">
              {item.description}
            </div>
            </div>
        </div>
      );
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
