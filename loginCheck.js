const usersDataSet =[
                   {
                   	  "email"    : "sathya2793@gmail.com",
                   	  "password" : "2793"
                   	},

                   	 {
                   	  "email"    : "admin@gmail.com",
                   	  "password" : "admin"
                   	}]

let checkLogin = (email,password,allUsers=usersDataSet) => { //allUsers is default parameters

	let isUserFound = false
	let passwordCorrect = false

	for(let currentUser of allUsers) { // for..of loop

		if(currentUser.email == email) {

			if(currentUser.password == password){
				 isUserFound = true
                 passwordCorrect = true
                 break
			}
			else{
			    isUserFound = true
				passwordCorrect = false
				break
			}
		}
		else{
			isUserFound = false
		}
	} // end of for loop

	if(isUserFound == true && passwordCorrect == true){
		alert(`You are logged in\nUser Details :\nemail:${email}`)//template literals
	}
	else if(isUserFound == true && passwordCorrect == false){
		alert(`You have provided incorrect password`)
	}
	else{
		alert(`No user with this email found`)
	}
}// end check login.

let email=prompt(`Enter the user email id`) // get the email id from the user
let password=prompt(`Enter the password`) //get the password from the user
checkLogin (email,password)
