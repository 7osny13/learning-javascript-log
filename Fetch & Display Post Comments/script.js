const postIdInput = document.getElementById('postIdInput');
const getCommentsBtn = document.getElementById('getCommentsBtn');
const errorMsg = document.getElementById('errorMsg');
const loading = document.getElementById('loading');
const commentsContainer = document.getElementById('commentsContainer');

const url = 'https://jsonplaceholder.typicode.com/comments'


const getComments = async () => {
    errorMsg.textContent = '';
    commentsContainer.classList.add('hidden');
    loading.classList.remove('hidden');
    try{

        if(!postIdInput.value) {
            throw new Error('please enter post id');
        }
        if(postIdInput.value > 100 || postIdInput.value < 1) {
            throw new Error('enter post id between 1 and 100');
        }
        let response = await fetch(`${url}?postId=${postIdInput.value}`)
        if(!response.ok){
            throw new Error(`post not found: ${postIdInput.value}`);
        }
        loading.classList.add('hidden')
        let comments = await response.json();
        commentsContainer.classList.remove('hidden');
        commentsContainer.innerHTML = ''
        comments.map(comment => {
            const {name , email , body} = comment;
            let commentparent = document.createElement('div');
            commentparent.classList.add('comment');
            let postNameEl = document.createElement('p');
            postNameEl.textContent = name;
            let PostEmailEl = document.createElement('p');
            PostEmailEl.textContent = email;
            let PostBodyEl = document.createElement('p');
            PostBodyEl.textContent = body;
            commentparent.append(postNameEl , PostEmailEl , PostBodyEl);
            commentsContainer.append(commentparent);
            console.log(comment)
        })

    } catch(err) {
        errorMsg.textContent = err.message;
        loading.classList.add('hidden')
    }
}

getCommentsBtn.addEventListener('click' , getComments);