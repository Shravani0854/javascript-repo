const accountId = 12347
let accountEmail="shravanis@google.com"
var accountPassword ="5432" //2 ways to declare variables-let and var
//most used "let" ,using var issue of scope({..})occured earlier
//const,var,let keywords are assigned in memory
accountCity ="Rajapur"
let accountState;  //will get op as state is undefined 

// accountId=2 //not allowed to change

accountEmail="hchc.com"
accountPassword="456"
accountCity="banglore" //not ideal but we can declare variable like this 

console.log(accountId);

/*
prefer not to use var because issue in block of scope({this is block of scope...}) and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //The console.table() static method displays tabular data as a table.
