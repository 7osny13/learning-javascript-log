const githubUsername = document.getElementById('githubUsername');
const searchBtn = document.getElementById('searchBtn');
const userCard = document.getElementById('userCard');
const avatar = document.getElementById('avatar');
const userName = document.getElementById('name');
const userBio = document.getElementById('bio');
const repos = document.getElementById('repos');
const errorMessage = document.getElementById('error');
const url = `https://api.github.com/users`;


async function ShowGitHubInfo() {
    const token = 'personal token';
    try{
        let response = await fetch(`${url}/${githubUsername.value}`,{
            headers:{
                Authorization: `token ${token}`
            }});
        if (!response.ok) {
        throw new Error(`User not found: ${githubUsername.value}`);
        }
        let user = await response.json();
        console.log(user)
        const {avatar_url , name , bio , public_repos } = user;
          avatar.src = avatar_url;
            userName.textContent = name || 'No name available';
            userBio.textContent = bio || 'No bio available';
            repos.textContent = `Repos: ${public_repos}`;
            userCard.classList.remove('hidden');
    } catch(err){
        errorMessage.textContent = err;
    }

    
}

searchBtn.addEventListener('click' , ShowGitHubInfo);