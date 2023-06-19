let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
setInterval(()=>{
let date = new Date();
let hourtime= date.getHours();
let minutetime = date.getMinutes();
let secondtime = date.getSeconds();

let hhour = (30*hourtime + minutetime/2);
let hminute = 6*minutetime;
let hsecond = 6*secondtime;
 hour.style.transform = `rotate(${hhour}deg)`;
 minute.style.transform = `rotate(${hminute}deg)`;
 second.style.transform = `rotate(${hsecond}deg)`;
})