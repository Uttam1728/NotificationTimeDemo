import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import '../../src/App.css';

class NotificationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: null, time: null };
    }

    myChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        var momentObj = moment(this.state.date + this.state.time, 'YYYY-MM-DDLT');
        this.props.onChange({ "datetime": momentObj});  
    }

    render() {
        return (
            <div class="main-div1" >
                <div>
                    <div >
                        <center><h2>Please Enter date and time</h2></center>
                        <div class="div2" id="div2">
                            <form onSubmit={ this.mySubmitHandler }>
                                <input id='time'
                                    name="time"
                                    type="time"
                                    placeholder="Enter Time"
                                    class="input form-control input-md"
                                    onChange={ this.myChangeHandler } />
                                <br />
                                <input id="date"
                                    name="date"
                                    min="1997-01-01"
                                    max="2030-12-31"
                                    type="date"
                                    placeholder="Enter Date"
                                    class="input form-control input-md"
                                    onChange={ this.myChangeHandler } />
                                <br />
                                <input type='submit'
                                    class="btn btn-success"
                                    id="btn-save"
                                    value="Save" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}

export default NotificationForm;
