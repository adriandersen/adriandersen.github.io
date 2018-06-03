
  var defaultEng = Google;
  var currEng = defaultEng;
  var logo =  document.querySelector("i").classList;
  var input = document.querySelector("input");
  var form = document.querySelector("form");
  

  //Changes all required things when changing search-engine
  function setEngine(obj) {
    oldEng = currEng;
    currEng = obj;
    document.getElementById("buttons").innerHTML = null;
    for(i=0; i<currEng.links.length ; i++){
        document.getElementById("buttons").innerHTML += '<a class="btn" href="' + currEng.links[i].url + '">' + obj.links[i].name + '</a>\n';
        if(!(i%5) && i!=0){
          //document.getElementById("buttons").innerHTML += '<br><br><br>';
        }
    }
    
    //form.action = currEng.url;
    console.log(form.action);
    input.placeholder = currEng.ph;  
    window.location.hash = "#" + currEng.name;
    input.name = currEng.query;
    form.method = currEng.method;
    
    logo.remove(oldEng.icon);
    logo.add(currEng.icon);
    //DEBUG
    console.log("OBJ SET: " + oldEng.name + " -> " + currEng.name + " ~~ " + i + "/" + currEng.links.length + " buttons added.");
    //DEBUG
  }
  
  //Runs when form is submitted
  function doSearch(){
    window.location = (currEng.url+currEng.query+input.value);
    return false;
  }

  //Returns the Hash in the URL
  function getHash(){


    

    hash = window.location.hash;
    
    lookup = {    //Lookup chart of all search engines
    	'#google': Google,
	    '#reddit': Reddit,
      '#facebook': Facebook,
      '#youtube': Youtube,
      
    
    }

    return lookup[hash];

    //DEBUG
    console.log("HASH: " + hash.name);
    //DEBUG
  
  }

  //Uses getHash to change the engine
  function setEngineToUrl(){
    if(window.location.hash){
    var tempObj = getHash();

    setEngine(tempObj);

    //DEBUG
    console.log("ENGINE SET: " + tempObj.name);
    //DEBUG

    }else{
      setEngine(defaultEng);
    }
      
  
  }

  //Button-function
  function howTo() {
    if(logo.contains("blur")){
      logo.remove("blur");

      form.classList.remove("blur");
      input.classList.remove("blur");
      helpText.style.visibility = "hidden";
    }else{
      logo.add("blur");
      form.classList.add("blur");
      input.classList.add("blur");
      helpText.style.visibility = "visible";
    }
  }

  //Button-function
  function nextSearchEngine() {
    // THIS HAS TO BE CLEANED UP
    // WHAT A HORRIBLE WAY TO DO THIS

    if(currEng == Google){
      setEngine(Reddit);
    }else if(currEng == Reddit){
      setEngine(Youtube);
    }else if(currEng == Youtube){
      setEngine(Google);

    }
  }
	function darkMode(mode) {


    var pref = document.body.classList;
    var input = document.querySelector("input").classList;
    var logo =  document.querySelector("i").classList;
    var btns = document.getElementById("buttons").classList;
    
	  
    if(mode) {

      pref.add("dark");

    } else {

      pref.remove("dark");

    }


  }

  //Button-function
  function toggleDarkMode() {
    if (!(document.body.classList.contains("dark"))) {
      darkMode(true);
    }else{
      darkMode(false);
    }

    
  }


  setEngineToUrl();

