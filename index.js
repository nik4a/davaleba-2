const numberArr = [12, 23, 43, 11, 9, 2, 121, 90];
let result;
let i = 0;

for (let i = 0; i < numberArr.length; i++) {
  if (numberArr[i] > 31 && !(numberArr[i] % 2)) {
    result = `${numberArr[i]} element is greater than provided value and is Even`;
  } else if (numberArr[i] < 31 && numberArr[i] % 2) {
    result = `${numberArr[i]} element is greater than provided value and is ODD`;
  }
  else if (
    numberArr[i] > 31 && (numberArr[i] % 2)){
        result = `${numberArr[i]} no one`
    }
    else if (numberArr[i] < 31 && !(numberArr[i] % 2)){
        result = `${numberArr[i]} no one`
    }
  console.log(result);
};

// task 1

let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57],
};

function log (array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
};
function chekerArr(object){
    if(object.isItarable == true){
        log(object.sampleArray)
    }
    else if(object.isItarable == false){
        console.log("provided array isn't itarable")
    }
};
//chekerArr(sampleObject)

//task 2

let chekPhitagoraOne = true;
let chekPhitagoratwo = false;
function phitagoras (x, y, z){
    if( x * x + y * y == z * z || z * z + x * x == y * y || z * z + y * y == x * x){
        console.log(chekPhitagoraOne)
    }
    else if (x !== "number" ? y !== "number" : z !== "number" ){
        console.log(chekPhitagoratwo)
    }
};
//phitagoras(3, 4, 5)

// task 3

const num1 = [45, 54, 12, 65, 74, 1, ]
 const nums = [2,14,25,75,11,6];
const minmax = (...x) =>{
    for (let i = 0; i < x.length; i++){
      console.log(`Min value is ${Math.min(...x[i])} and Max value is ${Math.max(...x[i])}`);
    }
};
// minmax()

//task 4

function degrees(x){
if (x < 90 && x > 0){
  console.log(`${x} Acute angle: An angle between 0 and 90 degrees.`);
} else if (x == 90){
  console.log(`${x} Right angle: An 90 degree angle.`);
} else if (x > 90 && x < 180){
  console.log(`${x} Obtuse angle: An angle between 90 and 180 degrees.`);
} else if (x == 180){
  console.log(`${x} Straight angle: A 180 degree angle.`);
} else if (x > 180){
  console.log("undefind deg.");
} else if(x !== "number"){
  console.log("NaN");
}};

//degrees()

//task 5


const students1 = [
  {name: `will`, grade : 45},
  {name: `dom`, grade : 21},
  {name: `ann`, grade : 84},
];

const students = [
  {name: `student1`, grade : 91},
  {name: `student2`, grade : 71},
  {name: `student3`, grade : 45},
];
let checkStudentGrade = (obj) => {
  
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].grade > 0 && obj[i].grade <= 50) {
      obj[i].finalResult = `F`;
    }
    else if (obj[i].grade > 50 && obj[i].grade <= 60) {
      obj[i].finalResult = `E`;
    }
    else if (obj[i].grade > 60 && obj[i].grade <= 70) {
      obj[i].finalResult = `D`;
    }
    else if (obj[i].grade > 70 && obj[i].grade <= 80) {
      obj[i].finalResult = `C`;
    }
    else if (obj[i].grade > 80 && obj[i].grade <= 100) {
      obj[i].finalResult = `A`;
    }
  }
  console.log(obj)
};
checkStudentGrade(students1);