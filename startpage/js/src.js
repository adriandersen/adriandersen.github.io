currArr = obj;
//printObjectTree();


document.addEventListener("keypress", event => {
    console.log(event.key);
    if (event.key == "Escape") {
        currArr = obj;
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
                } else { 
                    //if there is no more levels
                    window.location.href = item.url;

                }
            }
        });
    }
});

/* function printObjectTree(){
    currArr.forEach(item => {
        let n = document.createTextNode(item.name);
        document.getElementById("objects").appendChild(n);
    });

} */
