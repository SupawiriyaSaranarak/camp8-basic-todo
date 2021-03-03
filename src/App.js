import React, { Component } from 'react';

class App extends Component {
  state = {
    list: [
      {
        task: 'Todo1',
        status: true,
      },
      {
        task: 'Todo2',
        status: false,
      },
      {
        task: 'Todo3',
        status: true,
      },
    ],
    text: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  //   console.log(this.name);
  // }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = () => {
    // const newList = [...this.state.list];
    // newList.push({ task: this.state.text, status: false });
    this.setState({
      list: [
        ...this.state.list,
        { task: this.state.text, status: false },
      ],
      text: '',
    });
  };

  handleEdit = (indexToEdit) => {
    const textToEdit = prompt('Enter task');
    // const newList = [...this.state.list];
    // newList[indexToEdit].task = textToEdit;
    // this.setState({
    //   list: newList,
    // });

    this.setState({
      list: this.state.list.map((item, index) =>
        indexToEdit === index
          ? { ...item, task: textToEdit }
          : item
      ),
    });
  };

  handleDelete = (indexToDelete) => {
    this.setState({
      list: this.state.list.filter(
        (item, index) => index !== indexToDelete
      ),
    });
  };

  handleToggleStatus = (indexToToggle) => {
    const newList = [...this.state.list];
    newList[indexToToggle].status = !newList[indexToToggle]
      .status;
    this.setState({
      list: newList,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <button onClick={this.handleAdd}>Add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              <span
                style={{
                  marginRight: '20px',
                  textDecoration: item.status
                    ? 'line-through'
                    : 'none',
                }}
                onClick={() =>
                  this.handleToggleStatus(index)
                }
              >
                {item.task}
              </span>
              <button
                onClick={() => this.handleEdit(index)}
              >
                Edit
              </button>
              <button
                onClick={() => this.handleDelete(index)}
              >
                Del
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
