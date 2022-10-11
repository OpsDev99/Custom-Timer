function showTime(){
    var date=new Date()
    var hours=date.getHours()
    var minutes=date.getMinutes()
    var seconds= date.getSeconds()
    var session="am"

    if(hours==0){
    hours=0
    session="pm"
    }

    hours=(hours < 10) ? "0" + hours:hours
    minutes=(minutes < 10) ? "0" + minutes:minutes
    seconds=(seconds < 10) ? "0" + seconds:seconds

    var timer= hours + ":" + minutes + ":" + seconds + " " + session
    document.getElementById("display").innerHTML=timer
    document.getElementById("display").textContent=timer

    setTimeout(showTime,1000)
   }
   showTime();