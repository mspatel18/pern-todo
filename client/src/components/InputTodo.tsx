import { useState } from "react"

const InputTodo = () => {
    const [description, setDescription] = useState('')  
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const body = {description}
            const response = await fetch('http://localhost:5000/todos',{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(body)
            })
            console.log(response);
            window.location.href = '/'
            
        } catch (error) {
            console.error(error);
            
        }
    }
  return (
    <>
    <div className="">

    <form onSubmit={handleSubmit} className="flex my-4 gap-2  justify-center items-stretch" >
        <input type="text" placeholder="Enter your description" className=" bg-gray-200 rounded-md p-2" value={description} onChange={e=>{setDescription(e.target.value)}}/>
        <button  className=" bg-green-500 p-2 px-4 rounded-md">Add</button>
      </form>
    </div>
      </>
  )
}

export default InputTodo