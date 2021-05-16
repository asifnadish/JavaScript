let count = 0;
function fun1() {
    count++;                                                 // you can declare variable using var, let, const
    //alert(count);  
    if (count % 10 === 0)
        alert("you reached " + count + " number")               //  another way to show variable alert(`Count is now ${counter}`)   known as template liberals
    document.querySelector('p').innerHTML = count;
}
function fun2() {
    document.querySelector('h2').innerHTML = "you have clicked the display button button"

}
function fun3() {
    const header = document.querySelector('h3')
    if (header.innerHTML === "hello")
        header.innerHTML = "GoodBye";
    else
        header.innerHTML = "hello";

}

document.addEventListener('DOMContentLoaded', function () {
    //document.querySelector('button').onclick = fun1;
    document.querySelector('#btn1').onclick=fun1;       // we can also write query selector using id  like this 
    document.getElementById('btn2').onclick = fun2;
    document.getElementById('btn3').onclick = fun3;

    setInterval(fun1,1000);

});