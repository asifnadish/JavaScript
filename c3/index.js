/* document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll('button').forEach(function (button){
        button.onclick=function(){
            document.querySelector('#hello').style.color=button.dataset.color;
        }
    });
});
 */

// below , implemented using arrow function

document.addEventListener("DOMContentLoaded", () =>{
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = () =>{
            document.querySelector("#hello").style.color=button.dataset.color;
        }
    });
});