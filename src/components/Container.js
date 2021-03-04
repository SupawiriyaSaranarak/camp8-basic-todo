import ListItem from './ListItem';

function Container({
  list,
  handleDelete,
  handleEdit,
  handleToggle
}) {
  return (
    <ul>
      {list.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          handleDelete={handleDelete}
          index={index}
          handleEdit={handleEdit}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

export default Container;
