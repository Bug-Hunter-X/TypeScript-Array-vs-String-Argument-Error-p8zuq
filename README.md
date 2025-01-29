# TypeScript Array vs String Argument Error
This repository demonstrates a common TypeScript error: passing an array of strings to a function that expects a single string.

## The Bug
The `greeter` function expects a single string argument. However, the `user` variable is an array of strings. Attempting to pass `user` to `greeter` results in a type error.

## The Solution
The solution involves either iterating over the array and calling the `greeter` function for each string or modifying the function signature to accept an array of strings.

## How to reproduce
1. Clone this repository.
2. Open `bug.ts`.
3. Run `tsc bug.ts` to compile the code. You will see the type error.
4. Open `bugSolution.ts`.
5. Run `tsc bugSolution.ts` to see the error resolved.