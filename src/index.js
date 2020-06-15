import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  Contoh asynchronous<br>
  Klik di sini <button id="button">Klik</button>
  </div>
`;
function getPromise(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function() {
      reject(xhr.response);
    };
    xhr.send();
  });
}
/*
getPromise("https://jsonplaceholder.typicode.com/users/1")
.then((user)=>{
  console.log("user promise",user);
  return getPromise("https://jsonplaceholder.typicode.com/posts?userId="+user.id);
})
.then((posts)=>{
  console.log("posts",posts);
})
.catch((response)=>{
  console.log("error",response);
})
*/
(async () => {
  const user = await getPromise("https://jsonplaceholder.typicode.com/users/1");
  console.log(user);
})();
