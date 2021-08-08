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
      };

      clockTime.onclick = function toggle() {
  
          if (clockTime.className === 'shortFormat') {
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
  
      this.fullFormat = {                             
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
      
      this.shortFormat = {       
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

      this.formats = function(format) {
  
          if (format === this.fullFormat) {
             this.fullFormat.hidden();
             this.fullFormat.shortFormat();
             this.fullFormat.fullFormat();
             console.log('Отображается полный вариант времени, с секундами!'); 
             alert('Отображается полный вариант времени, с секундами!');
          
          } else if (format === this.shortFormat) {
             this.shortFormat.hidden();
             this.shortFormat.shortFormat();
             this.shortFormat.fullFormat();
             console.log('Отображается короткий вариант времени, без секунд!'); 
             alert('Отображается короткий вариант времени, без секунд!');
          };
      };
  };
};

let clock = new Time();
clock.render();
setInterval(clock.render, 200);

// Вариант отображения часов при запуске!
    //Отображение с секундами
// clock.formats(clock.shortFormat);     
    //Отображение без секунд
clock.formats(clock.fullFormat); 














// Второй вариант решения.
// Вариант отображения часов при запуске! Через аргументы переданные в конструктор.

// class Clock {
//   constructor({ template }) {

//     this.template = template; 

//     if (this.template === 'fullFormat') {
//       clockTime.className = 'fullFormat';
//       this.fullFormat();

//     } else if (this.template === 'shortFormat') {
//       clockTime.className = 'shortFormat';
//       this.shortFormat();

//     } else {
//       console.log('Введите один из вариантов отображения fullFormat или shortFormat');
//       alert('Напишите или выберите один из вариантов отображения fullFormat или shortFormat');      
//     }

//     clockTime.onclick = function toggl() {
  
//       if (clockTime.className === 'shortFormat') {
//           seconds.classList.toggle('hidden');
//           clockTime.remove.className = 'shortFormat';
//           clockTime.className = 'fullFormat';          
//           clockTime.children[2].innerHTML = ":" + this.seconds;
//           console.log('Отображается полный вариант времени, с секундами!'); 
//           alert('Отображается полный вариант времени, с секундами!');

//         } else if (clockTime.className === 'fullFormat') {
//           seconds.classList.toggle('hidden');
//           clockTime.remove.className = 'fullFormat';
//           clockTime.className = 'shortFormat';          
//           clockTime.children[2].className = 'hidden';
//           console.log('Отображается короткий вариант времени, без секунд!'); 
//           alert('Отображается короткий вариант времени, без секунд!');
//         };
//     };
//   };

//   render() {
//     let time = new Date();
//     let clockTime = document.getElementById('clockTime');

//     let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
//     let minuts = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
//     let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

//     if (this.template === 'shortFormat') {  
//       clockTime.children[0].innerHTML = hours + ":"; 
//       clockTime.children[1].innerHTML = minuts;      
//       clockTime.children[2].innerHTML = ":" + seconds;   
      
//     } else if (this.template === 'fullFormat') {
//       clockTime.children[0].innerHTML = hours + ":"; 
//       clockTime.children[1].innerHTML = minuts;
//       clockTime.children[2].innerHTML = ":" + seconds;      
//     }   
//   }  

//   fullFormat = function() {
//     this.template ='fullFormat';
//     console.log('Установлен полный вариант загрузки времени, с секундами!');
//     alert('Установлен полный вариант загрузки времени, с секундами!');
//   }

//   shortFormat = function() {
//     this.template = 'shortFormat';      
//     clockTime.children[2].className = 'hidden';
//     clockTime.className = 'shortFormat';    
//     console.log('Установлен короткий вариант загрузки времени, без секунд!'); 
//     alert('Установлен короткий вариант загрузки времени, без секунд!');
//   } 
// }

// // Вариант отображения часов при запуске! Через аргумент конструктора.

// // Вариант отображения часов при запуске! Через аргумент конструктора, без секунд!
// // let clock = new Clock({template: 'shortFormat'});

// // Вариант отображения часов при запуске! Через аргумент конструктора, с секундами!
// let clock = new Clock({template: 'fullFormat'});

// // Вариант отображения часов при запуске! Через аргумент конструктора, дефолтный!
// // let clock = new Clock({template: 'fullForma'});

// clock.render();
// setInterval(() => clock.render(), 200);

// // Вариант отображения часов при запуске!

//     //Отображение с секундами
// // clock.fullFormat();

//     //Отображение без секунд
// // clock.shortFormat();
