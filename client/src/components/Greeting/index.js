import React from 'react'

function greetings() { 
    const greets = ['Welcome to Booklist', 'We hope you are having a great day!', 'Join our reading groups'];
    return greets[Math.floor(Math.random() * greets.length)]
}

class Greeting extends React.Component { 
    render() { 
        return ( 
            <h5>Hi there! {greetings()}</h5>
        )
    }
}

export default Greeting; 