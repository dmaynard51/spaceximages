import React from 'react'

export default function Card(props){
    return (
        <div className="card--div">
            <img className="card--img"src={props.url} key={props.item.id}/>
        <p>{props.item.title}</p>
      </div>
    )

}