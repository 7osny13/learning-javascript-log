const getUserBtn = document.getElementById('getUserBtn');
const userName = document.getElementById('userName');
const userImage = document.getElementById('userImage');
const moreInfo = document.getElementById('moreInfo');
const userEmail = document.getElementById('userEmail');
const userLocation = document.getElementById('userLocation');

const userURL = 'https://randomuser.me/api/';


const showUserInfo = () => {
    
    fetch(userURL)
    .then(response => response.json())
    .then(data => {
       const { name, email, location, picture } = data.results[0];
        console.log(data)
        userName.textContent = `Name: ${name.title}: ${name.first} ${name.last}` ;  
        userImage.src = `${picture.large}`;
        setTimeout(() => {
            moreInfo.classList.remove('hidden-info')
            moreInfo.classList.add('visible');
            userEmail.textContent = `Email: ${email}`;
            userLocation.textContent = `Country: ${location.country}`
            getUserBtn.disabled = true;
        },5000)
        
    })
    .catch(error => alert(error));
};

getUserBtn.addEventListener('click' , showUserInfo);