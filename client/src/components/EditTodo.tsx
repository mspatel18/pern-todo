import { useState } from "react";

interface Todo {
  todo_id: number;
  description: string;
}

const EditTodo = ({ todo }: { todo: Todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [showModal, setShowModal] = useState(false);
    const handleEdit = async(id:number) =>{
        try {
            const body = {description}
            const response = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"PUT",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(body)
            })
        } catch (error) {
            console.error(error);
            
        }
        window.location.href='/'
    }
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>

      {showModal && (
        <div  className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded shadow-md">
            <span
              className="absolute top-0 right-0 m-3 text-xl  cursor-pointer"
              onClick={closeModal} 
            >
              <button onClick={()=>setDescription(todo.description)}>&times;</button>
            </span>
            <form >

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 mb-3 bg-gray-200 rounded-md p-2 "
              />
            <button type="submit" onClick={() => handleEdit(todo.todo_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
              </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodo;
