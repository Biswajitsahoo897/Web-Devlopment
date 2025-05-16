// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. 
//    Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses 
//    (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12),
//     or Slytherin(length greater than or equal to 12)) based on the length of their names.
let students = ["Harry", "Ron", "Hermione", "Draco", "Neville", "Luna", "Ginny", "Fred", "George", "Cho"];
let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
let houseAssignment = [];
for (let student of students) {
    let house = houses[0];
    if (student.length < 6) {
        house = houses[0];
    } else if (student.length < 8) {
        house = houses[1];
    } else if (student.length < 12) {
        house = houses[2];
    } else {
        house = houses[3];
    }
    houseAssignment.push({ student, house });
}
console.log(houseAssignment);