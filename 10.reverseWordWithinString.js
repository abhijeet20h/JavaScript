var message = "Welcome Home Buddy";

// using split, reverse and join
var stringWithReversedWord = message.split("")
								   .reverse()
								   .join("")
								   .split(" ")
								   .reverse()
								   .join(" ")

console.log(stringWithReversedWord);

// using map

var stringWithReversedWordUsingMap = message.split(" ").map(function(item){
										return item.split("").reverse().join("")
									}).join(" ");

console.log(stringWithReversedWordUsingMap)


