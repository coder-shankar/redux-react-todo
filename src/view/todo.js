import { connect } from "react-redux";
import { addTodo } from "../action/todoAction";
import TodoUI from "./todoUI";

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todoData => dispatch(addTodo(todoData))
  };
};

const EnhancedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoUI);

export default EnhancedLogin;
