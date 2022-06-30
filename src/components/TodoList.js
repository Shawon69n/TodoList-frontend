import React from 'react';

const TodoList = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div className='mt-10 '>
            <form onSubmit={handleSubmit} className='flex justify-center items-center' action="">
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <input className='btn btn-accent' type="submit" value="Add" />
            </form>
        
        <ul className='flex flex-col justify-center items-center mr-56 mt-10'>
            <li><input className='mr-5 mb-5' type="radio" name="" id="" />first task <button className='btn-xs btn ml-5'>Edit</button> </li>
        </ul>

        </div>
    );
};

export default TodoList;