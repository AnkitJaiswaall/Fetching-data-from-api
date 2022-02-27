import Card from "./card";
import "./card-wrapper-style.scss"
import FunctionClick from "./click";


const CardWrapper=(props)=>{
    console.log(props.users);
    return(
        <div className="card-wrapper">
            {
                props.users.map(user=>(
                    <Card key={user.id}{...user}/>
                ))
                
            }
            
            
        </div>
    )
}


export default CardWrapper