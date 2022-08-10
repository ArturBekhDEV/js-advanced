/*
    Загальна інформація про час та конструктор дати JavaScript
*/

document.addEventListener('DOMContentLoaded', function(){

    /*
       Конструктор Date за замовчуванням створює об'єкт із поточною датою та часом:
    */


    // Case 1
    // let today = new Date();
    // console.log('today', today );

    // Case 2
    // Створює об'єкт Date, значення якого дорівнює кількості мілісекунд (1/1000 секунди), що пройшли з 1 січня 1970 року
    // 24 часа после 01.01.1970 (Считаем кол-во мс)
    
    // let Jan02_1970 = new Date( 60*60*24*1000 );
    // console.log('Jan02_1970', Jan02_1970, 60*60*24*1000);
    
    // let myNewDate = new Date(1510876800000);
    // console.log('myNewDate', myNewDate);

    /*
        Case 3
        String formats
        new Date(dateString)

        Можна використовувати один із форматів:
        "October 13, 1975 11:13:00"
        "October 13, 1975 11:13"
        "October 13, 1975"
        2010/08/17 12:09:36

    */
    
    // let dateString = "October 13, 1975";
    // let manyYearsAgo = new Date(dateString);
    // console.log('Many Years Ago:', manyYearsAgo);

    /*
        Case 4
        https://www.w3schools.com/js/js_dates.asp - усі формати з прикладами
        
         New Date(year, month, date, hours, minutes, seconds, ms)
         Рік року повинен бути з 4 цифр.
         Відлік місяців month починається з нуля 0.

    */

    // let detailedDate = new Date(2019, 6, 1, 2, 3, 4, 567);
    // console.log('detailedDate', detailedDate);


    /*  
        Case 5
        From input
    */
    
    // function getDate(  ){
    //     const dateInput = document.getElementById('dateInput');
    //     console.log(dateInput.value)
    //     const ourDate = new Date( dateInput.value );
    //     console.log( ourDate );
    // }
    // const getDateBtn = document.getElementById('getDateBtn');
    // getDateBtn.addEventListener('click', getDate );

});
