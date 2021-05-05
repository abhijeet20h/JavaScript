// Regular String Reversal
console.log("\n-----------Regular String Reversal-----------\n")
var sayHello = "hello";

function reverseWord(val){
	var result = ''
	for(var i = val.length -1; i >=0; i--){
		result += val[i]

	}
	return result;
}


console.log(reverseWord(sayHello))

// Even or Odd
console.log("\n-----------Even or Odd-----------\n")
function evenOrOdd(a){
	return a % 2 == 0
}

console.log(evenOrOdd(3)); //false
console.log(evenOrOdd(6)); //true
console.log(evenOrOdd(7)); //false

//Extension Extractor
console.log("\n-----------Extension Extractor-----------\n")
function extnExtractor(fileName){
	 return fileName.split(".").length > 1 ? fileName.split(".")[1] : false;
}

console.log(extnExtractor('resume.doc'));//doc
console.log(extnExtractor('bangalore.txt'));//txt
console.log(extnExtractor('notepad'));//false

// Reverse word in string
console.log("\n-----------Reverse word in string-----------\n")
function reverseMe(string){
	return string.split("").reverse().join("").split(" ").reverse().join(" ");

}
console.log(reverseMe("Hi my name is Uma")) //iH ym eman si amU

// Array Sum
console.log("\n-----------Array Sum-----------\n")
function arraySum(value){
	var result = 0;
	
	for(var i=0; i< value.length; i ++){
		if(typeof value[i] == "number"){
			result += value[i]
		}
		else if(Array.isArray(value[i]))
		{
			result += arraySum(value[i])
		}		
	}

	return result;
}

console.log(arraySum([1,2,3,4,5]));//15
console.log(arraySum([1,2,3,4,5,6,7,8,9,10]));//55
console.log(arraySum([1,2,'uma',3,4,5]));//15
console.log(arraySum([1,2,3,'uma',{'a':'ma'},4,5]));//15
console.log(arraySum([1,2,[[3],4],5]));//15


// Sum Array by calling a method on it
console.log("\n-----------Array Sum-----------\n")
Array.prototype.sum = function(){
	var result = 0;
	
	for(var i=0; i< this.length; i ++){
		if(typeof this[i] == "number"){
			result += this[i]
		}
		else if(this[i] instanceof Array)
		{
			result += arraySum(this[i])
		}		
	}

	return result;
}

var array1 =[1,2,3], 
	array2 =[4,6,7,5], 
	array3 =[1,2,3,4,5],
	array4 =[1,2,3,4,5,6,7,8,9,10],
	array5 =[1,2,'uma',3,4,5],
	array6 =[1,2,3,'uma',{'a':'ma'},4,5],
	array7 = [1,2,[[3],4],5]

console.log(array1.sum())//6;
console.log(array2.sum());//22
console.log(array3.sum())//15;
console.log(array4.sum());//55
console.log(array5.sum())//15;
console.log(array6.sum());//15
console.log(array7.sum())//15;
