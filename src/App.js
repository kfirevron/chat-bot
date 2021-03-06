import React from 'react';
import './scss/styles.scss';
import FormComponent from './components/FormComponent';
import MessageList from "./components/MessageList";
import uniqid from 'uniqid';
import cartoonAvatar from 'cartoon-avatar';

const userId = uniqid();
const userAvatar = cartoonAvatar.generate_avatar();

function App() {
    return (
        <div>
            <div className="App_title">
                <h1>Chat Bot</h1>
            </div>
            <div className="App">
                <MessageList userAvatar={userAvatar} userId={userId}/>
                <FormComponent userAvatar={userAvatar} userId={userId}/>
            </div>

        </div>
    );
}

export default App;
