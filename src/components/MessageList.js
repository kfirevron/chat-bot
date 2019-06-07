import React from 'react';
import io from 'socket.io-client';
import {MessageItem} from './MessageItem';
import List from '@material-ui/core/List';


class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.socket = io('http://localhost:3000');
        this.messagesEndRef = React.createRef();
    }

    insertMessage = () => {
        this.socket.on('chat message', msg => {
            this.setState({messages: [...this.state.messages, msg]});
            this.scrollToBottom();
        });
        this.socket.on('bot answer', msg => {
            this.setState({messages: [...this.state.messages, msg]});
            //each time that message was added scroll automatically to the bottom of the message list.
            this.scrollToBottom();
        });
    };

    componentWillMount() {
        this.insertMessage();
    }

    renderMessageItem = () => {
        const {messages} = this.state;
        const {userId} = this.props;
        return messages.map((message, i) => {
            return (<MessageItem key={i} userAvatar={messages.userAvatar} userId={userId} message={message}/>);
        });
    };
    scrollToBottom = () => {
        //scroll to the bottom of the message list
        //using native event
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    render() {
        return (
            <ul className="message_list_wrapper">
                {this.renderMessageItem()}
                <div ref={this.messagesEndRef} />
            </ul>
        )
    }
}

export default MessageList;