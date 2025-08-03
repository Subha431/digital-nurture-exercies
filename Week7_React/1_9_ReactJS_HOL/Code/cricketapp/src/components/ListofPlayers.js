import React from 'react'

const ListofPlayers = () => {
    const players = [
        {name: 'Jack', score:50},
        {name: 'Michael', score:70},
        {name: 'John', score:40},
        {name: 'Ann', score:61},
        {name: 'Elisabeth', score:61},
        {name: 'Sachin', score:95},
        {name: 'Dhoni', score:100},
        {name: 'Virat', score:84},
        {name: 'Jadeja', score:64},
        {name: 'Rania', score:75},
        {name: 'Rohit', score:80},
    ]

    const newPlayers = [];
    players.map((item) => {
    if(item.score<=70){
        newPlayers.push(item);
    }
    })

  return (
    <div>
    <h1>List of Players</h1>
    <ul>
        {players.map((item) => (
            <li>Mr. {item.name} <span>{item.score}</span></li>
        )
        )}
    </ul>  

    <h1>List of Players having scores sess than 70 </h1>
    <ul>
       {newPlayers.map((item2)=>(
        <li>Mr. {item2.name} <span>{item2.score}</span></li>
       )
       )}
    </ul>
    </div>
  
)

}


export default ListofPlayers
