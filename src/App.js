import { Button, Card, Container, Grid } from '@mui/material';
import { useEffect } from 'react';

function App() {

  useEffect(()=> {

    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyQ':
          handleDrumPad('1up');
          break;
        case 'KeyW':
          handleDrumPad('block');
          break;
        case 'KeyE':
          handleDrumPad('coin');
          break;
        case 'KeyA':
          handleDrumPad('death');
          break;
        case 'KeyS':
          handleDrumPad('jump');
          break;
        case 'KeyD':
          handleDrumPad('pause');
          break;
        case 'KeyZ':
          handleDrumPad('pipe');
          break;
        case 'KeyX':
          handleDrumPad('powerup');
          break;
        case 'KeyC':
          handleDrumPad('stageclear');
          break;
      
        default:
          break;
      }
    });

  },[]);

  const handleDrumPad = (soundeffect) => {
    switch (soundeffect) {
      case '1up':
        document.getElementById('Q').play();
        document.getElementById('display').innerHTML = 'One Up';
        break;
      case 'block':
        document.getElementById('W').play();
        document.getElementById('display').innerHTML = 'Broken Block';
        break;
      case 'coin':
        document.getElementById('E').play();
        document.getElementById('display').innerHTML = 'Coin';
        break;
      case 'death':
        document.getElementById('A').play();
        document.getElementById('display').innerHTML = 'You Died';
        break;
      case 'jump':
        document.getElementById('S').play();
        document.getElementById('display').innerHTML = 'Jump';
        break;
      case 'pause':
        document.getElementById('D').play();
        document.getElementById('display').innerHTML = 'Pause';
        break;
      case 'pipe':
        document.getElementById('Z').play();
        document.getElementById('display').innerHTML = 'Pipe';
        break;
      case 'powerup':
        document.getElementById('X').play();
        document.getElementById('display').innerHTML = 'Powerup';
        break;
      case 'stageclear':
        document.getElementById('C').play();
        document.getElementById('display').innerHTML = 'Stage Clear';
        break;
    
      default:
        break;
    }
  }

  return (
    <Container maxWidth='sm' id='drum-machine'>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <span id="display">Display</span>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="1up" onClick={handleDrumPad.bind(this, '1up')}>
              Q
              <audio src="audio/1up.mp3" className="clip" id="Q"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="block" onClick={handleDrumPad.bind(this, 'block')}>
              W
              <audio src="audio/block.mp3" className="clip" id="W"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="coin" onClick={handleDrumPad.bind(this, 'coin')}>
              E
              <audio src="audio/coin.mp3" className="clip" id="E"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="death" onClick={handleDrumPad.bind(this, 'death')}>
              A
              <audio src="audio/death.mp3" className="clip" id="A"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="jump" onClick={handleDrumPad.bind(this, 'jump')}>
              S
              <audio src="audio/jump.mp3" className="clip" id="S"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="pause" onClick={handleDrumPad.bind(this, 'pause')}>
              D
              <audio src="audio/pause.mp3" className="clip" id="D"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="pipe" onClick={handleDrumPad.bind(this, 'pipe')}>
              Z
              <audio src="audio/pipe.mp3" className="clip" id="Z"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="powerup" onClick={handleDrumPad.bind(this, 'powerup')}>
              X
              <audio src="audio/powerup.mp3" className="clip" id="X"></audio>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant='contained' className="drum-pad" id="stageclear" onClick={handleDrumPad.bind(this, 'stageclear')}>
              C
              <audio src="audio/stageclear.mp3" className="clip" id="C"></audio>
            </Button>
          </Grid>
        </Grid>        
      </Card>
    </Container>
  )
}

export default App;
