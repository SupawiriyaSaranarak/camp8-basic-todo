import Header from './components/Header';
import Container from './components/Container';
import { useState } from 'react';

function AppRefactor() {
  const [list, setList] = useState([
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
  ]);

  const handleAdd = (newItem) => {
    setList([...list, newItem]);
  };

  return (
    <div>
      <Header
        list={list}
        setList={setList}
        handleAdd={handleAdd}
      />
      <Container list={list} />
    </div>
  );
}

export default AppRefactor;
