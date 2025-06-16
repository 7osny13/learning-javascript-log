const userIdInput = document.getElementById('userIdInput');
const getUserBtn = document.getElementById('getUserBtn');
const errorMsg = document.getElementById('errorMsg');
const loading = document.getElementById('loading');
const userCard = document.getElementById('userCard');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userAddress = document.getElementById('address');

const url = 'https://jsonplaceholder.typicode.com/users';

const getUserData =async ()  =>{
    errorMsg.textContent = '';
    userCard.classList.add('hidden');
    loading.classList.remove('hidden');
    try{
        
        if(!userIdInput.value) {
            throw new Error('please enter user id');
        }
        if(userIdInput.value > 10 || userIdInput.value < 1) {
            throw new Error('enter user id between 1 and 10');
        }
        let response = await fetch(`${url}/${userIdInput.value}`)
        if(!response.ok){
            throw new Error(`User not found: ${userIdInput.value}`);
        }
        loading.classList.add('hidden')
        let user = await response.json();
        const {name , email , address : {city}} = user
        userCard.classList.remove('hidden'); 
        userName.textContent = name;
        userEmail.textContent = email;
        userAddress.textContent = city;
        getUserBtn.disabled = true;
    } catch (err) {
        errorMsg.textContent = err.message;
        loading.classList.add('hidden')
    }
}

getUserBtn.addEventListener('click' , getUserData);