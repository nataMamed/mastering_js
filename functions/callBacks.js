const fabricantes = ['Mercedes', 'BMW', 'Fiat']

function showBrand(brand, index){
    console.log(`${index + 1}: ${brand}`);
}

fabricantes.forEach(showBrand)
fabricantes.forEach(brand => console.log(`${brand}`))

const grades = [3, 5, 8, 9, 10, 1, 5, 6, 7]

// Sem callback
let goodGrades = []
function chooseGrades(grades){
    for (iGrade in grades){
        if (grades[iGrade] > 7){
            goodGrades.push(grades[iGrade])
        }
    }
}
chooseGrades(grades)
console.log(goodGrades);

//Com callback
const goodGrades1 = grades.filter(function (grade){
    return grade > 7
})
console.log(goodGrades1);

const chooseGrades1 = grade => grade > 7
const goodGrades2 = grades.filter(chooseGrades1)
console.log(goodGrades2);
