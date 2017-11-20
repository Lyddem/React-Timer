import React from 'react';

class App extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      start: '', //'10:10:10'
      end: '',
      startSec: '', //'36610'
      endSec: ''
    }
    this.clicked = this.clicked.bind(this);
    this.handleTimeout = this.handleTimeout.bind(this);
  }

  componentWillMount() {
    setTimeout(()=>{
      this.setState({
        startSec: --this.state.startSec
      })
    },1000)
  }

  handleTimeout() {

  let test = --this.state.startSec; //'3661'

  function pad(num) {
    return ("0" + num).slice(-2);
  }

  function hhmmss(secs) {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return pad(hours) + ":" + pad(minutes) + ":" + pad(secs);
  }

  let final = hhmmss(test);
    //decrement state.startSec
    this.setState({
      startSec: test
    })
    this.setState({
      start: final
    })
    // render state.startSec
  }

  clicked() {
    let re=/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    let validStart = re.test(this.state.start);
    let validEnd = re.test(this.state.end);
    let start = this.state.start.split(":");
    let end = this.state.end.split(":");
    let startSec = (Number(start[0]) * 3600) + (Number(start[1]) * 60) + (Number(start[2]));
    let endSec = (Number(end[0]) * 3600) + (Number(end[1]) * 60) + (Number(end[2]));
    // validate inputs
    if(!validStart || !validEnd) { alert('please use format HH:MM:SS') }
    if(endSec > startSec) {
      alert('Please make end time less than start time!');
    }
    this.setState({ startSec: startSec }); //won't register untill second button click

    if(startSec > endSec) {
      console.log('state startSec', this.state.startSec);
      console.log('startSec', startSec);
    }
    if(this.currentInterval) {
      clearInterval(this.currentInterval);
    }
    this.currentInterval = setInterval(this.handleTimeout ,1000);
  }

  render () {
    return (
      <div>
        <h2> Timer </h2>
        <div id="timer">
          Start Time <input type="text" placeholder="hh:mm:ss" onChange={(e) => {this.setState({start: e.target.value})}} /><br />
          End Time <input type="text" placeholder="hh:mm:ss" onChange={(e) => {this.setState({end: e.target.value})}}/> <br /><br />
          <button onClick={this.clicked}> Start Countdown </button><br /><br />
          <div id="output">{this.state.start}</div>
        </div>
      </div>
    );
  }
}
export default App;

/*
[x] Create an input to take a start time. The input should be in hh:mm:ss format, which represents: hour, minute and seconds, respectively. The input should be a valid input.

[x] Create an input to take an end time. The input should be in hh:mm:ss format. The  end time should be a valid input and

[x] represent a time later than the start time.

[x] Create an output div/text/span to represent the countdown counter (in seconds).
[x] Create a button with "Start Countdown" text on it. When user clicks the button, it should:

[x] Verify both inputs' validity, and throw error message if there is a problem, e.g. input format, intervals, etc

[x] Reset the countdown counter output div/text/span

[x] Calculate the number of seconds difference between start time and end time, and display it as the output's initial state

[x] Start decreasing the output by one for every second (behave like a countdown timer)

All time inputs, output and button should be rendered in ReactJS.

Bonus point if you can use Redux for button action and state transition.

}
*/





