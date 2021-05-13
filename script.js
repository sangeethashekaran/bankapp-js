users={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}
//users bal of account num 1000
var acnum = 1000;
var usernam= "userone";
var passwo = "userone";

//check for login succes or not
function login(acno,username,password) {
    if(acno in users) { //1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},  
         let uname= users[acno]["username"];
         let passwd=users[acno]["password"];
         if(username==uname & password==passwd) {
             console.log("login success");
         }
         else {
             console.log("failed");
         }
    }
    else {
    console.log("invalid user");
    }
}
login(acnum,usernam,passwo);