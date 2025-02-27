import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const AddTask = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const addTask = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const category = e.target.category.value
        const date = Date.now()
        const userEmail = user?.email
        const taskAdd = {
            title,
            description,
            category,
            date,
            userEmail
        }
        axios.post('https://yo-task-server.vercel.app/task', taskAdd)
            .then(result => {
                console.log(result.data);
                if (result.data) {
                    toast.success('Task Added Successfully')
                    e.target.reset();
                    navigate('/')
                }
            })
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl text-pink-700 font-bold mb-4 text-center">Create Task</h2>
            <form onSubmit={addTask} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full mt-1 p-2 border border-pink-700 rounded-lg"
                        placeholder="Enter title"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        rows="3"
                        name="description"
                        className="w-full mt-1 p-2 border border-pink-700 rounded-lg"
                        placeholder="Enter description"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select name="category" className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option value="To-Do">Select Category</option>
                        <option value="To-Do">To-Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-pink-700 font-bold text-white py-2 px-4 rounded-lg transition"
                >
                    Add Task
                </button>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddTask;