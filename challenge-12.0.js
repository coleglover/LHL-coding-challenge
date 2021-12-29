const messages = [
    {origin:"MC", message:"Hello!"},
    {origin:"Shuttle", message:"Hey!"},
]
  
const parseTranscripts = (messages) => {

    const newMessages = [...messages] // duplicate the array; preserve OG
    let commsHistory = [];

    for (var i = 0; i < newMessages.length; i++){
        let {origin, message} = newMessages[i] // explode object properties
        commsHistory.push(String(origin + ": " + message)) // concate properties together, push to array
    }

    return commsHistory
}

console.log(parseTranscripts(messages))