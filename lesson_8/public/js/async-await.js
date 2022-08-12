/*
  ASYNC-AWAIT

   Всередині функції що позначені як async ви можете помістити
   ключове слово await перед виразом який поверне promise.
   Під час виконання асинхронної функції вона зупиняється доки
   проміс не стане виконаним.

   Завдання конструкції async-await писати асинхронний код, який
   читатиметься так само просто як і синхронний

*/

// 1. Повертає проміс
async function PlayGame() {
  let rand = Math.floor(Math.random() * 100);
  return rand % 2 === 0 ? true : false;
}

let GameResult = PlayGame();
console.log(GameResult);

GameResult.then(function (res) {
  res === true ? console.log("YOU WON") : console.log("YOU LOSE");
});

// Demo with Response Awaiting

function resolveAfter(number, ms) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(number);
    }, ms);
  });
}

async function CombineNumbers() {
  console.log("before a");
  let a = await resolveAfter(70, 1000);
  console.log(a);
  console.log("before b");
  let b = await resolveAfter(40, 3000);
  console.log(b);

  return a + b;
}
let sixteen = CombineNumbers();
sixteen.then((res) => console.log("Final Result", res));

// // Combine User
async function getUserWithPosts() {
  const getUserResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await getUserResponse.json();

  const selectedUserName = users[0];
  console.log("main user", selectedUserName);

  const getUsersPosts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const UserPosts = await getUsersPosts.json();

  console.log("user posts", UserPosts);

  let { email, name, username } = selectedUserName;
  const CombinedUser = {
    email,
    name,
    username,
    posts: UserPosts.filter((up) => up.userId === selectedUserName.id),
  };
  return CombinedUser;
}
// //
let UserWithFriends = getUserWithPosts();
UserWithFriends.then((data) => console.log("Final Person:", data));
