import React from 'react'
import OddPlayers from './OddPlayers';
import EvenPlayers from './EvenPlayers';


const IndianPlayers = () => {
 
    const T20Players = ['Rohit Sharma', 'Suryakumar Yadav', 'KL Rahul'];
    const RanjiPlayers = ['Shreyas Iyer', 'Prithvi Shaw', 'Ajinkya Rahane'];
    const allPlayers = [...T20Players, ...RanjiPlayers];   //I have merged t20 players and ranji trophy players to create allPlayers 

  return (
    <div>
      <h1>List of Indian Players Merged</h1>
      <ul>
        {allPlayers.map((player, index) => (
            <li key={index}>{player}</li>
        )
        )}
      </ul>

     {/* To call odd Players, i created a component */}
      <OddPlayers players={allPlayers}/>
      
     {/* To call even Players, i created a component */}
        <EvenPlayers players={allPlayers} />
    </div>
  )
}

export default IndianPlayers
