function kgTolbs (weight: number | string): number {
    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    else{
        return parseInt(weight) * 2.2;
    }
}

let num = kgTolbs(10);
kgTolbs('10');
console.log(num);
