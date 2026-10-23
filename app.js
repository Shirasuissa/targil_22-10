//step 1
function extractNumbers(arr){
    if(!Array.isArray(arr))
    {
        throw new Error("Input must be an array");
    }

    const numbers= arr.filter((item)=>
         {return typeof item==="number"&& !Number.isNaN(item)})

    return numbers;
}

//check
console.log(extractNumbers([1, "hi", 5]));
console.log(extractNumbers([1, NaN, 7, "hello"]));

//step 2
function sumNumbersSafe(arr){
    try{
        const numbers= extractNumbers(arr)
        let sum=0
        for(let i=0; i<numbers.length;i++){
            sum+=numbers[i];
        }
        return sum;
    }
    catch(error)
    {
        console.warn(error.message);
        return 0;
    }
}

//check
console.log(sumNumbersSafe("fail"));

//step 3
function filterLargeSums(arrList, minTotal){
    const result= arrList.filter((item)=>{
        const sum=sumNumbersSafe(item)
        return sum>=minTotal;
    })
    return result;
}

//check
const result = filterLargeSums([[1,2,3], [10,"bad",5], [13,1,4], "fail"], 10);
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

//step 4
function summaryStats(arrList){
    const validArrays = filterLargeSums(arrList, 10);
    const result= validArrays.map((item)=>{
        const sum = sumNumbersSafe(item);
        const numbers = extractNumbers(item);
        const average = sum / numbers.length;
        return{sum: sum, average:average}
    })
    return result;
}

//check
const stats = summaryStats([[1,2,3], [5,5,5], [100], "bad"]);
for (let i = 0; i < stats.length; i++) {
    console.log(stats[i]);
}

//step 5
function safeCalculator(a, b, operation){
    if(typeof a !== typeof b)
        throw new Error("a and b must be the same type")
    if(typeof a !== "number" || typeof b !== "number")
        throw new Error("a and b must be numbers")
    if (operation==="add")
        return a+b
    if (operation === "subtract")
        return a - b;
    if (operation === "multiply")
        return a * b;
    if (operation === "divide"){
        if (b===0){
            throw new Error("Cannot divide by zero")
        }
        return a / b;
    }
    throw new Error("Invalid operation");
}

//check
console.log(safeCalculator(10, 5, "add"));      
console.log(safeCalculator(10, 5, "subtract"));  
console.log(safeCalculator(10, 5, "multiply"));  
console.log(safeCalculator(10, 5, "divide"));  