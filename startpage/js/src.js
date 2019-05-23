
document.addEventListener("keypress", event => {

        if (obj) {
            if (obj.forEach(item => {
                if (item.short == event.key) {
                    
                    console.log(item.name + "First Level Hit!");
                    if (item.links) { //If the item has second-level
                        item.links.forEach(item => { console.log(item.name + "(" + item.short + ")  -  " + item.url) });
                        
                        
                    }
                }
            }));
        }
    
});