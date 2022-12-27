import * as wavs from './wavs.js';
import './App.css';

function App() {
  const n = 20;
  const rows = [];

  for (let i = 0; i < n; i++) {
    // Offset is the width of the box for each subsequent row
    const duration = (n / (n - i)) * 1;

    rows.push(
      <div key={i} className='row' style={{'width': `${n * 50}px`}}>
        <div id={`box_${i}`} className='box' style={{
            "animationDuration": `${duration}s`,
            "backgroundColor": `rgb(${i / n * 255}, ${255 - (i / n * 255)}, 255)`
          }}>
        </div>
      </div>
    );

    // Need to wait for App.js return
    window.addEventListener('load', () => {
      // Add event listener for each collision
      document.getElementById(`box_${i}`).addEventListener('animationiteration', (e) => {
        const audio = new Audio(wavs[`pl_${n - i}`]);
        audio.volume = 0.25;
        audio.play();
      });
    });
  }

  return (
    <div className="App">
      <div className='row-container' style={{'height': `${n * 50}px`}}>
        {rows}
      </div>
    </div>
  );
}

export default App;
