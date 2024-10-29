import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'

function App() {
   const todos = useSelector(state=>state.todos)
   
   return (
     <>
      <div className='flex bg-sky-200 justify-center h-screen flex-col items-center'>
      <div className='p-6 bg-lime-200 rounded-md shadow-lg'>
      <AddTodo />
      {
        todos.map((todo)=>(
          <div  key={todo.id}>
            <Todos   todo={todo} />
          </div>
        ))
      }
      </div>
      </div>
    </>
  )
}

export default App