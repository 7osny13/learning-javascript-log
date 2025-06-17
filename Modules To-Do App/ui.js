

export function displayTask(value , parent){
    const liEl = document.createElement('li');
    liEl.textContent = value;
    parent.append(liEl);

}