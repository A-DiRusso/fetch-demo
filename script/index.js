const { log } = console;
log("is this thing on?")
// write a function call make breakf
//log(eggs);

const makeBreakfast = (bacon) => {
    const pancakes = bacon.results[0].image;
    localStorage.setItem('grit', pancakes);
}
const cookTheBacon = () => {
    const URL = localStorage.getItem('grit');
    document.body.style.backgroundImage = `url('${URL}')`
}



// fetch something
// 3 step process
// go to a url
//get that promise 
//JSON object 
const userInput = 'character'
const URL = `https://rickandmortyapi.com/api/${userInput}`;
// function fetchMyData(){
//     fetch(URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((eggs) => {
//         makeBreakfast(eggs)
//     })
//     .then(() =>{
//         cookTheBacon()
//     })
// }
async function fetchMyData(){
    const fetchedData = await fetch(URL)
    const jsonifiedFetchedData = await fetchedData.json()
    makeBreakfast(jsonifiedFetchedData)
    cookTheBacon()
}
fetchMyData();
