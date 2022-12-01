type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
// console.log(customer) // works perfectly, it returns null

// console.log(customer.birthday);// This will not work because the tsc knows you are capable of passing 0 at any time and the function might return null. 

// if(customer !== null && customer !== undefined){
//     console.log(customer.birthday);// under some circumstances our function might return undefined. Hence we add that both to the function return type and this if condition
// } //Now rather using if statement we can use optional chaining as follows.

//optional property access operator
// console.log(customer?.birthday); // Now this gives the date only if the return type is Customer, otherwise it gives back undefined
console.log(customer?.birthday?.getFullYear()); // We made the birthday in the type Customer optional. Hence we have to use the optional property access modifier here too. Hence this gives back the date only if the customer is type Customer and the birthday is avaiable/implemented
 

//Optional element access operator
//Now this is useful when we are dealing with arrays
//customer?.[0]// Now we can access the first element only if the array is not null or undefined. This has saved us from usig if/else statement

//Optional call operator
 let log: any = null;
//  log('a')// Q. This was supposed to give me an error but it didn't
 log?.('a');// This will be executed only if we are referencing a function