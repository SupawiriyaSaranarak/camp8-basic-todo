function ListItem({
  item: { task, status },
  handleDelete,
  index,
  handleEdit,
  handleToggle
}) {
  const deleteItem = () => handleDelete(index);
  const editItem = () => handleEdit(index);
  const toggleItem = () => handleToggle(index);

  return (
    <li>
      <span
        style={{
          marginRight: '20px',
          textDecoration: status ? 'line-through' : 'none'
        }}
        onClick={toggleItem}
      >
        {task}
      </span>
      <button onClick={editItem}>Edit</button>
      <button onClick={deleteItem}>Del</button>
    </li>
  );
}

export default ListItem;
