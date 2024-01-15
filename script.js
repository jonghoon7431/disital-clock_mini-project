const dateDiv = document.getElementById("date")
const timeDiv = document.getElementById("time")



function getTime(){
    let now = new Date();
    timeDiv.textContent = now;
    let year = now.getFullYear()
    let month = now.getMonth() +1;
    let day = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day
    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second

    dateDiv.textContent = `${year}년 ${month}월 ${day}일`
    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`
}

getTime()
setInterval(getTime, 1000);