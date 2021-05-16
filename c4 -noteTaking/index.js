document.addEventListener("DOMContentLoaded",function(){
    const newTask = document.querySelector('#task');
    const submit=document.querySelector('#submit');

    submit.disabled=true;

    newTask.onkeyup = () =>{
        if(newTask.value.length>0){
            submit.disabled=false;
        }
        else{
            submit.disabled=true;
        }
    }
    document.querySelector('form').onsubmit=()=>{
        const task=newTask.value;
        const li = document.createElement('li');                // create HTML element
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);            // appending th ecreated HTML element
        newTask.value = '';
        submit.disabled = true;

        return false;

    }
});