
import { getFemaleName, getMaleName, getLastName } from './allNames.js';

const grade = (score) => {
    if (score < 0 || score > 100)
        return 'Invalid';
    else if (score >= 70)
        return 'A'
    else if (score >= 60)
        return 'B'
    else if (score >= 50)
        return 'C'
    else if (score >= 45)
        return 'D'
    else
        return 'F'
}            

const randome = () => Math.floor((Math.random() * 100) );

function randScore() {
    let ran;
    do{
        ran = randome();   
    }while (ran < 35);
        return ran;
    }


function getAge(){
    let ag;
    do{ 
        ag = randome();
    }while(!(ag >= 20 && ag <= 40))
        return ag;
    }


function getMat(){
   let un = Math.floor((Math.random() * 1610) + 1000 );
   return (`UG/23/${un}`)
}

let student = {
courses :  ["CSC 106", "MTH 102", "GST 112", "COS 102", "CSC 102", "STA 102", "PHY 102", "PHY 108"],
grades : [],
}

export function getMaleStudent(){
    student.name = `${getMaleName()} ${getLastName()}`;
    student.gender = "Male";
    student.image = "./public/assets/JohnDoe.png";
    student.mat_number = getMat();
    student.age = getAge();
    student.score = Array.from({length:8}, () => randScore());
    student.grades = student.score.map(i => grade(i));

    return student;
}



export function getFemaleStudent(){
    student.name = `${getFemaleName()} ${getLastName()}`;
    student.gender = "Female";
    student.image = "./public/assets/JaneDewey.png";
    student.mat_number = getMat();
    student.age = getAge();
    student.score = Array.from({length:8}, () => randScore());
    student.grades = student.score.map(i => grade(i));

    return student;
}

