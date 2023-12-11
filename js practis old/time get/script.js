// setInterval(myTime, 1000);

// function myTime(){
//     let now = new Date();
//     let getTime = document.getElementById("showTime");
//     let getDate = document.getElementById("showdate");

//     getTime.innerHTML = now.toLocaleTimeString();
//     getDate.innerHTML = now.toLocaleDateString();
// }


// let second = now.getSeconds();


setInterval(myTimer, 1000);

let getpara = document.getElementById("showTime");

function myTimer() {
    const nowTime = new Date();
    let hours = nowTime.getHours() ;
    if (hours > 12) {
        hours -=  12;
    } else if (hours === 0) {
        hours = 12;
    }
    let minute = nowTime.getMinutes();
    let second = nowTime.getSeconds();
    getpara.innerHTML = hours + ":" + minute + ":" + second;
    
}
// console.log();

// console.log(now);
