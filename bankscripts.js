class Bank {


    static getAccountDetails() {
        let users = {
            1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
            1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
            1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
            1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
        }
        return users

    }
    // authenticate(1000,"userone","userone") success 1 ivalid user name -1 
    static authenticate(acno, username, password) {
        let users = Bank.getAccountDetails()
        if (acno in users) {
            if (username == users[acno]["username"] & password == users[acno]["password"]) {
                return 1 //success authentication
            }
            else {
                return 0 //inavlid username or password
            }

        }
        else {
            return -1 //invalid account number
        }

    }
    static login() {
        let accno = acno.value;
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        if (user == 1) {
            // alert("sucess");
            window.location.href = "userhome.html"
            // window.location.href = "withdraw.html"
        }
        else if (user == -1) {
            alert("inavlid account number");
        }
        else if (user == 0) {
            alert("inavlid user name or password");
        }




    }
    static withDrawal() {

        let accno = acno.value
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        let users = Bank.getAccountDetails()
        if (user == 1) {
            let balance = users[accno]["balance"]
            let amount = 1000
            if (amount < balance) {
                let bal = balance - amount
                let html_val = `<h4>Balance  after withdrawal ${bal}<h4>`
                document.querySelector("#withdraw").innerHTML = html_val
            }


        }
    }


    static checkBalance() {
        let accno = acno.value
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        let users = Bank.getAccountDetails()
        if (user == 1) {
            let balance = users[accno]["balance"]
            let html_val = `<h2>available balance:${balance}</h2>`
            document.querySelector("#resultarea").innerHTML = html_val

        }
    }
    static deposit() {
        let accno = acno.value
        let username = uname.value;
        let paswd = pwd.value;
        let user = Bank.authenticate(accno, username, paswd)
        let users = Bank.getAccountDetails()
        if (user == 1) {
            let balance = users[accno]["balance"]
            let deposit = 10000
            let bal = balance + deposit
                let html_val = `<h4>Balance  after Deposit: ${bal}<h4>`
                document.querySelector("#deposit").innerHTML = html_val
            }

        }
    }


// var bnk=new Bank()
// let user=bnk.authenticate(1000,"userone","user1")
// if(user==1){
//     console.log("sucess");
// }
// else if(user==-1){
//     console.log("inavlid account number");
// }
// else if(user==0){
//     console.log("inavlid user name or password");
// }





















