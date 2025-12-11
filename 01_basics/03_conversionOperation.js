//let score=undefined
/*op of null var is "object" object
                                                   object
                                                   number
                                                   0   */
/* op of undefined var is  undefined
                           undefined
                           number
                           NaN  */

//let score = true //op-boolean,number,1
let score ="Shravani" //string can not be converted in number op is NaN

// console.log(typeof score);
// console.log(typeof(score));   //both are same
/* op is number 
         number    but if we write "80"  then op will be string
                                                         string */

// let valueInNumber =Number(score)
// console.log(typeof valueInNumber);  
// console.log(valueInNumber);  //op is NaN-not a number of 23ab -special type 
//op of null is "zero" when converted in number


//"33"=> 33
//"33abc"=>NaN
//true=> 1; false=>0

let isLoggedIn= 1  

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   
 // 1=> true; 0=> false
 // "" => false....(empty string)
 // "shravani" => true

let somenumber = 33

let stringNumber = String(somenumber)
console.log(stringNumber);  //33
console.log(typeof stringNumber); //but 33 is string 


