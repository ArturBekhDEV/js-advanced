document.addEventListener('DOMContentLoaded', () => {

  const myUploadForm = document.forms.upload;
        myUploadForm.onsubmit = function(e){
          e.preventDefault();
          let input = myUploadForm.elements.myfile;
          let file = input.files[0];

          if (file) {
            upload(file);
          }
          return false;
        }
});

const upload = (file) => {
  let xhr = new XMLHttpRequest(); // 0 state

  xhr.open("POST", "/"); // 1 state
  // console.log('xhr.open("POST", "/");');
  xhr.send(file); // 3 state
  // console.log('xhr.send(file);');

  console.log('xhr', xhr);
  // обробник для закачування
   console.log('READYSTATE.START:', xhr.readyState);

    // xhr.addEventListener('loadstart', (e) => console.log('loadstart', e) );
    // xhr.addEventListener('loadend', (e) => console.log('loadend', e) );

    xhr.addEventListener('readystatechange', (e) => {
      //   /*
        // Значення    Стан              Опис
        // 0           UNSENT            Об'єкт було створено. Метод open() ще викликався.
        // 1           OPENED            Метод open() був викликаний.
        // 2           HEADERS_RECEIVED  Метод send() був викликаний, доступні заголовки (headers) та статус.
        // 3           LOADING           Завантаження; responseText містить часткові дані.
        // 4           DONE              Операцію повністю завершено.
        //   */
        console.warn('readyStateChange:', e);
          if( xhr.readyState === 4){
            console.log('DONE',  xhr.readyState);
          } else {
            console.log('readyStateChange:', xhr.readyState);
            // console.log('readyStateChange:', e.target.readyState);
            console.log('SOME ERROR');
          }
      })
};
