
let clockTime = document.getElementById('clockTime');
class Clock {
  constructor({ template }) {

    this.template = template; 

    clockTime.addEventListener('click', () => {this.format()});

    if (this.template === 'fullFormat') {
      clockTime.classList.toggle('fullFormat')

    } else {
      clockTime.classList.toggle('shortFormat')      
    };
  };

  render() {
    let time = new Date();    

    let hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    let minuts = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();    

    if (clockTime.classList.contains('shortFormat')) {  
      clockTime.innerHTML = hours + ':' + minuts;      
      
    } else {
      clockTime.innerHTML = hours + ':' + minuts + ':' + seconds;    
    };
  };

  format() {
    clockTime.classList.toggle('shortFormat'); 
  };
};

// Вариант отображения часов при запуске! Через аргумент конструктора.

// Вариант отображения часов при запуске! Через аргумент конструктора, без секунд!
// let clock = new Clock({template: 'shortFormat'});

// Вариант отображения часов при запуске! Через аргумент конструктора, с секундами!
let clock = new Clock({template: 'fullFormat'});

clock.render();
setInterval(() => clock.render(), 200);




















































// // Вариант отображения часов при запуске! Через аргументы переданные в конструктор.

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
            
//       clockTime.className = prompt('Напишите или выберите один из вариантов отображения fullFormat или shortFormat', 'fullFormat');
     
//       if (clockTime.className === 'fullFormat') {
//         this.fullFormat();
        
//       } else if (clockTime.className === 'shortFormat') {
//         this.shortFormat();
        
//       } else {
//         location.reload();
//       };
//     };

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
