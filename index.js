// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let cat = cats.slice()
    cat.push(name)
    return cat
}

function prependCat(){
    let altCats = cats.slice()
    altCats.unshift('Arnold')
    return altCats
}

function removeLastCat(){
    let myCats = cats.slice()
    myCats.pop()
    return myCats
}

function removeFirstCat(){
    let ourCats = cats.slice()
    ourCats.shift()
    return ourCats
}