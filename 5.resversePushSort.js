var items = new Array("Van","Car", "Bus", "Flight")

//Reverse

items.reverse();
console.log(items);

// Push
items.push("Truck", "Lorry")
console.log(items);

//Sort
items.sort()
console.log(items)

// finally try displaying them in csv format
var str = items.join(",");
console.log(str);