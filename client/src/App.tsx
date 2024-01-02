import InputTodo from "./components/InputTodo"
import ListTodo from "./components/ListTodo"
function App() {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center m-10">PERN Todo List</h1>
      <InputTodo />
      <ListTodo />
    </>
  )
}

export default App
