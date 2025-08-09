import { useState } from 'react';
import Addedtasks from './addedtasks';
import './app.css';
import Completedtasks from './completedtasks';
import Deletedtasks from './deletedtasks';
import Popp from './popp';
export default function Todosection(){
    const [todo, setTodo]=useState("");
    const [todos, setTodos]=useState([]);
    const [pop, setPop]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        if(todos.includes(todo)){
            const temp="temp";
            setTodo({temp})
            setTodos(todos.filter((d)=>d!==temp));
            setPop(`* ${todo} already exists`);
            // console.log(`${temp}, already exist....older version overwritten ${todos}`);
        }
        else{
            setPop("");
        }
        setTodo("");
    } 
    return(
        <div className="plain-con">
            <div className="d-flex">
            <Popp pop={pop}/>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input type="text" class="todoinput bg-blue" onChange={(e)=>setTodo(e.target.value)} value={todo} placeholder='Enter todo item'/>
                    <input type="submit" value="Add task" class="btn-dark"/>
                </form>
            </div>
            <div className="plain-con d-flex">
                {todos.map((items)=>(
                <Addedtasks items={items} key={items} todos={todos} setTodos={setTodos} todo={todo}/>
                ))}
            </div>
            <div className="d-flex container">
                    <Completedtasks/>
                    <Deletedtasks/>
                </div>
        </div>
    )
}