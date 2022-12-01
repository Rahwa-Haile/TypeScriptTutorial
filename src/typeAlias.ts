type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employe : Employee = {
    id: 1, 
    name: 'rahwa',
    retire: (date: Date)=>{
        console.log(date)
    }
};

