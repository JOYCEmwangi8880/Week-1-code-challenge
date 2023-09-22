
function calculateDemeritPoints(speed){
    //speed limit in km/h
    const speedlimit= 70;
    //rate of demerit points per km/h over limit
    const  rateofdemeritpoints= 5;
    //check if the speed is less than 70 or equal to to the speed limit

    if(speed<= speedlimit){
        console.log("OK");
    }
    //if speed exceeds the limit ,calculate demeritpoints
    else  {
        const demeritpoints = Math.floor(
            (speed - speedlimit) / rateofdemeritpoints);

    }
    //check if demeritpoints are equal or exceed 12
if (demeritpoints >= 12) {
        console.log("License Suspended");
    }

else{
        console.log("Demeritpoints: " + demeritpoints);
    }
    }

