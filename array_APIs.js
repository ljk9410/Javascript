//Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    //My result
    console.log(fruits.toString());
    //Ellie's result
    console.log(fruits.join());
}

//Q2. make an array out of a string
{
    const fruits = '🍉, 🥝, 🍎, 🍏'
    const fruit_arr = fruits.split(',');
    console.log(fruit_arr);
}

//Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
}

//Q4. make new array without the first two elements.
{
    const array = [1, 2, 3, 4 ,5];
    new_arr = array.slice(2);
    console.log(new_arr);
}

class Student
{
    constructor(name, age, enrolled, score)
    {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
]

//Q5. find a student with the score 90
{
    const result = students.find(student => student.score === 90);
    console.log(result);
}

//Q6. make an array of enrolled students
{
    const result = students.filter(student => student.enrolled === true);
    console.log(result);
}

//Q7. make an array containing only the students' scores 
//result should be: [45, 80, 90, 66, 88]
{
    const result = students.map(student => student.score);
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50
{
    //My result
    const result = students.filter(student => student.score <= 50);
    console.log(result);

    //Ellie's result
    console.log(students.some(student => student.score < 50)); // 하나라도 있으면 true
    console.log(students.every(student => student.score < 50)); // 모든 elements가 조건에 맞으면 true : false
}

//Q9. compute students' average score
{
    //My result
    let average = 0;
    const result = students.forEach(student => {
        average += student.score;
    });
    console.log(average / students.length);

    //Ellie's result
    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result2 / students.length);
}

//Q10. make a string containing all the scores
//result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score);
    console.log(result.toString());
    console.log(result.sort((a, b) => a - b).toString());

    //anthoer way
    const result2 = students.map(student => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result2);
}