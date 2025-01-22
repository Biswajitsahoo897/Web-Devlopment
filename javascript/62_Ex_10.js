/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
//this is the code by using the array concept 
Adj_1={
    //adjectives
    1:"Crazy",
    2:"Amazing",
    3:"Marvalous"
}
shop_name={
    1:"Engine",
    2:"food",
    3:"Garmets"
}
another_word={
    1:"bros",
    2:"Limited",
    3:"Hub"
}
var max=3
function getRandomKey(obj){
    const a= Math.floor(Math.random(3)*max +1);
    return obj[a];
}

// console.log(getRandomKey(3)) for the test purpose 

function combine_result() {
    let adjectives_1=getRandomKey(Adj_1);
    let shop_1=getRandomKey(shop_name);
    let word_1=getRandomKey(another_word);
    console.log("The word is :");
    console.log(`${adjectives_1} ${shop_1} ${word_1}`)

}
// Generate and display a random shop name
const rand_name = combine_result();
