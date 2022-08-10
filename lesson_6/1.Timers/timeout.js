/*
    setTimeout - метод виконує код(або функцію),
     вказаний у першому аргументі, асинхронно, із затримкою в delay мілісекунд.
     setTimeout виконує код лише один раз
*/  


// setTimeOut та асинхронність
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiAoKXsKICAgIGNvbnNvbGUubG9nKCJDbGljayB0aGUgYnV0dG9uISIpOwp9LCAxMDAwMCk7Cgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBsb3VwZS4iKTs%3D!!!

document.addEventListener('DOMContentLoaded', function(){

    /*
        Syntax: setTimeout( function(){}, timeout );
    */
    setTimeout( myFunction, 1000 );

    let timer = null;

    function myFunction() {
        console.log("Hello 1"); // first
        timer = setTimeout(
            function(){console.log("Hello 2")}, // third
        4000);
        console.log('Hello 3'); // second
    }

    const fireBtn = document.getElementById('fire');
    fireBtn.addEventListener('click', myFunction);    
   
    function stopTimer(){        
        clearTimeout( timer );
    }

    const stopBtn = document.getElementById('stop');
    stopBtn.addEventListener('click', stopTimer);
});


