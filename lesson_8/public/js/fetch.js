/*
  FETCH - fetch(url, [options])
*/

// function FetchDemo(){
//   let url = 'http://test.api.com.ua';
//   Без options це простий GET-запит, що завантажує вміст за адресою url

//  let options = {
// Усі опції:
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// method: 'POST', // GET, PUT, DELETE etc.
// headers: headers,
/*
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
        Заголовки HTTP дозволяють клієнту та серверу передавати додаткову інформацію за допомогою запиту HTTP або відповіді.
         Сюди можна передати будь-які http headers як просто об'єктом:
        {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
        Або через конструктор

        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "text/plain");
            myHeaders.append("Content-Length", 255);
            myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

        https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
      */

// body: body, // Будь-які дані для вашого запиту
// mode: 'nocors',

/*
      CORS: Cross-Origin Resourse Shairing
       Якщо просто: то в якому режимі крос-дому буде зроблено запит
       Якщо складно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    */
//};

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(
//     (res) => {
//       console.log(res);
//       return res.json();
//     }
//   )
//   .then(
//     (res) => {
//       console.log('res from second then');
//       console.log(res);
//       res.forEach( item => {
//         console.log(item);
//       })
//     }
//   )

// //ASYNC PROMISE
let url = "https://jsonplaceholder.typicode.com/users";

let myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

const ConvertToJSON = (response) => response.json();

function DataHandler(json) {
  console.log("json", json);
  json.map((item) => {
    let elem = document.createElement("div");
    elem.innerHTML = `
                <div>
                  ${item.name}, ${item.email}
                </div>
              `;
    document.body.appendChild(elem);
  });
}

fetch(url, { method: "GET", headers: myHeaders })
  .then(ConvertToJSON)
  .then(DataHandler);
