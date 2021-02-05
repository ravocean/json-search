/*
Author: Husrav Khomidov
File: json-search.js
 */

let people = [
        {"fName":"Marty", "lName": "Sandman", "Sex":"M", "Born":"1970", "Died":"2020", "Father":"Nick Sandman", "Mother":"Maggy Sandman"},

        {"fName":"Igor", "lName": "Petrovskiy", "Sex":"M", "Born":"1969", "Died":"Alive", "Father":"Nikolay Petrovskiy", "Mother":"Natalia Petrovskaya"},

        {"fName":"Allison", "lName": "Bear", "Sex":"F", "Born":"1999", "Died":"Alive", "Father":"Jimothy Bear", "Mother":"Mia Bear"},

        {"fName":"Mark", "lName": "Clare", "Sex":"M", "Born":"1980", "Died":"Alive", "Father":"Mark Clare", "Mother":"Cathy Clare"}
    ];


function runNames() {

    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let str = "";

    for (let i = 0; i < people.length; i++) {
        if (people[i].fName.toLowerCase() === searchInput || people[i].lName.toLowerCase() === searchInput) {

            str += "Name: " + people[i].fName + " " + people[i].lName  + "<br>";
            str += "Sex: " + people[i].Sex + "<br>";
            str += "Born: " + people[i].Born + "<br>";
            str += "Died: " + people[i].Died + "<br>";
            str += "Father: " + people[i].Father + "<br>";
            str += "Mother: " + people[i].Mother + "<br> <br>";
        }

        document.getElementById("result").innerHTML = str;
    }

    if (str === ""){
        str = "No name found";
        document.getElementById("result").innerHTML = str;
    }
}
