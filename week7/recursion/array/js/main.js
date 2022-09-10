// const first = (num ) => {
//     console.log(`num`, num);
//     second (num + 1)
//     console.log('End of first()');
// }
// const second = (secondNum ) => {
//     console.log(`num`, secondNum);
//     third (secondNum + 10)
//     console.log('End of second()');
// }; //second()

// const third = ( thirdNum ) => {
//     console.log(`num`, thirdNum);
//     console.log('We are done!');
// } // third()


// debugger
// first ( 1 )

// Recursive version

const items = [ 'a', 'b', 'c', 'd', 'e'];

// we would use forEach in a normal iterative version

// in the recursive version, we just take each element of the array off:

const recursiveEach = (arr, indent=0) => {

    let spaces = Array(indent).fill('   ').join('');
    //trick to get spaces

    const [firstItem, ...restOfArray] = arr;
    //here, we will grab the first thig and place it into a veariable called firstItem and then grab the rest of the array and call it rest.
    //you could also do [first, second, ...rest] etc.  You then have variables ofr
    //the first, second, and remainder of the object
    console.log(`${spaces}item: `, firstItem);
    
    
    if(restOfArray.length > 0){
        recursiveEach( restOfArray, indent + 1 )
        
    }
    console.log(`${spaces} the arr is currently`, arr);
   
    
    
};

recursiveEach(items)
