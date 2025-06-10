const url = "https://random-word-api.herokuapp.com/word?number=1";
const factPara = document.querySelector(".factpara");
const btn = document.querySelector(".btn");

const getFacts = async () => {
    console.log('Getting Data.....');
    let response = await fetch(url);
    let data = await response.json();//JSON FORMAT
    factPara.innerText = data[0]; // Random word from the API
};


btn.addEventListener("click",getFacts);

// By using the Promise chain
// function getFacts() {
//     fetch(url).then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;

//     });
// }


// const url = "https://api.thecatapi.com/v1/breeds ";

// const getFacts = async () => {
//     console.log('Getting Data.....');
//     try {
//         let response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         let data = await response.json(); // JSON FORMAT
//         if (data.length > 1) {
//             console.log(data[1].text);
//         } else {
//             console.log('Not enough data available.');
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// getFacts();
