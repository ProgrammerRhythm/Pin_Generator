document.getElementById('generate').addEventListener('click' , function(){
    const randomValue = Math.random()*10000;
    result = Math.floor(randomValue);
    console.log(result)
    let string = result.toString();
    let length = string.length;
    if(length==4){
        document.getElementById('show').innerText = result;
    }
    else{
        document.getElementById('show').innerText = 'Try Again';
    }
})

var input = document.getElementById('input');
number = document.querySelectorAll('.num div');
clear = document.getElementById('clear');
resultDisplayed = false;

for(var i = 0; i< number.length; i++){
    number[i].addEventListener("click", function(e){
        var currentString = input.innerHTML;
        if(resultDisplayed == false){
           out = input.innerHTML += e.target.innerHTML;
        }
    });
}

clear.addEventListener('click', function(){
    input.innerHTML = '';
    document.getElementById('match').style.display = 'none';
    document.getElementById('notMatch').style.display = 'none';

})


document.getElementById('submit').addEventListener('click', function(){
    console.log(typeof output);
    if(result==out){
        document.getElementById('match').style.display = 'block';
    }
    else{
        document.getElementById('notMatch').style.display = 'block';
        // output = document.getElementById('count').innerText;
        // output = parseFloat(output);
        // let retry= output-1;
        // document.getElementById('count').innerText = retry;
        // console.log(retry)
}
})

