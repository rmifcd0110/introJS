let caracter = "";


for (let i = 1; i < 31; i++) {


   if (i < 10) {
       i = " " + i.toString();
   }


   for (let j = 1; j <= i; j++) {


       caracter = caracter + " " + i.toString();
      
   }
  
   console.log(caracter);
   caracter = "";


}
console.log("*******************************************************************************************");
