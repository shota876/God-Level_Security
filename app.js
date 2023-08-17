const formEl = document.getElementById('my-form')
const inputPass = document.getElementById('pass')
const inputName = document.getElementById('name')
const inputAddress = document.getElementById('address')
const submitEl = document.getElementById('btn')
const error = document.getElementById('error')
const userList = document.getElementById("users")
const linkEl = document.getElementById('link')


formEl.addEventListener('submit', onSubmit)

const inputs = [inputName, inputPass, inputAddress]

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]

    input.addEventListener('input', function(){
        if(!hasAppError) return
        error.textContent = ''
        hasAppError  = false
    })
}

let hasAppError = false





function isValidInput(name, password, address){
    if(name == ""){
        return false
    }

    if(password == ""){
        return false
    }

    if(address == ""){
        return false
    }
    return true
}

function onSubmit(event){
    event.preventDefault()

    const userName = inputName.value
    const userPassword = inputPass.value
    const userAddress = inputAddress.value

    const isValidValues = isValidInput(userName, userPassword, userAddress)

    if(isValidValues){

        const array = localStorage.getItem('data', users)

        if(array !== null){

            const jsonArray = JSON.parse(array)
  
            for (let i = 0; i < jsonArray.length; i++) {
                const arrayIndex = jsonArray[i]
                if(arrayIndex.password === userPassword){
                    error.textContent = `sorry, your password is already used by ${arrayIndex.name} please try another`
                    hasAppError = true
                }

                if(arrayIndex.name === userName && arrayIndex.password === userPassword){
                    error.textContent = `this user is already exists`
                    hasAppError = true
                    break
                }
            } 

        }
        
    }

    
 
    if(!isValidValues){
        error.textContent = 'please fill in inputes with valid values!'
        hasAppError = true
    }

    if(!hasAppError){
        createUserProfile(userName, userPassword, userAddress)  
        userRegistred(userName)
        profileOpen()
    }
    

}

function createUserProfile(user, password, address){
    pushArray(user, password, address)
}

function pushArray(user, password, address){
    const userData = {name: user, password: password, address: address}
    users = localStorage.getItem('data')
    
    if(users === null){
        users = []
    }else{
        users = JSON.parse(users)
    }
    
    users.push(userData)
    localStorage.setItem('data', JSON.stringify(users))
}


let isUserRegistred = false

function userRegistred(name){
    
    isUserRegistred = true
    userList.textContent = `welcome ${name}, you are registred`

    const inputs = [inputName, inputPass, inputAddress]

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i]

        input.addEventListener('input', function(){
            if(!isUserRegistred) return
            userList.textContent = ''
            isUserRegistred = false
        })
    }

}

function profileOpen() {
    window.open('profile.html')
}

// toggle icon
function togglePassword(){
    if(inputPass.hasAttribute('type')){
        inputPass.removeAttribute('type')
    }else{
        inputPass.setAttribute('type', 'password')
    }
}







 





