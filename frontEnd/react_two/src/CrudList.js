import {useState} from "react";

const CrudList = ()=>{
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event)=>{
        setNewTask(event.target.value);
    };
    const addTask = ()=>{
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        };
        if(newTask !== ''){
            setTodoList([...todoList, task])
        }


    };
    const deleteTask = (id)=>{
        const newTodoList = todoList.filter((task)=>{
            // if(task === taskName){
            //     return false;
            // }else {
            //     return true;
            // }
            return task.id !== id
        })
        setTodoList(newTodoList)
    }

    return(
        <div className>
            <div className='container-fluidnav bg-dark  p-5'>
                <input className='p-1 bg-light' placeholder='Enter item...' onChange={handleChange}/>
                <button className="btn btn-primary rounded-0 mb-1" onClick={addTask}>Add task</button>
            </div>
            <dvi className='d-flex flex-column '>
                {todoList.map(todo=>
                    <ul className='card rounded-0 d-inline align-self-start row-cols-1 m-2'>
                        <li className='p-3 rounded-0 text-wrap'>
                            {todo.taskName}
                        <button className='btn btn-primary m-1 rounded-0' onClick={()=>deleteTask(todo.id)} >Remove item</button>
                        </li>
                    </ul>
                )}
            </dvi>
        </div>
    )
}

export default CrudList