const localArray = JSON.parse(localStorage.getItem('data')) 

// user name
const profilename = document.getElementById('profilename')
const onlyName = localArray[localArray.length - 1]
profilename.textContent = onlyName.name


// user address
const profileAddress = document.getElementById('profileaddress')
const onlyAdress = localArray[localArray.length - 1]
profileAddress.textContent = onlyAdress.address


// edit profile
const editProfile = document.getElementById('btn')
const sectionEl = document.getElementById('section')
const containerEl = document.getElementById('container')

editProfile.addEventListener('click', () => {

    const editPopUp = document.createElement('div')
    editPopUp.classList.add('popup')

    // create close button
    const closeBtn = document.createElement('button')
    closeBtn.textContent = `X`
    closeBtn.setAttribute('type', 'btn')
    closeBtn.classList.add('button')
    editPopUp.appendChild(closeBtn)
    closeBtn.addEventListener('click', () => {
        //closing popup window
        document.body.removeChild(editPopUp)
        containerEl.classList.remove('background')
    })

// create name input
    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'name'
    editPopUp.appendChild(nameLabel)

    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'name')
    nameInput.id = 'name'
    nameInput.classList.add('input')
    nameInput.value = onlyName.name
    editPopUp.appendChild(nameInput)

// create address input
    const addressLabel = document.createElement('label')
    addressLabel.setAttribute('for', 'address')
    addressLabel.textContent = 'address'
    editPopUp.appendChild(addressLabel)

    const addressInput = document.createElement('input')
    addressInput.setAttribute('type', 'text')
    addressInput.id = 'address'
    addressInput.classList.add('input')
    addressInput.value = onlyAdress.address
    editPopUp.appendChild(addressInput)
 
//create about information input
    const aboutLabel = document.createElement('label')
    aboutLabel.setAttribute('for', 'about')
    aboutLabel.textContent = 'about'
    editPopUp.appendChild(aboutLabel)

    const aboutInput = document.createElement('input')
    aboutInput.setAttribute('type', 'text')
    aboutInput.id = 'about'
    aboutInput.classList.add('input')
    aboutInput.classList.toggle('about')
    editPopUp.appendChild(aboutInput)

// create save button
    const saveBtn = document.createElement('button')
    saveBtn.textContent = `save`
    saveBtn.setAttribute('type', 'btn')
    saveBtn.classList.add('save-button')
    editPopUp.appendChild(saveBtn)
    saveBtn.addEventListener('click', () => {
        // save edited information
        const aboutDivEl = document.getElementById('infodiv')



        const editedObject =  {name: nameInput.value, address: addressInput.value, about: aboutInput.value}

        const savedInfo = localStorage.setItem('editedInfo', JSON.stringify(editedObject))

        const localInfo = JSON.parse(localStorage.getItem('editedInfo'))

        const registredInfo =  JSON.parse(localStorage.getItem('data'))

        if(registredInfo){
            const lastItem = registredInfo[registredInfo.length-1]
            lastItem.name = localInfo.name
            lastItem.address = localInfo.address
            users.push(lastItem)
            profilename.innerHTML = localInfo.name
            profileAddress.textContent = localInfo.address
            aboutDivEl.textContent = localInfo.about

        }

        


        document.body.removeChild(editPopUp)
        containerEl.classList.remove('background')

    })


    document.body.appendChild(editPopUp)
    editPopUp.classList.toggle('show')
    containerEl.classList.add('background')

    return editPopUp
})
