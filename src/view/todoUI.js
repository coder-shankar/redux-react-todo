import React from "react";
import fetchData from "../service/todoServices";
import TodoItem from "../component/todoItem";
import SearchBox from "../component/todoSearch";

class todoUI extends React.Component {
  constructor(props) {
    super(props);
    this.getData();
  }

  getData = async () => {
    const res = await fetchData();
    this.props.addTodo(res.data.data);
  };

  render() {
    return (
      <div className="todo-wrapper">
        <SearchBox />
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
          </tr>
          {this.props.todos.list.map((todo, index) => (
            <TodoItem {...todo} key={index} />
          ))}
        </table>
      </div>
    );
  }
}

export default todoUI;
