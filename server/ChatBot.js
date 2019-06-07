import cartoonAvatar from 'cartoon-avatar';

export default class ChatBot {

    constructor() {
        this.botName = 'Pablo';
        this.botAge = 32;
        this.botCountry = 'Israel';
        this.avatar = cartoonAvatar.generate_avatar();
    }
    //check for message string and if the string was found
    // by one of the if statement it returns the answer if not returns default answer.
    answerToQuestions(message) {
        const {textMessage} = message;
        if (textMessage.indexOf("hi") > -1 || textMessage.indexOf("hello") > -1 || textMessage.indexOf("welcome") > -1) {
            return "hi!";
        } else if (textMessage.includes("name") && textMessage.includes("your")) {
            return `My name is ${this.botName}`;
        } else if (textMessage.includes("age") && textMessage.includes("your")) {
            return `I'm ${this.botAge}`;
        } else if (textMessage.includes("how") && textMessage.includes("are") && textMessage.includes("you")) {
            return "I'm fine thank you :)"
        } else if (textMessage.includes("where") && textMessage.includes("live") && textMessage.includes("you")) {
            return `I live in ${this.botCountry}`;
        }
        return "Sorry, I didn't get it :( ";
    }

}
