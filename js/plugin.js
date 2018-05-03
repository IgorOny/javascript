// Задачи 1
let str = 'Some text string';
let value;

//1
value = str[0];
console.log(value);

value = str[str.length-1];
console.log(value);

//2
value = str.toUpperCase()[0];
console.log(value);

value = str.toUpperCase()[str.length-1];
console.log(value);

//3
value = str.indexOf('string');
console.log(value);

//4
value = str.indexOf(' ');
console.log(value);
value = str.indexOf(' ', 5);
console.log(value);

//5
value = str.substr(5, 4);
console.log(value);

//6
value = str.slice(5, 10);
console.log(value);

//7
value= str.slice(0, -6);
console.log(value);

//8
let a = 20,
    b = 16;
let = value;
value = `${a}${b}`;
console.log(value);


//Задачи 2
//1
let res;
res = Math.PI.toFixed(2);
console.log(res);

//2
res = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(res);
res = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(res);

//3a
res = Math.random().toFixed(2);
console.log(res);

//3b
let x = 30;
let max = Math.floor(x);
res = Math.floor(Math.random() * max)
console.log(res);

//4
res = (0.6 + 0.7).toFixed(1);
console.log(res);

//5
res = parseFloat('100$');
console.log(res);


//Задачи3
//1
let user = {
    product:'iphone'
}
console.log(user);

//2
user['price'] = 1000;
user['currency'] = 'dollar';
console.log(user);

//3
user['details'] = { model: '7', color: 'red' };
console.log(user);

