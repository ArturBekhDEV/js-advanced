// CALLBACKS || функція зворотного виклику

function loadImageCallback( url, callback ){
	// DOC: IMAGE CONSTRUCTOR: https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement/Image
	let imageElement = new Image();

	// привласнюємо новій картинці переданий урл
	imageElement.src = url;

	// Якщо завантажилося успішно, то викликаємо колбек
	// null передаємо тому що еррора немає. код функції Render Action
	imageElement.onload = function(){
		callback(null, imageElement);
	};
	// Обробляємо ерор
	imageElement.onerror = function(){
		var message = 'Error on image load at url' + url;
		callback(new Error(message));
	};
}

function RenderAction(error, img){
	if(error){
		throw error;
	}
	RenderImage(img);
}

	loadImageCallback('images/cat3.jpg', RenderAction);

	// CallBack DOOM below :)

loadImageCallback('images/cat1.jpg', (error, img) => {
	// throw -> Закінчуємо виконання програми після виконання виразу
	if(error){
		throw error;
	}
	RenderImage(img);
	loadImageCallback('images/cat2.jpg', (error, img) => {
		// throw -> Закінчуємо виконання програми після виконання виразу
		if(error){
			throw error;
		}
		RenderImage(img);
		loadImageCallback('images/cat3.jpg', (error, img) => {
			// throw -> Закінчуємо виконання програми після виконання виразу
			if(error){
				throw error;
			}
			RenderImage(img);
			loadImageCallback('images/cat4.jpg', (error, img) => {
				// throw -> Закінчуємо виконання програми після виконання виразу
				if(error){
					throw error;
				}
				RenderImage(img);
			})
		})
	})
})





