import React from 'react';
import ReactDOM from 'react-dom';
import NotificationForm from './components/notificationform';
import ShowDate from './components/showdate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datetime: null };
  }
  render() {
    return (
      <div >
        <div class="row">
          <div class="col-sm-1">
           
           </div>
          <div class="col-sm-5">
            {/* Reusable Notification form take Date and time individualy and return them to parent */ }
            <NotificationForm onChange={ datetime => { this.setState({ datetime }); console.log(datetime) } } />

          </div>
          <div class="col-sm-5">
            {/* Reusable ShowDate that take Datetime as i/p and displays it in appropriateformet */ }
            <ShowDate datetime={ this.state.datetime } />

          </div>
          <div class="col-sm-1">
           
          </div>
        </div>

      </div>
    );
  }

}

export default App;
