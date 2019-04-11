
var defaultEng = Google;
var currEng = defaultEng;
var logo = document.querySelector("i").classList;
var input = document.querySelector("input");
var form = document.querySelector("form");
var curr = 0;



var InputElement = document.getElementById("input");
InputElement.addEventListener("touchforcechange", enterInputForceChange, false);
var InputElement = document.getElementById("input");
InputElement.addEventListener("webkitmouseforcedown", enterInputForceClick, false);
var LogoElement = document.getElementById("logo");
LogoElement.addEventListener("mousedown", nextSearchEngine, false);

//Changes all required things when changing search-engine
function setEngine(obj) {
  oldEng = currEng;
  currEng = obj;
  document.getElementById("buttons").innerHTML = null;
  for (i = 0; i < currEng.links.length; i++) {
    document.getElementById("buttons").innerHTML += '<a class="btn" href="' + currEng.links[i].url + '">' + obj.links[i].name + '</a>\n';
    if (!(i % 5) && i != 0) {
      //document.getElementById("buttons").innerHTML += '<br><br><br>';
    }
  }

  //form.action = currEng.url;
  console.log(form.action);
  input.placeholder = currEng.ph;
  //window.location. = "?engine=" + currEng.name;
  input.name = currEng.query;
  form.method = currEng.method;

  logo.remove(oldEng.icon);
  logo.add(currEng.icon);
  //DEBUG
  console.log("OBJ SET: " + oldEng.name + " -> " + currEng.name + " ~~ " + i + "/" + currEng.links.length + " buttons added.");
  //DEBUG

  for (var i = 0; i < objects.length; i++) {
    if (objects[i].name == currEng.name) {
      curr = i;
      //Sets curr to engines array-number, so that nextSearchEngine knows what comes next
    }
  }
}

//Runs when form is submitted
function doSearch() {
  window.location = (currEng.url + currEng.query + input.value);
  return false;
}


function initialize() {
  if (getQueryVariable("engine")) {
    var tempObj = lookupEngine();

    if (getQueryVariable("darkmode") == "true") {
      darkMode(true);
    } else {
      darkMode(false);
    }
    setEngine(tempObj);

    //DEBUG
    console.log("ENGINE SET: " + tempObj.name);
    //DEBUG

  } else {
    setEngine(defaultEng);
  }


}

//Button-function
function howTo() {
  if (logo.contains("blur")) {
    logo.remove("blur");

    form.classList.remove("blur");
    input.classList.remove("blur");
    helpText.style.visibility = "hidden";
  } else {
    logo.add("blur");
    form.classList.add("blur");
    input.classList.add("blur");
    helpText.style.visibility = "visible";
  }
}

//Force Touch
function enterInputForceClick(event) {
  toggleDarkMode();
  console.log(event);
  if (event.shiftKey) {
    console.log("shift");
  }
}
function enterInputForceChange(event){
  console.log(event);
  if(event.changedTouches[0].force > 1){
    toggleDarkMode();
  }

}

function enterLogoForceClick(event) {
  nextSearchEngine();
  console.log(event);


}
//Button-function
function nextSearchEngine(event) {
  /*
    //We should first check the current engine here
    
  */


  /*if (event.shiftKey) {
    if (curr < objects.length) {
      if (curr > 0) {
        setEngine(objects[--curr]);
        console.log(objects.length);
        console.log(curr);
      } else {
        curr = objects.length;
        setEngine(objects[curr]);
      }
    } else {
      console.log("critical error")
    }

  } else */{
    //Sets engine to the next object in objects.js
    if (curr < objects.length) {
      if (curr < (objects.length) - 1) {
        setEngine(objects[++curr]);
        console.log(objects.length);
        console.log(curr);
      } else {
        curr = 0;
        setEngine(objects[curr]);
      }
    } else {
      console.log("critical error")
    }
  }
}
function darkMode(mode) {


  var pref = document.body.classList;



  if (mode) {

    pref.add("dark");

  } else {

    pref.remove("dark");

  }


}

//Button-function //SLÅ SAMMEN med funksjon over
function toggleDarkMode() {
  if (!(document.body.classList.contains("dark"))) {
    darkMode(true);
  } else {
    darkMode(false);
  }


}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);


}
console.log(getQueryVariable("engine"));
console.log(getQueryVariable("darkmode"));

function lookupEngine() {

  eng = getQueryVariable("engine");

  lookup = {

  }

  for (var i = 0; i < objects.length; i++) {
    lookup[objects[i].name] = objects[i];
    //Loops through every object name, and links it to the object with that name
  }
  return lookup[eng];

  //DEBUG
  console.log("HASH: " + hash.name);
  //DEBUG

}


initialize();

