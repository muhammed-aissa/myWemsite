
var myCar= function (name,model,maxSpeed){
    this.name=name;
    this.model=model;
    this.maxSpeed=maxSpeed;
    this.drive=function (maxSpeed){console.log("Iam going forward now.."+this.maxSpeed+"and slow to "+maxSpeed);}
    this.stoping=function(){console.log("Iam stopping now..");}
}
var carOne = new myCar("Ford Touros",2020,1000);
carOne.drive(200);
carOne.stoping();

var myDate= new Date();
console.log(myDate);

var myBirthDay = new Date(1985,5,15,10,20,21);

console.log(myBirthDay.getFullYear()); // it gives you the year.
console.log(myBirthDay.getMonth());  // it gives you the month.
console.log(myBirthDay.getDay());   // it gives you the week.
console.log(myBirthDay.getHours()); // it gives you the hour.
console.log(myBirthDay.getTime());   // it gives you the millesecond from 1st Jan 1970. uses for comparing tow dates.

document.write("<b>Please Do not tuch any thing ..</b> <br />");
document.write("<b><i>Muhammed Ali Muhammed Aisa Al-Qahtani..</i></b><br />");
document.write("This is my website on the net i hope that is give you some fun");