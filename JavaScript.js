//Declaring an empty array

let arr = [];

//Declare and add elements (initializing the array)
let names = ["john", "George", "Susan", "Alejandro"];

let runIt = function () {

    //Outputs the whole array
    alert(names);

    //output ONE element from the array at the index provided
    alert(names[1]);

    //Used variables to grab an element and combine it with a string/other variables
    let thisGuy = names[3];
    let message =" is a good name.";

    alert(thisGuy + message);

};
//this function demonstrates the methods available to the array
let  doTheThings = function(){

    //ADDING FUNCTIONS

    //ADDS to the END
    alert(arr);
    arr.push("Mickey");
    alert(arr + " The number of elements is: " + arr.length);
    arr.push("Donald, Goofy, Minnie, Daisy, pluto" );
    alert(arr + "The number of elements is" + arr.length);

    //ADD ELEMENTS VIA PROMPT with A LOOP
   let number = 4;
   let answer = true;

   arr.push(number, answer);

   alert(arr);

};

let doTheUnshift = function (a, b, c) {

    //ADDING FUNCTION
    alert(names[2]);
    //ADDS TO THE BEGINNING
    names.unshift("Jerry");

    alert(names);
    alert(names[2]);

    names.unshift(a);
    names.unshift(b);
    names.unshift(c);

    //alert("First three unshifts: " + names);

    names.unshift(a, b, c);

    //alert("Next unshifts: " + names);

    //CLEAR OUT ARRAY
    arr = [];

    arr.push(a, c);
    arr.unshift(b);

    //lert(arr);
};

let soTheSplice = function () {

    doTheUnshift("Gual Darnit", "Thingy", "Hanky Panky");

    alert(names);
    alert(arr);

    //There Are THREE WAYS TO USE SPLICE

    //METHOD 1, REMOVE ONE, ADD ONE

    //REMOVES ONE ELEMENT AND ADDS ONE ELEMENT
    names.splice(3, 1, "Tom");
    arr.splice(3, 1, "Doug");

    alert(names);
    alert(arr);

    //REMOVES MANY ELEMENTS AND MANY ELEMENTS
    names.splice(3, 4, "Dixk", "Harry", "Kevin");
    alert(names);

    //METHOD 2, JUST REMOVE
    alert(arr);
    arr.splice(1,2);
    alert(arr);
};

let doThePopNShift = function () {

    //METHODS TO REMOVE ELEMENTS
    soTheSplice();

    //removes from the end
    alert(names);
    let lastName = names.pop();
    alert(lastName);
    alert(names);
    names.push(lastName);

    //removes from the beginning
    let firstName = names.shift();
    alert(firstName);
    alert(names);

    

};