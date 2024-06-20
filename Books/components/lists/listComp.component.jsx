import Item from "./Item.component";


const MyList = ({ list }) => {
  return (
    
      list.map((item) => (
        <Item key={item.objID} item={item} />
      ))
    
  );
}
export default MyList;












  