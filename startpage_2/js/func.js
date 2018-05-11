


  
  var currEng = Google;

  var logo =  document.querySelector("i").classList;
  var input = document.querySelector("input");
  var form = document.querySelector("form");
  
  function setEngine(obj) {
    currEng = obj;
    document.getElementById("buttons").innerHTML = null;
    for(i=0; i<obj.links.length ; i++){
        document.getElementById("buttons").innerHTML += '<button class="btn">' + obj.links[i].name + '</button>';
    }
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

    logo.remove("fa-google");
    logo.add(tempObj.icon);

    input.placeholder = tempObj.ph;   //Capitalize Word
    setEngine(tempObj);

    }else{
      //Set engine to Google
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
  function searchEngine() {

    if(logo.contains("fa-google")){
      setEngine(currEng = Reddit);
      logo.remove("fa-google");
      logo.add("fa-reddit");
      
      form.action = "https://reddit.com/r/" + input.value;
      input.placeholder = "Reddit Search";  
      window.location.hash = "#reddit";
      input.name = "";
      form.method = "";

/*
    }else if (logo.contains("fa-reddit")){

      logo.remove("fa-reddit");
      logo.add("fa-facebook");

      form.action = "https://facebook.com/search?";
      input.placeholder = "Facebook Search";
      window.location.hash = "#facebook";
      input.name = "q";


    }else if (logo.contains("fa-facebook")){

      logo.remove("fa-facebook");
      logo.add("fa-stack-overflow");

      form.action = "https://stackoverflow.com/search?";
      input.placeholder = "Stack Overflow Search";
      window.location.hash = "#stack-overflow";
      input.name = "q";


    }else if (logo.contains("fa-stack-overflow")){

      logo.remove("fa-stack-overflow");
      logo.add("fa-youtube");

      form.action = "https://www.youtube.com/results?";
      input.placeholder = "Youtube Search";
      window.location.hash = "#youtube";
      input.name = "search_query";


    }else if (logo.contains("fa-youtube")){

      logo.remove("fa-youtube");
      */

    }else if (logo.contains("fa-reddit")){
      
      setEngine(currEng = Google);
      logo.remove("fa-reddit");
      logo.add("fa-google");

      form.action = "https://google.com/search?";
      input.placeholder = "Google Search";
      window.location.hash = "#google";
      input.name = "q";


    }
    
  }

  function darkMode() {
    var pref = document.body.classList;
    var input = document.querySelector("input").classList;
    var logo =  document.querySelector("i").classList;

    if (!(pref.contains("dark"))) {
      pref.add("dark");
      input.add("dark");
      logo.add("dark");
    } else {
      pref.remove("dark");
      input.remove("dark");
      logo.remove("dark");
    }
  }

  setEngineToUrl();
//document.getElementById("wp").style.backgroundImage = "url('wp" + Math.floor(Math.random() * 6 + 1) +".jpg')"
