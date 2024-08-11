//     DARSDAGI MASALALAR

// function sum (a ,b){  // Regular
//     return a + b  
// }

// const sum1 = function (a , b ){  // Express
//     return a + b

// }

// const sum2 = (a, b) => {  // Arrow
//     return a + b
// }

// const sum3 = (a, b ) => a+b; 
// console.log(sum3( 5, 3));

// const test = () => console.log('hello');
// test();



// let arr = ['olma', 'anjir', 'kiwi'];
// let [a,b] = arr 
// console.log(b , a);

// let [a, ...res] = arr
// console.log(res);


// let user = {
//     name: "Avazbek",
//     age : 21,
//     phone : '911091103'
// }
// const {name, phone, test = 'test'} = user
// const {name: userName, phone, ...res} = user
// console.log(userName);
// console.log(res);



// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let res = [...arr1, ...arr2]
// console.log(res);


// let arr = [1,2,3,4,5,6]
// let [a, ...res] = arr;
// console.log(res);


// function sum(...res){
//     let s = 0 ;
//     res.forEach(element => {
//         s += element;
//     });
//     return s ;
// }
// console.log(sum(4,5,6,3,2,1));

// function sum() {
//     console.log(arguments[0]);
// }
// sum(1,2,3,4,5,6)

// let user = {
//     name: 'jhon',
//     age : 55
// }
// let userName = user.name ?? 'admin'
// console.log(userName);



//////////////////////////////////////////////////////////////////////////////////////////////////
//      vazifa masalalar... 
// Destructuring assignment ga oid vazifa massiv

// masala 1 
// const info = ["Ali", 30, "America"]; // regular
// function func(arg){
//     const [name, age, city] = arg 
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// func(info);

// const info = ["Ali", 30, "America"]; // express
// const func = function (arg){
//     const [name, age, city] = arg 
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// func(info);

// const info = ["Ali", 30, "America"]; // Arrow
// const func = (arg) => {
//     const [name, age, city] = arg 
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// func(info); 


// masala 2 
// const colors = ["red", "green", "blue", "yellow", "purple"];
// function func(arg){  // regular
//     const [color1, color2, ...res] = arg
//     console.log(color1);
//     console.log(color2);
//     console.log(res);
// }
// func(colors)

// const func = function(arg){  // express
//     const [color1, color2, ...res] = arg
//     console.log(color1);
//     console.log(color2);
//     console.log(res);
// }
// func(colors)

// const func = (arg) => {const [color1, color2, ...res] = arg; console.log(color1); console.log(color2);console.log(res)};
// func(colors) // Arrow 

// masala 3 

// function firstAndLast(arr) { // regular
//     // Kod yozing
//     const res = []
//     const [element1,,,element2] = arr
//     res.push(element1 ,  element2);
//     return res ;
// }
// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result); // [10, 40]


// const firstAndLast = function (arr) { //express
//     // Kod yozing
//     const res = []
//     const [element1,,,element2] = arr
//     res.push(element1 ,  element2);
//     return res ;
// }
// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result); // [10, 40]

// const firstAndLast =  (arr) => { //arrow
//     // Kod yozing
//     const res = []
//     const [element1,,,element2] = arr
//     res.push(element1 ,  element2);
//     return res ;
// }
// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result); // [10, 40]

// masala 4  


// Object
// masala 1
// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
// };
// function func(arg) { // regular 
//     const { title: subTitle, author: subAuthor } = arg;
//     console.log(subTitle);
//     console.log(subAuthor);
// };
// func(book);

// const func2 = function(arg){ // express
//     const { title: subTitle, author: subAuthor } = arg;
//     console.log(subTitle);
//     console.log(subAuthor)
// }
// func2(book);

// const func3 = (arg) => {    const { title: subTitle, author: subAuthor } = arg; console.lo(subTitle); console.log(subAuthor)};  // Arrow
// func3(book);

// masala 2
// const location = {
//     city: "Toshkent",
//     coordinates: {
//       latitude: 41.2995,
//       longitude: 69.2401
//     }
//   };
// function func(arg){  // regular
//     const {coordinates: {latitude: variable_1}} = arg
//     const { coordinates: {longitude:variable_2}} = arg
//     console.log(variable_1);
//     console.log(variable_2);
// };
// func(location)

// const func2 = function(arg){ // express
//     const {coordinates: {latitude: variable_1}} = arg
//     const { coordinates: {longitude:variable_2}} = arg
//     console.log(variable_1);
//     console.log(variable_2);
// }
// func2(location)

// const func3 = (arg) => {  // arrow
//     const {coordinates: {latitude: variable_1}} = arg
//     const { coordinates: {longitude:variable_2}} = arg
//     console.log(variable_1);
//     console.log(variable_2);
// }
// func3(location)


// masala 3
// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
//   };
// const func = function (arg ){   // express
//     const {firstName:myName, lastName:my_lastName} = arg;
//     console.log(myName);
//     console.log(my_lastName);
// };
// func(person)

// const func2 = (arg) => {  // arrow
//     const {firstName:myName, lastName:my_lastName} = arg;
//     console.log(myName);
//     console.log(my_lastName);
// };
// func2(person)

// function func3 (arg){
//     const {firstName:myName, lastName:my_lastName} = arg;
//     console.log(myName);
//     console.log(my_lastName);
// };
// func3(person);


// masala 4
// const settings = {  
//     theme: "dark",
//     language: "uz"
//   };
// const func = function ( arg ){
//     const {theme, language = 'red', winter = 'function null'} = arg 
//     console.log(theme);
//     console.log(language);
//     console.log(winter );
// }
// func(settings)

// Qoshimcha masalalar
// masala 1
// const options = {
//     host: "192.168.1.1",
//     port: 3000,
//     protocol: "https",
//     timeout: 5000,
//     retries: 3,
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer your_token_here"
//     },
//     cache: false
// };
// const func = (arg) => {  // Arrow
//     const  {host='4963.364.3', port='4545', protocol='tyy/uu//'} = arg;
//     console.log(host);
//     console.log(port);
//     console.log(protocol);
// };
// func(options)


// masala 2
// let arr = [1,2,3,4,5,6]
// let arr1 = [7,8,9,10]
// let arr2 = [11,12,13,14]
// function combineAndExtract(arr1, arr2, arr3) {
//     const res = [...arr1, ...arr2, ...arr3];
//     const [a, b, d,,,c,,,,, ...result] = res
//     console.log(a);
//     console.log(b);
//     console.log(d);
//     console.log(c);
//     console.log(result);
// }
// combineAndExtract(arr, arr1, arr2);

////////////////////////////
// qoshimcha masalalar 2
// 1. **Massivdagi Toq Sonlar Yig'indisi:**
//    - **Masala:** Sonlardan iborat massiv berilgan. Shu massivdagi faqat toq sonlarning yig'indisini hisoblovchi funksiya yozing.
// let arr = [1,2,3,4,5,6]
// function func (arg){   // regular
//     if(arg == []){
//         return []
//     }
//     let sum  = 0;
//     for (const element of arg) {
//         if( typeof element === "number" && element % 2 == 1){
//             sum += element
//         }
//     }
//     return sum
// };
// console.log(func(arr));

// const func = function (arg){   // express
//     if(arg == []){
//         return []
//     }
//     let sum  = 0;
//     for (const element of arg) {
//         if( typeof element === "number" && element % 2 == 1){
//             sum += element
//         }
//     }
//     return sum
// };
// console.log(func(arr));

// const func = (arg) =>{  // arrow
//     if(arg == []){
//         return []
//     }
//     let sum  = 0;
//     for (const element of arg) {
//         if( typeof element === "number" && element % 2 == 1){
//             sum += element
//         }
//     }
//     return sum
// };
// console.log(func(arr));


// 2. **Eng Kichik Elementni Topish:**
//    - **Masala:** Sonlardan iborat massiv berilgan. Shu massivdagi eng kichik elementni topuvchi funksiya yozing.
let arr = [1,2,3,4,5,6];
// const func = function(arg){  //express
//     if(arg == []){
//         return []
//     }
//     let min = arg[0];
//     arg.forEach(element => {
//         if(element < min ){
//             min = element
//         }
//     });
//     return min
// };
// console.log(func(arr));

// function func(arg){  // regular
//     if(arg == []){
//         return []
//     }
//     let min = arg[0];
//     arg.forEach(element => {
//         if(element < min ){
//             min = element
//         }
//     });
//     return min
// };
// console.log(func(arr));

// const func = (arg) => {  // arrow
//     if(arg == []){
//         return []
//     }
//     let min = arg[0];
//     arg.forEach(element => {
//         if(element < min ){
//             min = element
//         }
//     });
//     return min
// };
// console.log(func(arr));



// 3. **Matndan Raqamlarni Ajratib Olish:**
//    - **Masala:** Berilgan matndan faqat raqamlarni ajratib olish funksiyasini yozing.
// let text = `B9erilg1an ma1t8ndan faq2at raq8aml2arni a4jr7atib o64li9sh funk6siya4sini yo7z0in4g`
// const func = (arg) =>{  // arrow
//     if(arg == '' || arg ==[] || arg == {}){
//         return undefined
//     } 
//     let num = ''
//     for (const element of arg) {
//         if(element >= 0){
//             num += element
//         }
//     }
//     return num;
// };
// console.log(func(text));

// const func = function(arg){  // express
//     if(arg == '' || arg ==[] || arg == {}){
//         return undefined
//     } 
//     let num = ''
//     for (const element of arg) {
//         if(element >= 0){
//             num += element
//         }
//     }
//     return num;
// };
// console.log(func(text));

// function func(arg){  // regular
//     if(arg == '' || arg ==[] || arg == {}){
//         return undefined
//     } 
//     let num = ''
//     for (const element of arg) {
//         if(element >= 0){
//             num += element
//         }
//     }
//     return num;
// };
// console.log(func(text));


// 4. **Berilgan Sonning Kvadratini Topish:**
//    - **Masala:** Berilgan sonning kvadratini hisoblaydigan funksiya yozing.
// let num = 45
// function func(arg){ regular
//     return arg ** 2
// }
// console.log(func(num));

// const  func=(arg) =>  arg ** 2  // arrow
// console.log(func(num));

// const func = function (arg){ // express
//     return arg ** 2
// }
// console.log(func(num));



// 5. **So'zlarni Teskari Tartibda Chiqarish:**
//    - **Masala:** Berilgan matn satridagi so'zlarni teskari tartibda chiqaradigan funksiya yozing. Masalan, “salom bolalar” => “ralalob molas”.
// const text = `Berilgan matn satridagi so'zlarni teskari tartibda chiqaradigan funksiya yozing. Masalan, “salom bolalar” => “ralalob molas”`;
// function func(arg) {
//     if(arg == '' || arg ==[] || arg == {}){  // regular
//         return undefined
//     }
//     let arr = arg.split(' ');
//     let newArr = [];
//     for (const element of arr) {
//         newArr.push(element.split('').reverse().join(''));
//     }
//     return newArr.reverse().join(' ');
// }
// console.log(func(text));

// const func = function(arg){   // express
//     if(arg == '' || arg ==[] || arg == {}){
//         return undefined
//     }
//     let arr = arg.split(' ');
//     let newArr = [];
//     for (const element of arr) {
//         newArr.push(element.split('').reverse().join(''))
//     }
//     return newArr.reverse().join(' ');
// };
// console.log(func(text));


// const func = (arg) =>{ arrow
//     if(arg == '' || arg ==[] || arg == {}){
//         return undefined
//     }
//     let arr = arg.split(' ');
//     let newArr = [];
//     for (const element of arr) {
//         newArr.push(element.split('').reverse().join(''))
//     }
//     return newArr.reverse().join(' ');
// };
// console.log(func(text));



// 6. **Berilgan Matndagi Belgilarni Sanash:**
//    - **Masala:** Berilgan matn satridagi faqat harflarni sanaydigan funksiya yozing.
// let text = `Berilgan matn satridagi faqat harflarni sanaydigan funksiya yozing`;
// const func = (arg) => {  // arrow
//     let conutStr = 0; 
//     for (const element of arg) {
//         if(element.charCodeAt(0) >= 65  && element.charCodeAt(0) <= 122){
//             conutStr++
//         }
//     }
//     return conutStr
// }
// console.log(func(text));

// const func =function (arg){  // express
//     let conutStr = 0; 
//     for (const element of arg) {
//         if(element.charCodeAt(0) >= 65  && element.charCodeAt(0) <= 122){
//             conutStr++
//         }
//     }
//     return conutStr
// }
// console.log(func(text));

// function func  (arg) {  // regular
//     let conutStr = 0; 
//     for (const element of arg) {
//         if(element.charCodeAt(0) >= 65  && element.charCodeAt(0) <= 122){
//             conutStr++
//         }
//     }
//     return conutStr
// }
// console.log(func(text));


// 7. **Berilgan Sonlarning Kubini Topish:**
//    - **Masala:** Sonlardan iborat massiv berilgan. Shu massivdagi har bir sonning kubini hisoblaydigan funksiya yozing.
// const num = [1,2,3,4,5,6,7,8,9];
// const func =(arg)=>{  // arrow
//     let res = arg.map(element => element ** 3)
//     return res;
// };
// console.log(func(num));

// const func1 = function(arg){ // express
//     let res = arg.map(element => element ** 3)
//     return res;
// };
// console.log(func1(num));

// function func2 (arg){  //regular
//     let res = arg.map(element => element ** 3)
//     return res;
// }; 
// console.log(func2(num));


// 8. **Matndagi Unlilarni Teskari Tartibda Chiqarish:**
//    - **Masala:** Berilgan matn satridagi unli harflarni teskari tartibda chiqaradigan funksiya yozing.
// const   func = str => {  // arrow
//     const vowels = 'aeiouAEIOU';
//     let vowelArr = [...str].filter(c => vowels.includes(c)).reverse();
//     return [...str].map(c => vowels.includes(c) ? vowelArr.shift() : c).join('');
// };
// const text = `Berilgan matn satridagi unli harflarni teskari tartibda chiqaradigan funksiya yozing`;
// console.log(func(text)); 

// const  func = function (str) {  // express
//     const vowels = 'aeiouAEIOU';
//     let vowelArr = [...str].filter(c => vowels.includes(c)).reverse();
//     return [...str].map(c => vowels.includes(c) ? vowelArr.shift() : c).join('');
// };
// const text = `Berilgan matn satridagi unli harflarni teskari tartibda chiqaradigan funksiya yozing`;
// console.log(func(text)); 

// function func(str) {  // regular
//     const vowels = 'aeiouAEIOU';
//     let vowelArr = [...str].filter(c => vowels.includes(c)).reverse();
//     return [...str].map(c => vowels.includes(c) ? vowelArr.shift() : c).join('');
// };
// const text = `Berilgan matn satridagi unli harflarni teskari tartibda chiqaradigan funksiya yozing`;
// console.log(func(text)); 



// 9. **O'rta Qiymatni Topish:**
//    - **Masala:** Sonlar massivi berilgan. Shu massivdagi sonlarning o'rta arifmetik qiymatini topuvchi funksiya yozing.
// let num = [1,2,3,4,5,6,7,8,9];
// const func = arg => {
//     let sum = 0 ;
//     let num = arg.length
//     for (const element of arg) {
//         sum += element;
//     }
//     return sum /num
// }
// console.log(func(num));

// const func = function (arg){
//     let sum = 0 ;
//     let num = arg.length
//     for (const element of arg) {
//         sum += element;
//     }
//     return sum /num
// }
// console.log(func(num));

// function func (arg) {
//     let sum = 0 ;
//     let num = arg.length
//     for (const element of arg) {
//         sum += element;
//     }
//     return sum /num
// }
// console.log(func(num));


// 10. **Matndan So'zlarni O'chirish:**
//     - **Masala:** Matn satri va so'z berilgan. Shu matndan berilgan so'zni o'chiradigan funksiya yozing.
// const removeWord = (text, wordToRemove) => text.replaceAll(wordToRemove); // arrow
// const text = 'Bu matnda ochirib tashlanishi kerak bolgan soz.';
// const wordToRemove = 'ochirib';
// console.log(removeWord(text, wordToRemove)); 

// const removeWord = function (text, wordToRemove) { // express
//     text.replaceAll(wordToRemove)};
// const text = 'Bu matnda ochirib tashlanishi kerak bolgan soz.';
// const wordToRemove = 'ochirib';
// console.log(removeWord(text, wordToRemove));

// function removeWord (text, wordToRemove) { // regular
//     text.replaceAll(wordToRemove)};
// const text = 'Bu matnda ochirib tashlanishi kerak bolgan soz.';
// const wordToRemove = 'ochirib';
// console.log(removeWord(text, wordToRemove));


