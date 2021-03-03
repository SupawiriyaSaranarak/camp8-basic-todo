import ListItem from './ListItem';

function Container(props) {
  return (
    <ul>
      {props.list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default Container;
