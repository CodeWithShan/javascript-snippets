// const apiURL = "https://jsonplaceholder.typicode.com/todos/2";
// fetch(apiURL)
//     .then(response => response.json())
//     .then(data => console.log(data.title))

(async () => {
    const apiURL = "https://jsonplaceholder.typicode.com/todos/2";
    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data);
})();



