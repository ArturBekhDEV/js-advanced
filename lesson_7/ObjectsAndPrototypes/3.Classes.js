/*
Давайте розберемося, що таке клас в інших мовах програмування.
   "Клас - це елемент ПЗ, що описує абстрактний тип даних та його часткову або повну реалізацію" © Вікіпедія
   І давайте спробуємо реалізувати простий клас у JS

   1. Створюємо функцію конструтор Robot в якій вказується ім'я та швидкість нового робота.
   2. Задамо йому через прототип два методи – move, stop.
   3. Створимо нового робота Rover
*/
  
  // function Robot(name){
  //   this.name = name;
  //   this.speed = 0;
  // }

  // Robot.prototype.move = function(speed){
  //   this.speed += speed;
  //   console.log( `Robot ${this.name} is moving with speed ${this.speed}`);
  // };
  
  // Robot.prototype.stop = function(){
  //   this.speed = 0;
  //   console.log( `Robot ${this.name} is stoped` );
  // };

  // let TransportRobot = new Robot('Rover');
  // console.log( TransportRobot );

  //     TransportRobot.move(1);
  //     TransportRobot.move(10);
  //     TransportRobot.stop();

  // /*

    // Перевірили - начебто все працює як слід.
   // Спробуємо успадкувати класи цього робота, який вміє лише рухатись наступним роботом.
   // А також додамо йому новий метод 'translate'

  // */

  // function TranslateRobot( langs ){
  //   Robot.apply(this, arguments);
  //   this.langs = langs;
  // }

// // // Створимо об'єкт із прототипом і успадковуємо його методи
  // TranslateRobot.prototype = Object.create(Robot.prototype);

  
  
  // TranslateRobot.prototype.translate = function( string ){
  //   console.log( string.split('').reverse().join('') );
  // };
  // // //
  // let C3PO = new TranslateRobot('C3PO', ['UKR', 'ENG', 'ROM']);
  //     console.log( C3PO );
  //     C3PO.move(20);
  //     C3PO.translate('Селедка');
  
  // let R2D2 = new TranslateRobot('R2D2', null);
  //     R2D2.move(50);

  /*
    А тепер поїхали до ES5 Classes
     Створимо порожній клас, новий об'єкт цього класу та виведемо його в консоль
  */
  //
  // class Robot {}
  // let TransportRobot = new Robot();
  // console.log( TransportRobot );


  /*
    Розширимо методи та синтаксис.
     Немає приватних методів.
  */

    class Robot {
      constructor(name, speed){
        // console.log('NEW ROBOT CONSTRUCTOR:', name, speed);
        this.name = name;
        this.speed = speed === undefined ? 0 : speed;

        // console.log(`new robot: ${this.name} with speed ${this.speed}`);

        this.move = this.move.bind(this);
        this.stop = this.stop.bind(this);
        
        //this.render = this.render.bind(this);

        // ROBOTS_ARMY.push( this );
      }

      render () {
        const root = document.getElementById('root');
        let robotDiv = document.createElement('div');
            robotDiv.innerHTML = `
              <div>
                  <h2>${this.name}</h2>
                  <div>
                    <input class="_moveInput"/>
                    <button class="_move">Move</button>
                  </div>

                  <button class="_stop">Stop</button>
              </div>
            `;
        const moveBtn = robotDiv.querySelector('._move');
              moveBtn.addEventListener('click', this.move );
        const stopBtn = robotDiv.querySelector('._stop');
              stopBtn.addEventListener('click', this.stop );

              this.test = 'asdasdasdasdasd';


              console.log(this.test);
              
        root.appendChild(robotDiv);
      }  
      
      move(e){
        this.speed += 10;
        console.log( `Robot ${this.name} is moving with speed ${this.speed}`);
      }
      
      stop(){
        console.log( this );
        this.speed = 0;
        console.log( `Robot ${this.name} is stoped` );
      }
    }


    let TestRobot = new Robot('TransportRobot');
      TestRobot.render();
        console.log(TestRobot);
    //     TestRobot.move(10);
    //     TestRobot.move(1);
    //     TestRobot.stop();
  
    // /*
    //   Далі створимо extended Class:
    // */


    class TranslateRobot extends Robot{
      constructor(name, speed){
        super(name, speed); // Super в конструкторі прокидає дані далі в "Клас" батька
    
        this.lang = ['UA', "RU", "EN"];
      }

      translate( string ){
        console.log( string.split('').reverse().join('') );
      }

      render(){
        const root = document.getElementById('root');
        let robotDiv = document.createElement('div');
            robotDiv.innerHTML = `
              <div>
                  <h2>${this.name}</h2>
                  <div>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
                  </div>
                  <button class="_stop">Stop</button>
              </div>
          `;
          const moveBtn = robotDiv.querySelector('._stop');
              moveBtn.addEventListener('click', this.stop );
              root.appendChild(robotDiv);
      }
    }
    
    let C3PO = new TranslateRobot('C3PO');
        console.log(C3PO);
        C3PO.render();
        // C3PO.translate('Do some staff');
        // C3PO.move(30);
        // console.log( C3PO );
    console.log('- - - - -');
    
    // /*

    // Проста істина: Класів у JS немає.
     // У цій реалізації, це синтаксичний цукор над прототипним успадкуванням. Перевіримо це.

    // */

      let ClassCheck = typeof( TranslateRobot );
      console.log( ClassCheck ); // function

   // /* Спробуємо дістати метод через прототип */
      console.log( TranslateRobot.prototype.stop ); // function -> BOOM!
      console.log( TranslateRobot.prototype ); //

    // /*
    //   Зробимо трохи магії.
    // */

    let Magic = TranslateRobot.prototype.move.bind({
      name: 'MagicRobot', // біндім до нашого об'єкта ім'я
      speed: 20 // та стандартну швидкість
    });
    Magic(); // Викликаємо Robot.move();
    console.log('is robot proto?', Robot.isPrototypeOf(TranslateRobot)); // true
    // // BOOM~!
    
    // /*
    //   Спробуємо змішати методи та додати до "класу" через прототипи метод:
    // */
    // console.log('#################################################################')

    Robot.prototype.property = 0;
    Robot.prototype.beep = function(){
       console.log('beep');
    };
    let BeepRobot = new Robot('BeepRobot');
        console.log(BeepRobot);
    //     //BeepRobot.beep();
    //     //console.log( BeepRobot.property );
      
    // //
        C3PO.beep();
        console.log(C3PO);
