function addingEventListener() {
    let inputElement = document.getElementById('button');

    function clickInput(){
        inputElement.innerHTML = 'I was clicked!'
    }

    inputElement.addEventListener('click',clickInput );    
}

addingEventListener();
