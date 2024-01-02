import { useEffect, useState } from "react"

interface Todo {
    todo_id: number;
    description:string;
    // Add other properties here if needed
}

const ListTodo = () => {
        const [todos,setTodos]=useState<Todo[]>([]);    
        const getTodos= async ()=>{
                try {
                        const response = await fetch('http://localhost:5000/todos');
                        const jsonData = await response.json()
                        setTodos(jsonData)
                } catch (error) {
                        console.log(error);
                        
                }
        }
        const deleteTodos=async (id:number)=>{
            try {
                const deleteTodo= await fetch(`http://localhost:5000/todos/${id}`,{
                    method:'DELETE'
                })
                setTodos(todos.filter(todo => todo.todo_id !== id));
                // getTodos();
            } catch (error) {
                console.error(error);
                
            }
        }
        useEffect(()=>{
                getTodos();
        },[])
    return (
        <>
        <div className=" flex justify-center items-center ">

         <table className=" bg-white">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-4 py-2">Description</th>
                        {/* <th className="px-4 py-2">Edit</th> */}
                        <th className="px-4 py-2">Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo=>(
                        <tr key={todo.todo_id}>
                            <td className="border px-4 py-2">{todo.description}</td>
                            {/* <td className="border px-4 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                            </td> */}
                            <td className="border px-4 py-2">
                                <button
                                  onClick={() => deleteTodos(todo.todo_id)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Complete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ListTodo