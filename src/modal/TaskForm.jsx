/* eslint-disable react/prop-types */
import axios from "axios";

const TaskForm = ({filteredTask,refetch,setIsEditModalOpen}) => {
    const { title, description, category,_id } = filteredTask
    const updateTask = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const category = e.target.category.value
        const date = Date.now()
        const taskUpdate = {
            title,
            description,
            category,
            date
            
        }
        axios.put(`http://localhost:5000/task/${_id}`, taskUpdate)
            .then(result => {
                console.log(result.data);
                refetch()
                setIsEditModalOpen(false)
            })
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Update Task</h2>

            <form onSubmit={updateTask}  className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        defaultValue={title}
                        name="title"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter title"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        rows="3"
                        defaultValue={description}
                        name="description"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter description"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select name="category"  defaultValue={category || "To-Do"}  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        
                        <option value="Select Category">Select Category</option>
                        <option value="To-Do">To-Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-pink-700 text-white py-2 px-4 rounded-lg transition"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;