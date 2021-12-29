
const gauge1 = {
    current:0.4,
    min:0.1,
    max:0.9
}

const gauge2 = {
    current:1.4,
    min:0.1,
    max:0.4
  }
      

const checkGaugeStatus = (gauge) => {
  
    if (gauge.current > gauge.min && gauge.current < gauge.max){
        console.log(`gauge ${gauge.current} meets requirement`)
        return true;
    } 
    console.log(`gauge ${gauge.current} does not meet requirement`)
        return false;
    // Remember to return a value!
  }

  checkGaugeStatus(gauge1);
  checkGaugeStatus(gauge2);