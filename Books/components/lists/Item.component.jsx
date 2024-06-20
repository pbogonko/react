const Item = ({ item }) => {
    return(
      
         <>
        
          <h3>{item.title}</h3>
          <a href={item.url}>url:{item.url}</a>
          <p>author:{item.author}</p>
          <p>comments:{item.num_comments}</p>
          <p>points:{item.points}</p>
        </>
        
    )
  };
  export default Item