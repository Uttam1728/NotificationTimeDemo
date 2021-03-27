import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/App.css';
import moment from 'moment';

class ShowDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: null, time : null };
    }
    // working per timezone of client
    Count_day(date){
        let now = moment(new Date()); 
        let end = moment(date);
        let DiffDays = parseInt(moment.duration(now.diff(end)).asDays());
        let NotificationTime = '';
        if (DiffDays < 1)
        {
            NotificationTime = moment(this.props.datetime.datetime).format('HH:mm');
        }
        else if (DiffDays == 1)
        {
            NotificationTime = "Yesterday"; 
        }
        else if (DiffDays >= 2 && DiffDays < 7)
        {
            NotificationTime = this.check_dayname(this.props.datetime.datetime);
        }
        else if(DiffDays == 7 )
        {
            NotificationTime = "One Week";
        }
        else
        {
            NotificationTime =moment(this.props.datetime.datetime).format('MM/DD/YYYY'); 
        }
        return NotificationTime;
    }

    check_dayname(date)
    {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date(date).getDay()];
    }

    render(){
        let message = '';
        let NotificationTime = '';
        if (this.props.datetime) {
            message = 'Hello your notification was come at';
            NotificationTime = this.Count_day(this.props.datetime.datetime);         
        } 
        else {
            message = 'Hi there, Put Your time to check notification';
        }
        return (
            <div class="show_data" id="show_data">
                <h2>{message} </h2> <code>{NotificationTime}</code>
            </div>
          );
    }
  
}

export default ShowDate;
