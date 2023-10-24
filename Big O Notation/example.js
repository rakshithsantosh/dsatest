//write a function to calculate the sum of all numbers from 1 to n 

function add(num){
    let total =0;
    for(let i=0;i<=num;i++){
        total = total +i;
    }
}

//in this example number of operations is bounded by a multiple of n O(n)

//for the same problem statement we can solve it in another way

function addition(num){
    return num * (num +1)/2;
}

//in this case there are only three operations irrespective of the num value so its O(1)

//if we have a nested loop Big O will be O(n*n) as we have n computations for n computations