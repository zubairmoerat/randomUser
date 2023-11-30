let order = []
let cardContainer = document.querySelector('[data-cards]');
fetch('https://randomuser.me/api?results=20')
.then(data=> data.json())
.then(result=> {
    let {results} = result 
    results.forEach( people =>{
        console.log(people.name.first);
        cardContainer.innerHTML += 
        `
        <div class="card">
            <img src="${people.picture.large}" alt="${people.name.first}">
            <div class="body">
            <h5 class="title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="text">Age: ${people.registered.age}</p>
        </div>
        `
        order.push(people)
    });
});
document.querySelector('[data-submit2]').addEventListener('click',function ascend(){
    debugger
    cardContainer.textContent = order.sort();
});
document.querySelector('[data-submit3]').addEventListener('click', function descend(){
    cardContainer.textContent = order.reverse();
});