import "./card-style.scss"

const Card=({avatar,email,first_name,last_name})=>{
    return(
        <div className="card">
            <div>
                <figure>
                    <img src={avatar} alt=""/>
                </figure>
            </div>
            <div>
                <h2>{first_name} {last_name}</h2>
            </div>
            <div>
                {email}
            </div>
        </div>
    )
}

export default Card