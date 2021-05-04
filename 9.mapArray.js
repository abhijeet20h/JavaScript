var items1 = ["chair", "bench" ,"pad", "laptop"];
console.log(items1);

var items2 = items1.map(function(item){
	return item + "  is mapped !!"
})

console.log(items2)