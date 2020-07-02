// 1. What is the Big O for this?
//1. O(1)
// 2. O(n)

// 2. Even or odd
// O(1) because there's no loops, and time is independent of the input in this case

// 3. Are you here?
// O(n^2) because there are nested for loops. The complexity is being increased by a factor of how many lops there are. In this case, 2.

//4. Doubler
// O(n) because there's only one for loop looping through one array.

//5. Naive search
// O(n) because there's only one for loop looping through one array.

//6. Creating pairs
// O(n^2) because there are 2 nested for loops with accessing an array.

//7. Compute the sequence
//Creates a fibonacci sequence up to num amount of numbers. It is O(n) because the run-time is dependent on the input number.

//8. An efficient search
// O(log(n)) because when the input significantly increases, the output does not. It doesn't need to check every element.

//9. Random element
//O(1) because the runtime is constant; there's no loops.

//10. What Am I?
//The function calculates if the input is a prime number and returns true if it is. The Big O is O(n) and sublinear; time is dependent on the input, but not strictly in a linear way.

//11. Tower of Hanoi
function TOH (num, source, dest, temp) {
    if (num === 1) {
        console.log(`${source} -> ${dest}`)
        return;
    };

    TOH(num - 1, source, temp, dest)
    console.log(`${source} -> ${dest}`)
    TOH(num - 1, temp, dest, source)
};

TOH (3, 'A', 'C', 'B');

//1. Rod A: 1, 2, 3, 4; Rod B: none; Rod C: 5, 6, 7
//2. 7 moves; 15 moves; 31 moves
//3. O(n^2)

//12. Iterative version
//See recursion repo

//13. Recursive Big O
//CountSheep: O(n)
//Power Calculator: O(n)
//Reverse String: O(n)
//Trianlge: O(n)
//Split: O(n)
//Factorial: O(n)
//Fibonacci: O(n)

//14. Iterative Big O
//CountSheep: O(n)
//Power Calculator: O(n)
//Reverse String: O(n)
//Trianlge: O(n)
//Split: O(n)
//Factorial: O(n)
//Fibonacci: O(n)