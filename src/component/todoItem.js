import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ title, description, priority }) => (
  <tr>
    <td>{title}</td>
    <td>{description}</td>
    <td>{priority}</td>
  </tr>
);

TodoItem.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.number
};
export default TodoItem;
