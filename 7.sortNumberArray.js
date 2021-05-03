var numbers = [2, 4, 10, 12, 1, 3]

// Sort in Ascending Order
numbers.sort(function(a,b){
	return a -b;
})

console.log(numbers)

//sort in Decending Order
numbers.sort(function(a, b){
	return b-a;
})

console.log(numbers)