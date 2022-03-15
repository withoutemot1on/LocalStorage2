'use strict'

let start = document.querySelector('#Start'),
    click = document.querySelector('#Click'),
    clear = document.querySelector('#Clear'),
    userName = document.querySelector('#UserName'),
    Timer = document.querySelector('#Timer'),
    Number = document.querySelector('#Number'),
    Attempts = 0;





start.addEventListener('click',()=>{

    localStorage.setItem('UserName',userName.value)
    userName.value = ''
    RoundDurationTimer()
})

click.addEventListener('click',()=>{
    Attempts++;
    Number.innerHTML = 'Число кликов: ' + Attempts
    if(Attempts == 10) {
        StopTimer();
        start.disabled = true
        click.disabled = true
        let td = document.createElement('td')
        let th = document.querySelector('#th')
        th.append(td)
        td.textContent = localStorage.getItem('UserName')  + Timer.value
    }

})

function Check(){
    if(userName.value.length === 0 ) {
        start.disabled = true
    }
    userName.addEventListener('blur',()=>{
        if(userName.value.length !== 0 ) {
            start.disabled = false
        }
        if(userName.value.length === 0 ) {
            start.disabled = true
        }
    })
    userName.addEventListener('blur',()=>{
        if(userName.value.length !== 0 ) {
            click.disabled = false
        }
        if(userName.value.length === 0 ) {
            click.disabled = true
        }
    })
}
Check()

let gameTimerId;

function StopTimer() {
    clearInterval(gameTimerId);

}



function RoundDurationTimer() {
    let date2 = new Date(0, 0, 0,0,0 ,0,0)

    gameTimerId = setInterval(function(){
        date2.setSeconds(date2.getSeconds()+1);
        Timer.innerHTML ='Время игры '+localStorage.getItem('UserName')+':  ' + Plus0(date2.getSeconds())+"sec"+ Plus0(date2.getMilliseconds())+"msec";

    }, 1000);



    function Plus0(n){

        if (n<10){
            return '0'+n;
        } else {
            return ''+n;
        }
    }
}










