import { Component } from "react";
import "./todolist.css";
export class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      showItemList: [],
      isUpdate: false,
      updatedvalue: "",
    };
  }

  enterValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  addItem = () => {
    if (this.state.isUpdate) {
      let a = this.state.showItemList.map((ele) => {
        return ele === this.state.updatedvalue
          ? (ele = this.state.inputValue)
          : ele;
      });
      this.setState({
        showItemList: a,
        inputValue: "",
        updatedvalue: "",
        isUpdate: false,
      });
    } else {
      this.setState({
        showItemList: [...this.state.showItemList, this.state.inputValue],
        inputValue: "",
      });
    }
  };

  removeItem(name) {
    this.setState({
      showItemList: this.state.showItemList.filter((ele) => ele != name),
      inputValue : '',
      isUpdate : false,
      updatedvalue : ''
    });
  }

  updateItem(name) {
    this.setState({
      updatedvalue: name,
      inputValue: name,
      isUpdate: true,
    });
  }
  render() {
    return (
      <div className="todolist mt-4">
        <h1>Todo List</h1>
        <div className="container mt-5">
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Item"
              value={this.state.inputValue}
              onChange={(event) => this.enterValue(event)}
            />
          </div>
          <button className="btn btn-primary mb-2" onClick={this.addItem}>
          {this.state.isUpdate ? "Update Item" : "Add Item"}
          </button>

          <ul>
            {this.state.showItemList.map((ele, index) => (
              <li>
                {ele}
                <span>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.updateItem(ele)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.removeItem(ele)}
                  >
                    X
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
