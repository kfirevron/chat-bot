import React from 'react';
import Avatar from "@material-ui/core/Avatar";

export const MessageItem = props => {
    return(
        <li className={`${props.message.userId === props.userId ? 'me':'else'}`}>
            <div className="message_text">{props.message.textMessage}</div>
            <Avatar className="message_avatar" src={props.message.userAvatar}/>
        </li>
    )
} ;