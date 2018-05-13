


  var defaultEng = Google;
  var currEng = defaultEng;
  var logo =  document.querySelector("i").classList;
  var input = document.querySelector("input");
  var form = document.querySelector("form");
  
  function setEngine(obj) {
    oldEng = currEng;
    currEng = obj;
    document.getElementById("buttons").innerHTML = null;
    for(i=0; i<obj.links.length ; i++){
        document.getElementById("buttons").innerHTML += '<button class="btn">' + obj.links[i].name + '</button>';
    }
    
    form.action = currEng.url;
    input.placeholder = currEng.ph;  
    window.location.hash = "#" + currEng.name;
    input.name = currEng.query;
    form.method = "";

    logo.remove(oldEng.icon);
    logo.add(currEng.icon);
    
    console.log("Obj set from " + oldEng.name + " to " + currEng.name + ", " + i + " buttons added from " + currEng.links.length + " links.");
    
  }


  function getHash(){
    hash = window.location.hash;
    
    lookup = {    //Lookup chart of all search engines
    	'#google': Google,
	    '#reddit': Reddit,
      '#facebook': Facebook,
      '#youtube': Youtube,
      
    
    }

    return lookup[hash];
  
  }
  function setEngineToUrl(){
    if(window.location.hash){
    var tempObj = getHash();

    setEngine(tempObj);

    }else{
      setEngine(defaultEng);
    }
  }
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
  function nextSearchEngine() {

    if(currEng == Google){
      setEngine(Reddit);
    }else if(currEng == Reddit){
      setEngine(Google);

    }
  }

  function darkMode() {
    var pref = document.body.classList;
    var input = document.querySelector("input").classList;
    var logo =  document.querySelector("i").classList;
    var btns = document.getElementById("buttons").classList;
    if (!(pref.contains("dark"))) {
      pref.add("dark");
      input.add("dark");
      logo.add("dark");
      btns.add("dark");
    } else {
      pref.remove("dark");
      input.remove("dark");
      logo.remove("dark");
      btns.remove("dark");
    }
  }

  setEngineToUrl();
//document.getElementById("wp").style.backgroundImage = "url('wp" + Math.floor(Math.random() * 6 + 1) +".jpg')"
