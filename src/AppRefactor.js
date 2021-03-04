import Header from './components/Header';
import Container from './components/Container';
import { useState } from 'react';

function AppRefactor() {
  const [list, setList] = useState([
    {
      task: 'Todo1',
      status: true
    },
    {
      task: 'Todo2',
      status: false
    },
    {
      task: 'Todo3',
      status: true
    }
  ]);

  const handleAdd = newItem => {
    setList([...list, newItem]);
  };

  const handleDelete = indexToDelete => {
    setList(
      list.filter((item, index) => index !== indexToDelete)
    );
  };

  const handleEdit = indexToEdit => {
    const textToEdit = prompt('Enter task');
    setList(
      list.map((item, index) =>
        indexToEdit === index
          ? { ...item, task: textToEdit }
          : item
      )
    );
  };

  const handleToggle = indexToToggle => {
    setList(
      list.map((item, index) =>
        indexToToggle === index
          ? { ...item, status: !item.status }
          : item
      )
    );
  };

  return (
    <div>
      <Header handleAdd={handleAdd} />
      <Container
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default AppRefactor;
