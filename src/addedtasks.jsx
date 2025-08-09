import { useState } from "react";
import Todosection from "./todosection";
import Completedtasks from "./completedtasks";
export default function Addedtasks(props){
    const [item, setItem]=useState("")
    function completeClick(){
        setItem(props.items)
        const completeclick=<Completedtasks item={item}/>
        // console.log("clickedddddd", item)
    }
    const d=props.items
    return(
        <div className="d-flex tile"><button class="redclose funbutton" onClick={()=>props.setTodos(props.todos.filter((b)=>b!==d))}><i class="bi bi-trash-fill"></i></button>
        {props.items}
        <button class="success funbutton" onClick={completeClick}><i class="bi bi-check-lg"></i></button></div>
    )
}