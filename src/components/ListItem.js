function ListItem({ item: { task, status } }) {
  return (
    <li>
      <span
        style={{
          marginRight: '20px',
          textDecoration: status ? 'line-through' : 'none',
        }}
      >
        {task}
      </span>
      <button>Edit</button>
      <button>Del</button>
    </li>
  );
}

export default ListItem;
