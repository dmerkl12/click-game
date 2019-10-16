import React, {useState} from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./friends.json";
import "./App.css";

function App() {
  
  const [friendState, setFriendState] = useState(cards);
  const [pointState, setPointState] = useState(0);
  const [topScoreState, setTopScoreState] = useState(0);


 const startClick = id => {
   return friendState.find((o, i) => {
     if (o.id === id) {

      if (cards[i].clicked === 0) {
        cards[i].clicked = cards[i].clicked + 1;
        setPointState(pointState + 1)
        setFriendState(friendState.sort(() => Math.random() - 0.5))
        
      }
      else {
        gameOver();
      }
      return true;
     }
     return false;
   });
 }

 const gameOver = () => {
  if (pointState > topScoreState) {
    setTopScoreState(pointState)
    console.log(topScoreState)
  }
  friendState.forEach(friend => {
    friend.clicked = 0;
  });
  alert(`Better luck next time! \nscore: ${pointState}`);
  setPointState(0)
  setFriendState(friendState.sort(() => Math.random() - 0.5));

return true;
}
    

    return (
      <Wrapper>
        <Header score={pointState} highscore={topScoreState}>Clicky game</Header>
        {friendState.map(friend => (
          <Card
          startClick={startClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }


export default App;