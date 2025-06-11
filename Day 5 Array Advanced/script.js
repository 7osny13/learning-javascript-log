const activeBtn = document.getElementById('showActiveBtn');
const averageBtn = document.getElementById('showAverageAgeBtn');
const activeUserList = document.getElementById('activeUsersList');
const averageAge = document.getElementById('averageAgeDisplay');

const users = [
  { name: 'Ali', age: 25, isActive: true },
  { name: 'Sara', age: 23, isActive: false },
  { name: 'ayman', age: 45, isActive: true },
  { name: 'omar', age: 35, isActive: true },
  { name: 'lara', age: 50, isActive: false },
  { name: 'ahmed', age: 18, isActive: false },
];

let activeusers = users.filter(user => user.isActive);

const displayActiveUsers = (user) => {
    const userEl = document.createElement("li");
    userEl.textContent = user;
    activeUserList.appendChild(userEl);
};

const activeUSers = (users) =>{
    users.map(user => displayActiveUsers(user.name) )
    
};

activeBtn.addEventListener('click' , () => {
    activeUserList.textContent = '';
    activeUSers(activeusers);

});

averageBtn.addEventListener('click' , () => {
    let sum = activeusers.reduce((acc, curr) => acc + curr.age, 0);
    let average = sum / activeusers.length;
    averageAge.textContent = Math.round(average);
})

