console.log("Lets learn Basics Ajax today!");


let fetchBtn = document.getElementById('fetchbtn');
fetchBtn.addEventListener('click', buttonclickHandler) //when someone clicks the button i want to turn on the function below
function buttonclickHandler() {
    console.log('you have clicked the fetchbtn');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object 

    xhr.open('GET', 'harry1.txt', true); //get is used to receive data and post is used to send data and true means the data should be asynchronous.

    // what to do on progress?

    xhr.onprogress = function () {
        console.log('On Progress');

    }
    //now when the progress is done what should we do? , we will load a function

    xhr.onload = function () {
        
        console.log(this.responseText); //response text will give us the data from harry.txt

    }

    // send the request 

    xhr.send();






}