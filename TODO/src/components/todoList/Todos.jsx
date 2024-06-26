import { useState, useReducer } from 'react';
import '../../App.css'
import Todo from './Todo'
import reducer, { ACTIONS } from './ToDoListComponent';
function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  return (
    <div className="todos">
      <div className='todos__content'>
        <h2>My todo app</h2>
        <div className="todos__forms">
          <form className="todos__form" onSubmit={handleSubmit}>
            <input
              className="todos__input"
              value={name}
              placeholder="Add todo"
              onChange={e => setName(e.target.value)}
            />
             <button className='todos__add__btn' onClick={handleSubmit}>
            Create
          </button>
          </form>
          <div className="todos__todo">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </div>
         
        </div>
       
      </div>
    </div>
  );
}
export default Todos