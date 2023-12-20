//------------------- DATE --------------
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString()); //To get in better version
//Other fucntions like localeString,dateString are also there

let myCreatedDate=new Date(2023,0,23)
let otherDate=new Date("2023-03-22")
console.log(myCreatedDate.toLocaleString());
console.log(otherDate.toLocaleString());

let timeStamp=Date.now(); //gives millisecond values
console.log(timeStamp);
console.log(myCreatedDate.getTime()) //you get time in milliseconds from given time,hence now you can compare with current timestamp.

//TO get month,day etc.
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getMonth());

//To customize the date in more better way
myDate.toLocaleString('default',{
    weekday:"long"
})