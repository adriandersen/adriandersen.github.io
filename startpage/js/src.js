console.log(obj[1]);


document.addEventListener("keypress", event => { 
    console.log(event.key);
    if(obj){
        if(obj.forEach( item => { 
            if (item.short == event.key){
                console.log("Hit!");
            }
        }));
    }

})