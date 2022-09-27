// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(catName){
    const newCatsArray = [...cats,catName];
    //newCatsArray.push(catName);
    return newCatsArray;
}
function prependCat(catName) {
    const newCatsArray = [catName,...cats];
    //newCatsArray.unshift(catName);
    return newCatsArray;
}
function removeLastCat() {
    const newCatsArray = [...cats];
    newCatsArray.pop();
    return newCatsArray;
}
function removeFirstCat() {
    const newCatsArray = [...cats];
    newCatsArray.shift();
    return newCatsArray;
}