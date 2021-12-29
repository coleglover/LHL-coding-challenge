const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]

const switchAllTogglesOn = (toggleList) => {
    
    let twinToggleList = [...toggleList]

    for (var i = 0; i < twinToggleList.length; i++){

        let {isOn} = twinToggleList[i].isOn
        console.log(`initial: ${isOn}`)

        // Laura: would i have to make a completely new array and push the isOn value for it to populate

        if (isOn != true){
            twinToggleList[i].isOn = true
        }

        console.log(`Final: ${twinToggleList[i].isOn}`)
    }

    return twinToggleList
}

switchAllTogglesOn(toggleList);