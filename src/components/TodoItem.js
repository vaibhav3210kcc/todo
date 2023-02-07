import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  render() {
    const { item, updateTodo, removeTodo, completeTodo } = this.props;
    const changeFocus = () => {
      this.inputRef.current.disabled = false;
      this.inputRef.current.focus();
    };

    const update = (id, value, e) => {
      if (e.which === 13) {
        //here 13 is key code for enter key
        updateTodo({ id, item: value });
        this.inputRef.current.disabled = true;
      }
    };
    return (
      <li
        key={item.id}
        className="card"
      >
        <textarea
          ref={this.inputRef}
          disabled={this.inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, this.inputRef.current.value, e)}
        />
        <div className="btns">
          <button
            onClick={() => changeFocus()}
          >
            {" "}
            <AiFillEdit />{" "}
          </button>
          {item.completed === false && (
            <button
              style={{ color: "green" }}
              onClick={() => completeTodo(item.id)}
            >
              <IoCheckmarkDoneSharp />
            </button>
          )}
          <button
            style={{ color: "red" }}
            onClick={() => removeTodo(item.id)}
          >
            {" "}
            <IoClose />
          </button>{" "}
        </div>
        {item.completed && <span className="completed">done</span>}
      </li>
    );
  }
};

export default TodoItem;
