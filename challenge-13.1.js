const gaugeList = [
    {
        current:0.4,
        min:0.1,
        max:0.9
    },
    {
        current:0.2,
        min:0.1,
        max:0.6
    }
]

// check if all gauges meet spec, if not, return false.
       
const checkAllGauges = (gaugeList) => {     

    let doesGaugeMeetSpec = false;
    const newGaugeList = [...gaugeList]

    for (var i = 0; i < newGaugeList.length; i++){    
        
        let {current, min, max} = newGaugeList[i]; 

        //console.log(`min: ${min}, current: ${current}, max: ${max}`)

        if (min < current && current < max){
            //console.log(`gauge ${current} meets requirement`)
            doesGaugeMeetSpec = true
        } else {
            //console.log(`gauge ${current} does not meet requirement`)
            doesGaugeMeetSpec = false;  
            break;
        }
    }
    return doesGaugeMeetSpec
}

console.log(checkAllGauges(gaugeList));
