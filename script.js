var sec = 0
var min = 0
var hr = 0
var interval

function startTimer(){
  contador()
 interval = setInterval(contador, 1000);
}

function pauseTimer(){
clearInterval(interval)
}

function resetTimer(){
clearInterval(interval)
hr = 0
min = 0
sec = 0
document.getElementById('contador').innerText = '00:00:00'
}

function digito(digit){
  if(digit < 10){
    return('0'+digit)
  }else{
    return(digit)
  }
}


function contador(){
  sec++;
  if (sec == 60) {
    min++
    sec = 0
  
if (min == 60) {
  hr++
  min = 0
  sec = 0
}
  }
  document.getElementById('contador').innerText =digito(hr)+ ':' +digito(min)+ ':' +digito(sec)

}