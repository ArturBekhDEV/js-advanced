/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

function Comment(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
}

Comment.prototype.avatarUrl = "www.google.com";
Comment.prototype.LikeFunc = function (likes) {
  this.likes++;
};

let myComment1 = new Comment(
  "Artur",
  "Hello here is my coment",
  "www.google.com"
);

var CommentsArray = [
  "myComment1 ",
  "myComment2 ",
  "myComment3 ",
  "myComment4 ",
];

function Coment(array) {
  for (let i = 0; i < array.length; i++) {
    document.write(array[i]);
  }
}
Coment(CommentsArray);
