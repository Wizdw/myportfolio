import Addedtasks from './addedtasks';
export default function Completedtasks(props){
    console.log(`${props.item} clicked`)
    return(
        <div class="con-blue container">
            <h3 class="">
                Completed tasks
                {/* {props.item} */}
            </h3>
        </div>
    )
}