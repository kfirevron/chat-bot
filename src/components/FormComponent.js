import React from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textMessage: ''
        };
        this.socket = io('http://localhost:3000');
    }

    handleChange = (e) => {
        let textMessage = e.target.value;
        this.setState({textMessage});
    };
    sendMessage = (e) => {
        e.preventDefault();
        const {textMessage} = this.state;
        const {userAvatar, userId} = this.props;
        //simple validation if empty return
        if (!textMessage) {
            return
        }

        this.socket.emit('chat message', {textMessage, userId, userAvatar});
        this.clearMessage();
    };
    clearMessage = () => {
        this.setState({textMessage: ''});
    };

    render() {
        const {textMessage} = this.state;
        return (
            <div className="form_wrapper">
                <form autoComplete="off" onSubmit={this.sendMessage}>
                    <div>
                        <TextField
                            label="message"
                            className="message_text"
                            value={textMessage}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="filled"
                        />
                        <Fab type="submit" disabled={!textMessage} className="submit_message" color="primary"
                             aria-label="Add">
                            <AddIcon/>
                        </Fab>

                    </div>
                </form>
            </div>
        )
    }
}

export default FormComponent;