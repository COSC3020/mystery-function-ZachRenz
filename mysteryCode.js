
function mystery(a) {
    if(a.length == 1) return a[0]; //Returns the item in the list if there is only one item
    var foo = mystery(a.slice(1, a.length)) //Recursive - makes a new list that doesn't include the first item
    console.log(foo, a);
    if(foo > a[0]) return foo; //eventually if foo is greater than the item to the left of it it returns the item it is on.
    else return a[0];
}

array = [3, 4, 3, 2, 1];

console.log(mystery(array));

// Output 
// 1 (2) [2, 1]
// 2 (3) [3, 2, 1]
// 3 (4) [4, 3, 2, 1]
// 4 (5) [3, 4, 3, 2, 1]
// 4
// (the first item is foo, the second item is the length of the array, and the third item is the array)

// Conclusion
// The mystery function starts at the item in the very end of the array (unless the size is 1, it returns the only item in the array)
// Then, it makes a new array called foo with the first item in the og array not included and keeps opening a function that makes an array 
// With the first one not included until a function finds it's array is equal to one and then returns the first item in the list, 
// which closes that function, that stops the recursion and comes back up from the smallest function currently open, it then compares
// the first item in the list with the second and returns foo as the largest number, closing that open function, until eventually it
// finds the number greatest and keeps returning it and closes all the functions and finally returns the largest number when it closes
// the final function. Like a telescope going out and then back in. Going all the way down and back up, from complext to simple simple
// to complex again. 