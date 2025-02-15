// array,push, pop, parse, isNaN, typeof, switch, break, continue .....+ more

// array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Convert to number
let string = "10";
let number = parseInt(string);
console.log(number);

// Convert to string
let num = 10;
let str = num.toString();
console.log(str);

// Convert to boolean
let bool = Boolean(1);
console.log(bool);

// Push
let array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);

// Pop
let arry = [1, 2, 3, 4, 5];
arry.pop();
console.log(arry);

// Parse
let str1 = "10";
let str2 = "20";
let addstr = str1 + " " + str2;
console.log(addstr); 

// isNaN
let str3 = "10";
let str4 = "20";
let addstr1 = str3 + " " + str4;
console.log(addstr1);
console.log(isNaN(addstr1)); // Output: true

// typeof
let str5 = "10";
let str6 = "20";
let addstr2 = str5 + " " + str6;
console.log(addstr2);
console.log(typeof addstr2);

// Shift
let arra = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
arra.shift();
console.log(arra);

// Unshift
let arra1 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
arra1.unshift("Liton");

// Slice
let arra2 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
let arra3 = arra2.slice(1, 3);
console.log(arra3);

// Splice
let arra4 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
arra4.splice(1, 2, "Liton");
console.log(arra4);

// Concat
let arra5 = ["Sakib", "Tamim"];
let arra6 = ["Mushfiq", "Mahmudullah"];
let arra7 = arra5.concat(arra6);
console.log(arra7);

// Reverse
let arra8 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
arra8.reverse();
console.log(arra8);

// Sort
let arra9 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
arra9.sort();
console.log(arra9);

// Join
let arra10 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
let str7 = arra10.join(" ");
console.log(str7);

// split
let str8 = "Sakib, Tamim, Mushfiq, Mahmudullah";
let arra11 = str8.split(",");
console.log(arra11);

// indexOf
let arra12 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
let index = arra12.indexOf("Tamim");
console.log(index);

// lastIndexOf
let arra13 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
let lastIndex = arra13.lastIndexOf("Tamim");
console.log(lastIndex);

// includes
let arra14 = ["Sakib", "Tamim", "Mushfiq", "Mahmudullah"];
let isInclude = arra14.includes("Tamim");
console.log(isInclude);

// find
let arra15 = [10, 20, 30, 40, 50];
let find = arra15.find(function(item){
    return item > 30;
});
console.log(find);

// findIndex
let arra16 = [10, 20, 30, 40, 50];
let findIndex = arra16.findIndex(function(item){
    return item > 30;
});
console.log(findIndex);

// filter
let arra17 = [10, 20, 30, 40, 50];
let filter = arra17.filter(function(item){
    return item > 30;
});
console.log(filter);

// map
let arra18 = [10, 20, 30, 40, 50];
let map = arra18.map(function(item){
    return item * 2;
});
console.log(map);

// reduce
let arra19 = [10, 20, 30, 40, 50];
let reduce = arra19.reduce(function(acc, item){
    return acc + item;
});
console.log(reduce);

// some
let arra20 = [10, 20, 30, 40, 50];
let some = arra20.some(function(item){
    return item > 30;
});
console.log(some);

// replace
let str9 = "Sakib is a cricketer";
let replace = str9.replace("Sakib", "Tamim");
console.log(replace);

// trim
let str10 = "    Sakib is a cricketer    ";
let trim = str10.trim();
console.log(trim);

// UpperCase
let str11 = "sakib";
let upper = str11.toUpperCase();
console.log(upper);

// LowerCase
let str12 = "SAKIB";
let lower = str12.toLowerCase();
console.log(lower);

// Time
let time = new Date();
console.log(time);


// Object
let obj = {name: "Sakib", age: 22};
console.log(obj);

// Object key
let obj1 = {name: "Sakib", age: 22};

for(let key in obj1){
    console.log(key);
}

// Object value
let obj2 = {name: "Sakib", age: 22};

for(let key in obj2){
    console.log(obj2[key]);
}

// Object key and value
let obj3 = {name: "Sakib", age: 22};

for(let key in obj3){
    console.log(key + ": " + obj3[key]);
}

