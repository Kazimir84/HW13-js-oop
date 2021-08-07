let fullFormat = {                             
    hidden: function() {
        seconds.remove.className = 'hidden';
    },
    shortFormat: function() {
        clockTime.remove.className = 'shortFormat';
    },
    fullFormat: function() {
        clockTime.className = 'fullFormat';
    },             
};

let shortFormat = {       
    hidden: function() {
        seconds.className = 'hidden';
    },  
    fullFormat: function() {
        clockTime.remove.className = 'fullFormat';
    },
    shortFormat: function() {
        clockTime.className = 'shortFormat';
    },           
};

class Time {
    constructor() {
        this.render = function() {
            let clockTime = document.getElementById('clockTime');
            let time = new Date();
            let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
            let minuts = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
            let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    
            clockTime.children[0].innerHTML = hours + ' ' + ':';
            clockTime.children[1].innerHTML = minuts;
            clockTime.children[2].innerHTML = ':' + ' ' + seconds;
    
            //setInterval(this.render.bind(this), 200);     
        };

        clockTime.onclick = function toggle() {
    
            if(clockTime.className === 'shortFormat') {
                seconds.classList.toggle('hidden');
                clockTime.remove.className = 'shortFormat';
                clockTime.className = 'fullFormat';
                console.log('Отображается полный вариант времени, с секундами!'); 
                alert('Отображается полный вариант времени, с секундами!');

            } else if (clockTime.className === 'fullFormat') {
                seconds.classList.toggle('hidden');
                clockTime.remove.className = 'fullFormat';
                clockTime.className = 'shortFormat';
                console.log('Отображается короткий вариант времени, без секунд!'); 
                alert('Отображается короткий вариант времени, без секунд!');
            };
        };
    
        this.formats = function(format) {
    
            if (format === fullFormat) {
               fullFormat.hidden();
               fullFormat.shortFormat();
               fullFormat.fullFormat();
               console.log('Отображается полный вариант времени, с секундами!'); 
               alert('Отображается полный вариант времени, с секундами!');
            
            } else if (format === shortFormat) {
               shortFormat.hidden();
               shortFormat.shortFormat();
               shortFormat.fullFormat();
               console.log('Отображается короткий вариант времени, без секунд!'); 
               alert('Отображается короткий вариант времени, без секунд!');
            };
        };
    };
};

let clock = new Time();
clock.render();
setInterval(clock.render, 200)

// Вариант отображения часов при запуске!

// clock.formats(shortFormat);
clock.formats(fullFormat);
