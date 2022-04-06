let fetchedApi=fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=55e9950b05cd47b49f5ee55a575b4d84&page=2')
  .then(response => response.json())
  .then(data =>data.articles).catch((err)=>{console.log(err)});
  console.log(fetchedApi)
  


//setTimeout works like this
const list = [1, 2, 3, 4, 5, 6];
console.log("Start");
for (let i = 0; i < list.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}
console.log("Stop");
