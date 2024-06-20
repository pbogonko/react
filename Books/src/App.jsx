
import { useState } from 'react';
import MyList from '../components/lists/listComp.component';
import './App.css'
useState
MyList

function App() {
  const initialStories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [filteredStories, setFilteredStories] = useState(initialStories);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = initialStories.filter(
      (story) =>
        story.title.toLowerCase().includes(searchTerm) ||
        story.author.toLowerCase().includes(searchTerm)
        
    );
    setFilteredStories(filtered);
  };
  

  return (
    <div>
      <input type="text" onChange={Filter}/>
      <MyList list={filteredStories}/>
    </div>

  )
}


export default App
