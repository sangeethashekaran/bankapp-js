class Bank {
    static getAccountDetails() {
        let users= {
            1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
            1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
            1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
            1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
        }
        return users;
    }
                  
    static authenticate(acno,username,password) {    //if success return 1 invalid user -1
      let users = Bank.getAccountDetails()  //calling static method
     if(acno in users) {
         if (username==users[acno]["username"] & password==users[acno]["password"]) {
             return 1; //success authentication
         }
         else {
             return 0 ;   //invalid username or passwd
         }
     }
     else {
         return -1  ;     //invalid account num
     }
}
   
   static login() {
       let accno = acno.value;
       let username = uname.value;
       let paswd = pwd.value;
       let user = Bank.authenticate(accno,username,paswd);
       if(user == 1) {       //sucess
        //  window.location.href="userhom.html";
         alert("success");
    
    }
       else if(user == -1) {
        alert("invalid account number");
    }  
       else if(user == 0) {
        alert("invalid username or password");
    }
       
   }
   static checkBalance() {
    let accno= acno.value;
    let username= uname.value;
    let paswd = pwd.value;
    let user = Bank.authenticate(accno,username,paswd);
    let users = Bank.getAccountDetails();
    if (user == 1) {
      let balance = users[accno]["balance"];
      let html_val=`<h2>aval balance:${balance}</h2>`
      document.querySelector("#resultarea").innerHTML = html_val;
    }


}
}


// var bnk = new Bank();
// var user=bnk.authenticate(1000,"userone","userone");
// if(user==1) {
    // console.log("login success");
// }
// else if(user==-1) {
    // console.log("invalid account number");
// }
// else {
    // console.log("invalid username or password");
// 