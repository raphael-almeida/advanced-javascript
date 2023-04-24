//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if(item) {
        // causes stack overflow
        // removeItemsFromList();
        
        // avoid stack overflow
        setTimeout(removeItemsFromList, 0);
        
    }
    else {
        console.log('end', new Date());
    }
}

console.log('start', new Date());
removeItemsFromList();
console.log(list);
