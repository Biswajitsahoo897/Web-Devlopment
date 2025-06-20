const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')//u may use return here but ...have to use curly braces

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);




  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const newnum=myNumers.filter((e)=>(
      e>7
      //always use return statment if u use curly braces{} but not require if u use ()
  ))
  console.log(newnum);
  

// const newNums = myNumers.map( (num) => { return num + 10})





// u can also use the forEach loop
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newarrayNum=[]
myNumers.forEach((e)=>{
  if(e>6){
    newarrayNum.push(e)
  }
})
console.log(newarrayNum);

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);