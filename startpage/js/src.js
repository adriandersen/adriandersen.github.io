currArr = obj;
let objectElement = document.getElementById("objects");
//printObjectTree();

printObjects(currArr, objectElement);
document.addEventListener("keypress", event => {
    console.log(event.key);
    if (event.key == "Escape" || event.key == ".") {
        currArr = obj;
        
        printObjects(currArr, objectElement);
    }
    if (currArr) {
        currArr.forEach(item => {
            if (item.short == event.key) {
                console.log(item.name + "First Level Hit!");
                if (item.links) { 
                    //If the item has second-level
                    currArr = item.links; //traverse to the "second level"
                    item.links.forEach(item => {
                        console.log(item.name + "(" + item.short + ")  -  " + item.url)

                    });

                    printObjects(item.links, objectElement);
                } else { 
                    //if there is no more levels
                    window.location.href = item.url;

                }
            }
        });
    }
});

function printObjects(links, element){

    clearChildren(element);
    

    links.forEach(item => {

        var n = document.createElement("p");
        n.appendChild(document.createTextNode(item.name))
        element.appendChild(n);
    });

} 

function clearChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}