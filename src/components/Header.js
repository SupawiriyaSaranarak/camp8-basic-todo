import { useState } from 'react';

function Header(props) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // props.setList([
    //   ...props.list,
    //   { task: text, status: false },
    // ]);
    setText('');
    props.handleAdd({ task: text, status: false });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Header;
