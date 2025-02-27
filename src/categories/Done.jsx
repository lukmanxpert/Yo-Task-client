/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskEdidModal from "../modal/TaskEdidModal";
import TaskDelete from "../modal/TaskDelete";
import axios from "axios";

const Done = ({ filteredTask, refetch }) => {
    const { title, description, category, _id, date } = filteredTask
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    let [isOpen, setIsOpen] = useState(false)
    const dateFromMongoDB = date;
    const dateObject = new Date(dateFromMongoDB);
    const formattedDate = `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    const taskDelete = () => {
        axios.delete(`https://yo-task-server.vercel.app/task/${_id}`)
            .then(result => {
                console.log(result.data);
                refetch()
                setIsEditModalOpen(false)
            })
    }
    return (
        <div className=' mb-2  bg-[#bdc3c7] p-2 rounded-sm' >
            <div className="space-y-2">
                <h1 className="text-xl text-black font-bold">{title}</h1>
                <p className="text-black">{description}</p>
                <div className="flex items-end gap-0">
                    <h1 className="bg-green-500 font-bold py-1 px-4 rounded-full">{category}</h1>
                    <h3 className="py-1 px-4 text-black">{formattedDate}</h3>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className=' py-5  text-sm'>
                    <span
                        onClick={() => { setIsEditModalOpen(true) }}
                        className='relative cursor-pointer inline-block px-3 py-2 font-semibold text-white leading-tight'
                    >
                        <span
                            aria-hidden='true'
                            className='absolute inset-0  bg-black black rounded-full'
                        ></span>
                        <div className='flex items-center gap-2'>
                            <span className='relative '>Update</span>
                        </div>
                    </span>
                    <TaskEdidModal
                        isOpen={isEditModalOpen}
                        setIsEditModalOpen={setIsEditModalOpen}
                        filteredTask={filteredTask}
                        refetch={refetch}
                    />
                </div>
                <div className=''>
                    <div className='flex justify-end' >
                        <span
                            onClick={openModal}
                            className='relative cursor-pointer  inline-block px-3 py-2 font-semibold text-white leading-tight'
                        >
                            <span
                                aria-hidden='true'
                                className='absolute inset-0 bg-black  rounded-full'
                            ></span>

                            <div className='flex items-center gap-0'>
                                <span className='relative'>Delete</span>
                            </div>
                        </span>
                    </div>
                    <TaskDelete isOpen={isOpen} closeModal={closeModal} taskDelete={taskDelete} />
                </div>
            </div>
        </div>
    );
};

export default Done;