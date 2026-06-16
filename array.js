//  topic:1
// print many elements using loop in array insted of string.....
// let cricketers=["DHONI","VIRAT","ROHIT","YUVRAJ","RAHUL","JADEJA","GILL","BUMRAH"]
// for(let i=0;i<cricketers.length;i++){
//     console.log(cricketers[i])
// }
// use of FOR-OF;
// for(let player of cricketers){
    // console.log(player)
// }



// Q2.... Find the average marks  of the class with the given marks...

// let marks=[10,20,30,40,50,12,14]
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// avg=sum/marks.length;
// console.log(`the average  marks of the class is=${avg}`)




// Q3.....finds the price of the item by applying offer of 10%......

// let items=[200,250,300,350,400,450,500]

// let i=0;
// for(let val of items){
//     console.log(`item at the index ${i} is ${val}`)
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`valur after offer ${items[i]}`)
//     i++;
// }

// method 2 of question no 3.....
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log(items);


// array methods like push,pop,tostring....

// let fooditems=["potato","tomato","apple","litchi","banana"]
// push...
//  fooditems.push("grapes")
//  console.log(fooditems)
//  pop.....

//  fooditems.pop();
//  console.log(fooditems);

//  tostring....

//  console.log(fooditems.toString());

// concat means adding of two array .....

// let indplayers=["virat","dhoni","rohit"]
// let ausplayers=["smith","head","starc"]
// let engplayers=["root","buttler","archer"]

// let players=indplayers.concat(ausplayers,engplayers);
// console.log(players)

// shift and unshift just like push and pop.....

// indplayers.unshift("Bumrah");
// let players=indplayers.shift()
// console.log(players);

// slice method...

// let players=["dhoni","virat","rohit","bumrah","pandya"]
// console.log(players.slice(1,4))

// splice method... splice(startldx,delcount,newe(1,2,....))
// let arr=[1,2,3,4,5,6,7]
// arr.splice(2,2,10,20)



    