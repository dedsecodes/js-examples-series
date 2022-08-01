function getNumberOfGrades(grades) {
    // return the number of grades
    return grades.length;
}
function getSumGrades(grades) {
    // return the sum of all the grades
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade;
    })
return sum;
}
function getAverageValue(grades) {
    // return the average value of all grades (sum of all grades divided by the total number of grades)
    return getSumGrades(grades) / getNumberOfGrades(grades);
}
function getPassingGrades(grades) {
    // return all passing grades (10 and above)
    return grades.filter(function(grade) {
        return grade >= 10
    })
}
function getFailingGrades(grades) {
    // return all failing grades (9 and below)
    return grades.filter(function(grade) {
        return grade < 10
    })
}
function getRaisedGrades(grades) {
    // return all the grades raised by 1 (no grade should exceed 20)
    return grades.map(function(grade) {
        if (grade < 20) return grade += 1;
        else return grade; 
    })
}