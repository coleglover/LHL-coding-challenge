let toggle1 = {
    name:"toggleA",
    isOn:false
}

let toggle2 = {
    name:"toggleB",
    isOn:true
}


const switchToggle = (tog) => {  
    let newObj = {...tog} // create new object (so as to not overwrite original)
    newObj.isOn = !newObj.isOn;
    return newObj
}

console.log(switchToggle(toggle1))
console.log(switchToggle(toggle2))
