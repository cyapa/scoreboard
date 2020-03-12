import React from 'react';
import './App.css';

// Used Material-UI components 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';

class Scoreboard extends React.Component {
  constructor(){
    super();
    this.state={

      name: '',
      score: '',
      //Default players list
      players: [
        {name: 'Isco',score:15},
        {name: 'Iniesta',score:16},
        {name: 'De Gea',score:8},
        {name: 'Xavi',score:17},
      ]
  }
}

//Render each player with the score
displayPlayers =()=>{

  // Sort player score by in ascending order
  let sortedPlayers = this.state.players.sort((a, b) => (a.score > b.score) ? 1 : -1);

  //Create PlayerScore component per player
  let sortedContent = sortedPlayers.map((player, index) => (
    <PlayerScore key={index} name={player.name} score= {player.score}> </PlayerScore>
    ));;

  return(sortedContent)
}

//Set new player name + score
onChangeHandler = (e) =>{  
  let nam = e.target.name;
  let val = e.target.value;
  this.setState({[nam]: val});
}

//Add new player name + score to the list, prevent refreshing onSubmit()
submitScore = (e) =>{  
  e.preventDefault();
  if(this.state.name != 0 & this.state.score>0)
    {
      let newPlayer= {name: this.state.name,score: this.state.score}
      this.setState({
        players: [...this.state.players, newPlayer]
      })

    }
}
  render() {  return (
    <div>
      <div className='scoreboard-title'>Tampere Badminton Singles ScoreBoard</div>
     
      {this.displayPlayers()}  

      <div className='scoreboard-submit'>
        <form onSubmit={this.handleSubmit}>  
        <div className='scoreboard-new'>Add new scores to the board</div>
          <TextField
            required 
            name="name"
            label="Player Name"
            onChange={this.onChangeHandler}
          />
          <TextField
            required 
            type="number"
            name="score"
            label="Player Score"
            onChange={this.onChangeHandler}
          />
          <Button type="submit" variant="outlined" color="primary" onClick={this.submitScore}>
            Submit
          </Button>
          </form>
        </div>     
    </div>
  );}

}

class PlayerScore extends React.Component {
  constructor(){
  super();
}
render() {
  return(
    <div className='scoreboard-listitem'>
      <div className='scoreboard-listitem-name'><ListItemText>{this.props.name}</ListItemText> </div>
      <div className='scoreboard-listitem-score'><ListItemText>{this.props.score}</ListItemText></div>
    </div>
    )
}
}

export default Scoreboard;
