'use strict'

//task 1;

function calculateVolumeAndArea(edgeCube) {
    const Volume = edgeCube ** 3;
    const Area = (edgeCube**2) * 6;
    if (edgeCube>0 && Number.isInteger(edgeCube)){      // ребро куб только целое число
        return 'Объем куба: ' + Volume + ' площадь всей поверхности: ' + Area; 
    } else {
        return 'При вычислении произошла ошибка'
    }
}
// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));

//task 2

function getCoupeNumber(numOfPlace) {
    if (numOfPlace>=1 && numOfPlace<=36 && Number.isInteger(numOfPlace)){   // только целое число в промежутке от 1 до 36
        return Math.ceil(numOfPlace / 4);                                   // высчитываем номер купе
    } else if (numOfPlace === 0 || numOfPlace > 36){                        // если число ноль или больше 36, выводим следующую строчку
        return 'Таких мест в вагоне не существует';
    } else {                                                                             
        return 'Ошибка. Проверьте правильность введенного номера места'; 
    }  
}
// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7)); 
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));


//task 3

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === 'number') {         // проверяем тип данных
    data[i] *= 2;                            // числа умножаем на 2
  } else if (typeof data[i] === 'string') {  // проверяем тип данных
    data[i] += ' - done';                    // к строке прибовляем строку
  }
}
// console.log(data);



// задание 4
const newData = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

for (let i = newData.length - 1; i >= 0; i--) {         //условие для цикла, который начнет с последнего элемента, а закончит первым
  result1.push(newData[i]);
}

// console.log(result1);

// задание 5

const massOfFamily = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(massOfFamily) {
    if (massOfFamily.length === 0) {     //делаю проверку на пустоту массива
        return 'Семья пуста';
    } else {
        return 'Семья состоит из: ' + massOfFamily.join(' ');
    }
}
// console.log(showFamily(massOfFamily));


//task 6
const restorantData = {
    menu: [
      {
        name: 'Salad Caesar',
        price: '14$',
      },
      {
        name: 'Pizza Diavola',
        price: '9$',
      },
      {
        name: 'Beefsteak',
        price: '17$',
      },
      {
        name: 'Napoleon',
        price: '7$',
      },
    ],
    waitors: [
      { name: 'Alice', age: 22 },
      { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
  }

//task 6.1
  function isOpen(prop) {
    let answer = ''
    if (prop) {
        return answer = 'Открыто'   //в изначальной функции было неправильное присвоение в тернарном операторе и перепутаны "закрыто" и "открыто"
    } else {
        return answer = 'Закрыто'
    }
    
  }
// console.log(isOpen(restorantData.openNow))

//task 6.2

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {    //чтобы все правильно сложилось, необходимо привести все к одному типу данных - числу
        return 'Цена ниже средней'
    } else {
        return 'Цена выше средней'
    }
}

console.log(
    isAverageLunchPriceTrue(
        restorantData.menu[0],
        restorantData.menu[1],
        restorantData.averageLunchPrice
    )
)