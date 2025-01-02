//*******************************************************************************************************************************
//
// PROJECT:   AMSTERDAM TREES
// UPDATED:   18-9-2022
// ABOUT:     Main code for the cordova android app.
//            PLUGINS
//            cordova-plugin-screen-orientation: keep the device in landscape
//            cordova-plugin-geolocation: to get the lon an lat of the user
//            cordova-plugin-insomnia:
//            org.urbanstew.cordova.pd: pd for cordova!
//            JAVASCRIPT LIBRARIES
//            Leaflet.js is used to load custom tiles from knooiwark.com
//            Turf.js is also use for some difficult geo math..
//            Velocity.js is used for animations
//            a php script is used to retrieve trees data from a mysql database from knooiwark.com
//            pureData for Cordova plugin is used for the sonification
//
//*******************************************************************************************************************************

// SPLASH
var splash;
var titleTrees;
var titleAmsterdam;
var tapToContinue;

// MAINMENU
var mainMenu;
var startButton;
var aboutButton;
var creditsButton;

// WARNINGSCREEN
var warningScreen;
var backButtonWarning;

var buttonsScreen;
var creditsScreen;
var aboutScreen;
var optionsScreen;
var backButtonAbout;
var backButtonCredits;
var backButtonOptions;

// OPTIONS
var storage = window.localStorage;
var soundCheckbox;
var soundOn;
var soundInitChanged;

var modeRadioButtons;
var modeActive;
var modeInitChanged;

const MODE_ACOUSTIC = 0;
const MODE_AEOLIAN = 1;
const MODE_ADONAI_MALAKH = 2;
const MODE_BYZANTINE = 3;
const MODE_DOUBLE_HARMONIC = 4;
const MODE_ENIGMATIC = 5;
const MODE_AVAHA_RABA = 6;
const MODE_GYPSY = 7;
const MODE_ISTRIAN = 8;
const MODE_NEAPOLITAN = 9;
const MODE_UKRAINIAN_DORIAN = 10;
const MODE_WHOLE_TONE = 11;

var menuState;
var appState;
var showStarted = false;
var soundTimeout;

// MENU STATES
const MENU_STATE_MAIN = 0;
const MENU_STATE_LEAVING_MAIN = 1;
const MENU_STATE_ABOUT = 2;
const MENU_STATE_CREDITS = 3;
const MENU_STATE_OPTIONS = 4;

// APP STATES
const APP_STATE_SPLASH = 0;
const APP_STATE_MAIN = 1;
const APP_STATE_MAP = 2;
const APP_STATE_PLAYING = 3;
const APP_STATE_IN_MENU = 4;

var buttonDown = false;

// USER
var user;
var userReady = false;
var userPosition;
var userPositionKnown = false;
var userLatLon;
var userOldLatLon;
var watchID;
var lat;
var lon;
var accuracy;

var map;
var mapDiv;
var request;
var popupOpen = false;

// TREE DATA
var treeData;             // object returned from httprequest containing the tree data from the database
var treeDataReady = false;
var treeLatLons = [];      // seperate array holding the latlongs of the trees
var treePoints = [];
var trees = [];           // leaflet cirle array for showing trees on the map
var treeIds = [];

// PURE DATA INPUT
var loopStarted;
var rootOffset;
var chord= [];
var chordRoot;
var chordString;
var melodyLoop;
var melodyStarted;
var chordCounter;

var pitches = [];
var pitchesString;

var soundscapeTimeout;
var updateLoopTimeout;

var bearings = [];
var ages = [];
var panningsLeft = [];
var panningsLeftString;

// DATE FOR RETRIEVE TREE AGES
var date = new Date();
var currentYear = date.getFullYear();

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){

  screen.orientation.lock('portrait');
  window.plugins.insomnia.keepAwake();
  //window.plugins.insomnia.allowSleepAgain();

  splash = document.getElementById('splash');
  titleTrees = document.getElementById('title-trees');
  titleAmsterdam = document.getElementById('title-amsterdam');
  tapToContinue = document.getElementById('tap-to-continue');

  mainMenu = document.getElementById('main-menu');
  buttonsScreen = document.getElementById('buttons-screen');
  startButton = document.getElementById('start-button');
  aboutButton = document.getElementById('about-button');
  creditsButton = document.getElementById('credits-button');
  optionsButton = document.getElementById('options-button');

  aboutScreen = document.getElementById('about-screen');
  creditsScreen = document.getElementById('credits-screen');
  optionsScreen = document.getElementById('options-screen');
  backButtonAbout = document.getElementById('back-button-about');
  backButtonCredits = document.getElementById('back-button-credits');
  backButtonOptions = document.getElementById('back-button-options');

  soundCheckbox = document.getElementById('checkbox-sound');
  modeRadioButtons = document.getElementsByName('radio');

  mapDiv = document.getElementById('mapDiv');
  mapDiv.addEventListener('touchstart', function(){
    buttonDown = true;
  })
  mapDiv.addEventListener('touchend', function(){
    buttonDown = false;
  })

  startButton.addEventListener('click', startTheShow);
  aboutButton.addEventListener('click', function(){updateMenu(MENU_STATE_ABOUT);});
  creditsButton.addEventListener('click', function(){updateMenu(MENU_STATE_CREDITS);});
  optionsButton.addEventListener('click', function(){updateMenu(MENU_STATE_OPTIONS)});
  backButtonAbout.addEventListener('click', backToMain);
  backButtonCredits.addEventListener('click', backToMain);
  backButtonOptions.addEventListener('click', backToMain);

  // Generic Android Eventlisteners
  document.addEventListener('pause', onPause, false);
  document.addEventListener('resume', onResume, false);
  document.addEventListener("backbutton", onBackKeyDown, false);

  showSplash();
  loadOptions();
  initLocation();
}

function initLocation(){

  var onSuccess = function(position) {

    // check if user is in Amsterdam
    if (position.coords.longitude > 4.7713 && position.coords.longitude < 4.9936 && position.coords.latitude > 52.31779 && position.coords.latitude < 52.4239){

      lon = position.coords.longitude;
      lat = position.coords.latitude;
      watchPosition();

    } else {
      // put user in the Vondelpark
      lon = 4.868648;
      lat = 52.357994;
    }

    userLatLon = new L.LatLng(lat, lon);
    userOldLatLon = userLatLon;
    userPositionKnown = true;

  };

  function onError(error) {
    userPositionKnown = false;
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 30000, enableHighAccuracy: true});

}

function watchPosition(){

  var onSuccess = function (position) {

    lon = position.coords.longitude;
    lat = position.coords.latitude;

  };

  function onError(error){
    //alert('Oops...something went wrong with getting the location of your device');
  };
  watchID = navigator.geolocation.watchPosition(onSuccess, onError, {timeout: 3000, EnableHighAccuracy: true});
}

function endWatchPosition(){

  if(watchId !== undefined){
    clearWatch(watchID);
  }
}

function onPause(){

  deleteMap();
  trees.length = 0;
  mapDiv.style.height = 0;
  clearTimeout(soundscapeTimeout);
  window.plugins.pd.sendBang("stop");
}

function onResume(){

  if (appState === APP_STATE_MAP || appState === APP_STATE_PLAYING){
    showMainMenu();
  }
}

function onBackKeyDown() {

  if (appState === APP_STATE_MAP){

    deleteMap();
    trees.length = 0;
    mapDiv.style.height = 0;
    showMainMenu();
    clearTimeout(soundscapeTimeout);

  } else if (appState === APP_STATE_PLAYING){

    deleteMap();
    trees.length = 0;
    mapDiv.style.height = 0;
    melodyLoop.stop();
    updateLoop.stop();
    clearTimeout(updateLoopTimeout);

    window.plugins.pd.sendBang("stop");
    showMainMenu();

  } else if (appState === APP_STATE_IN_MENU){
      backToMain();

  } else {

    navigator.app.exitApp();
  }
}

function showSplash(){

  appState = APP_STATE_SPLASH;
  splash.addEventListener('click', hideSplashMenu);
  splash.velocity({
    p: { opacity: 1 },
    o: { duration: 3000}
  });
}

function hideSplashMenu(){

  splash.velocity({
    p: { opacity: 0 },
    o: { duration: 500 }
  })
  splash.velocity({
    p: { display: 'none'},
    o: { complete: function(){
      showMainMenu();
    }}
  });
}

function showMainMenu(){

  menuState = MENU_STATE_MAIN;
  appState = APP_STATE_MAIN;
  buttonDown = false;

  mainMenu.style.display = 'block';
  mainMenu.velocity({
   p: { opacity: 1},
   o: { duration: 250}
     });
}

function backToMain(){

  if (buttonDown === false){

    if (menuState === MENU_STATE_ABOUT){

      aboutButton.style.opacity = 1;
      backButtonAbout.style.opacity = 0.5;

      aboutScreen.velocity({
        p: { opacity: 0 },
        o: { delay: 100, duration: 250, complete: function(){
          aboutScreen.style.display = 'none';
          backButtonAbout.style.opacity = 1;
          showMainMenu();
        }}
      });

    } else if (menuState === MENU_STATE_CREDITS){

      creditsButton.style.opacity = 1;
      backButtonCredits.style.opacity = 0.5;

      creditsScreen.velocity({
        p: { opacity: 0 },
        o: { delay: 100, duration: 250, complete: function(){
          creditsScreen.style.display = 'none';
          backButtonCredits.style.opacity = 1;
          showMainMenu();
        }}
      });

    }  else if (menuState === MENU_STATE_OPTIONS){

      optionsButton.style.opacity = 1;
      backButtonOptions.style.opacity = 0.5;

      optionsScreen.velocity({
        p: { opacity: 0 },
        o: { delay: 100, duration: 250, complete: function(){
          optionsScreen.style.display = 'none';
          backButtonOptions.style.opacity = 1;
          showMainMenu();
        }}
      });
    }
  }
}

function updateMenu(s){

  menuState = MENU_STATE_LEAVING_MAIN;

  if (buttonDown ===  false){

    buttonDown = true;

    // Fadeout mainMenu
    mainMenu.velocity({
      p: {opacity: 0},
      o: {delay: 100, duration: 250, complete: function(){
        mainMenu.style.display = "none";
      }}
    });

    if (menuState === MENU_STATE_LEAVING_MAIN){

      if (s === MENU_STATE_ABOUT){

        aboutButton.style.opacity = 0.5;
        aboutScreen.style.display = 'block';
        aboutScreen.velocity({
          p: { opacity: 1},
          o: { delay: 350, duration: 250, complete: function(){
              buttonDown = false;
              menuState = MENU_STATE_ABOUT;
              appState = APP_STATE_IN_MENU;
          }}
        });

      } else if (s === MENU_STATE_CREDITS){

        creditsButton.style.opacity = 0.5;
        creditsScreen.style.display = 'block';
        creditsScreen.velocity({
          p: { opacity: 1},
          o: { delay: 350, duration: 250, complete: function(){
              buttonDown = false;
              menuState = MENU_STATE_CREDITS;
              appState = APP_STATE_IN_MENU;
          }}
        });

      } else if (s === MENU_STATE_OPTIONS){

        soundCheckbox.addEventListener('change', updateSoundOption);

        for (const mode of modeRadioButtons) {
          mode.addEventListener('change', updateModeOption);
        }

        optionsButton.style.opacity = 0.5;
        optionsScreen.style.display = 'block';
        optionsScreen.velocity({
          p: { opacity: 1},
          o: { delay: 350, duration: 250, complete: function(){
              buttonDown = false;
              menuState = MENU_STATE_OPTIONS;
              appState = APP_STATE_IN_MENU;
          }}
        });
      }
    }
  }
}

function loadOptions(){

  // No local storage, so app is starting for the first time -> set sound on and mode to aeolian
  if (storage.length === 0){

    storage.clear();

    storage.setItem('sound', 'on');
    storage.setItem('mode', 'aeolian');

    soundCheckbox.checked = true;
    modeRadioButtons[1].checked = true;   // aeolian as default
    modeActive = MODE_AEOLIAN;
    soundOn = true;

  // Readout the localstorage values
  } else {

    if (storage.getItem('sound') === 'on'){
      soundCheckbox.checked = true;
      soundOn = true;
    } else {
      soundCheckbox.checked = false;
      soundOn = false;
    }

    if (storage.getItem('mode') === 'acoustic'){
      modeRadioButtons[0].checked = true;
      modeActive = MODE_ACOUSTIC;
    } else if (storage.getItem('mode') === 'aeolian'){
      modeRadioButtons[1].checked = true;
      modeActive = MODE_AEOLIAN;
    } else if (storage.getItem('mode') === 'adonai'){
      modeRadioButtons[2].checked = true;
      modeActive = MODE_ADONAI_MALAKH;
    } else if (storage.getItem('mode') === 'byzantine'){
      modeRadioButtons[3].checked = true;
      modeActive = MODE_BYZANTINE;
    } else if (storage.getItem('mode') === 'doubleharmonic'){
      modeRadioButtons[4].checked = true;
      modeActive = MODE_DOUBLE_HARMONIC;
    } else if (storage.getItem('mode') === 'enigmatic'){
      modeRadioButtons[5].checked = true;
      modeActive = MODE_ENIGMATIC;
    } else if (storage.getItem('mode') === 'ahavaraba'){
      modeRadioButtons[6].checked = true;
      modeActive = MODE_AVAHA_RABA;
    } else if (storage.getItem('mode') === 'gypsy'){
      modeRadioButtons[7].checked = true;
      modeActive = MODE_GYPSY;
    } else if (storage.getItem('mode') === 'istrian'){
      modeRadioButtons[8].checked = true;
      modeActive = MODE_ISTRIAN;
    } else if (storage.getItem('mode') === 'neapolitan'){
      modeRadioButtons[9].checked = true;
      modeActive = MODE_NEAPOLITAN;
    } else if (storage.getItem('mode') === 'ukrainian'){
      modeRadioButtons[10].checked = true;
      modeActive = MODE_UKRAINIAN_DORIAN;
    } else if (storage.getItem('mode') === 'wholetone'){
      modeRadioButtons[11].checked = true;
      modeActive = MODE_WHOLE_TONE;
    }
  }
}

function updateSoundOption(){

    if (soundCheckbox.checked === true){
      storage.setItem('sound', 'on');
      soundOn = true;
    } else {
      storage.setItem('sound', 'off');
      soundOn = false;
    }
}

function updateModeOption(){

  if (modeRadioButtons[0].checked){
    storage.setItem('mode', 'acoustic');
    modeActive = MODE_ACOUSTIC;
  } else if (modeRadioButtons[1].checked){
    storage.setItem('mode', 'aeolian');
    modeActive = MODE_AEOLIAN;
  } else if (modeRadioButtons[2].checked){
    storage.setItem('mode', 'adonai');
    modeActive = MODE_ADONAI_MALAKH;
  } else if (modeRadioButtons[3].checked){
    storage.setItem('mode', 'byzantine');
    modeActive = MODE_BYZANTINE;
  } else if (modeRadioButtons[4].checked){
    storage.setItem('mode', 'doubleharmonic');
    modeActive = MODE_DOUBLE_HARMONIC;
  } else if (modeRadioButtons[5].checked){
    storage.setItem('mode', 'enigmatic');
    modeActive = MODE_ENIGMATIC;
  } else if (modeRadioButtons[6].checked){
    storage.setItem('mode', 'ahavaraba');
    modeActive = MODE_AVAHA_RABA;
  } else if (modeRadioButtons[7].checked){
    storage.setItem('mode', 'gypsy');
    modeActive = MODE_GYPSY;
  } else if (modeRadioButtons[8].checked){
    storage.setItem('mode', 'istrian');
    modeActive = MODE_ISTRIAN;
  } else if (modeRadioButtons[9].checked){
    storage.setItem('mode', 'neapolitan');
    modeActive = MODE_NEAPOLITAN;
  } else if (modeRadioButtons[10].checked){
    storage.setItem('mode', 'ukrainian');
    modeActive = MODE_UKRAINIAN_DORIAN;
  } else if (modeRadioButtons[11].checked){
    storage.setItem('mode', 'wholetone');
    modeActive = MODE_WHOLE_TONE;
  }
}

function startTheShow(){

   if (buttonDown ===  false){

    buttonDown = true;
    appState = APP_STATE_MAP;

    startButton.style.opacity = 0.5;

    mainMenu.velocity({
      p: { opacity: 0},
      o: { delay: 100, duration: 1000, complete: function(){
        mainMenu.style.display = 'none';
        buttonDown = false;
        startButton.style.opacity = 1;
      }}
    })

    if (userPositionKnown){

      // start the show
      mapDiv.velocity({
        p: {opacity: 1},
        o: {delay: 2000, duration: 1000, complete: function(){
          showStarted = true;
        }}
      })

      initMap();
      initUser();
      initTrees();

    } else {

      showWarningScreen();
    }
  }
}

function showWarningScreen(){

  // show warningScreen
  warningScreen = document.getElementById('warning-screen');
  backButtonWarning = document.getElementById('back-button-warning');
  backButtonWarning.addEventListener('click', function(){
    leaveWarningScreen();
  })

  warningScreen.style.display = 'block';
  warningScreen.velocity({
    p: { opacity: 1},
    o: { delay: 1000, duration: 1000}
  })

}

function leaveWarningScreen(){

  warningScreen.velocity({
    p: {opacity: 0},
    o: { duration: 1000, complete: function(){
      warningScreen.style.display = 'none';
      showMainMenu();
    }}
  })
}

function initMap(){

  mapDiv.style.height = '100vh';


  // Init the map of Amsterdam
  //var mapExtent = [4.465, 52.163, 5.347, 52.629];
  var mapExtent = [4.767, 52.290, 5.015, 52.427];
  var mapMinZoom = 12;
  var mapMaxZoom = 19;
  var bounds = new L.LatLngBounds(
    new L.LatLng(mapExtent[1], mapExtent[0]),
    new L.LatLng(mapExtent[3], mapExtent[2])
  );

  map = L.map('mapDiv', {
    //center: [52, 4],
    rotate: true,
    bearing: 0
  });

  var options = {
    minZoom: mapMinZoom,
    maxZoom: mapMaxZoom,
    opacity: 1.0,
    attribution: 'knooiwark',
    tms: false,
  };

  var layer = L.tileLayer('https://knooiwark.com/maptiles/dark/{z}/{x}/{y}.png', options).addTo(map);

  $('.leaflet-control-attribution').hide();
  $('.leaflet-control-container').hide();
}

function deleteMap(){

  $('#map').css("height", "0px");
  if (map !== undefined){
    map.remove();
  }
}

function initUser(){

    // Put the user on the map
    user = L.circle([lat, lon], {color: 'green', fillColor: 'green', opacity: 0.75,radius: 5}).addTo(map);
    //const pulsatingIcon = generatePulsatingMarker(16, 'green');
    //user = L.marker([lat, lon], {icon: pulsatingIcon}).addTo(map);

    userReady = true;

    // Is this Zoom in to user code?
    //userLatLon = user.getLatLng();
    var latLngs = [user.getLatLng()];
    var userBounds = L.latLngBounds(latLngs);
    map.fitBounds(userBounds);
    map.setZoom(17);
}

function updateUser(){

  userLatLon = new L.LatLng(lat, lon);
  user.setLatLng(userLatLon);

  if (buttonDown === false){

    for (var i = 0; i < trees.length; i++) {
      if (trees[i]._popup.isOpen()){
        popupOpen = true;
        break;
      }
      else{
        popupOpen = false;
      }
    }

    if (popupOpen === false){
      map.flyTo([lat, lon], map.getZoom());
    }

  }
}

function initTrees(){

  if (trees.length === 0){

    request = new XMLHttpRequest();
    request.open('GET', 'https://knooiwark.com/api/get_trees.php?lon=' + lon + '&lat=' + lat, true);
    request.onload = function() {

      // the returned data is ordered by nearest
      treeData = JSON.parse(request.response);

      for (var i = 0; i < treeData.length; i++) {

        // Trees
        var latTree = parseFloat(treeData[i]['lat']);
        var lonTree = parseFloat(treeData[i]['lon']);

        var plantYear = treeData[i]['plant_jaar'];
        var treeAge = currentYear - parseInt(plantYear);

        // workaround if tree plantyear is 0, then copy plantyear nearest tree
        if (parseInt(plantYear) > 0){
          ages[i] = treeAge;
        } else {
          if (i === 0){
            ages[i] = 57   // middle A
          } else {
          ages[i] = ages[i-1];    // copy age from nearest tree
          }
        }

        var r = 12 + (ages[i]/4);

        var tree = L.divIcon({
            iconSize: [r, r],
            iconAncor: [10, 10],
            popupAncor: [10, 10],
            className: 'tree treeId-' + i + ' ' + treeData[i]['categorie']
          })

        trees[i] = L.marker([latTree, lonTree], {icon: tree});
        trees[i].addTo(map);

        // Store the divIcons classnames for later animation
        treeIds[i] = document.getElementsByClassName('treeId-' + i);

        //trees[i] = L.circle([latTree, lonTree], {color: treeColor, fillColor: treeColor, opacity: 0.5, radius: r}).addTo(map);
        treeLatLons[i]=trees[i].getLatLng();

        // Popup tree information
        var info = "My name is " + treeData[i]['name_wts']  + ", I am " + treeAge + " years old. ";

        // TODO add link to wiki to get more info about the tree
        //var info = "My name is " + treeData[i]['name_wts']  + ", I am " + treeAge + " years old. " +  "<a href='https://www.knooiwark.com'>More info here</a>";
        trees[i].bindPopup(info);

        trees[i]._popup.options.keepInView = true;
      }

      treeDataReady = true;

      // Only sound if soundOption is set to on
      if (soundOn){

        rootOffset = parseInt(Math.random()*6)-3 ;
        getPitches(); // init first 12 pitches
        getPannings();  // init first 12 bearings

        // sent them to pd
        window.plugins.pd.sendList("pitches", pitchesString);
        window.plugins.pd.sendList("pannings", panningsLeftString);
        window.plugins.pd.sendList("chord", chordString);
        window.plugins.pd.sendBang("init");

        soundscapeTimeout = setTimeout(initSoundscape, 2000);

      } else {
        initJustYouAndTheTrees();
      }
    }
    request.send();
  }
}

function updateTrees(){

  if (Math.round(userLatLon.distanceTo(userOldLatLon) > 10)){

    userOldLatLon = userLatLon;

    request = new XMLHttpRequest();
    request.open('GET', 'https://knooiwark.com/api/get_trees.php?lon=' + lon + '&lat=' + lat, true);
    request.onload = function() {

      // the returned data is ordered by nearest
      treeData = JSON.parse(request.response);

      for (var i = 0; i < treeData.length; i++) {

        var latTree = parseFloat(treeData[i]['lat']);
        var lonTree = parseFloat(treeData[i]['lon']);
        var r = parseFloat(treeData[i]['hoogte_max']) / 2;
        var newLatLon = new L.LatLng(latTree, lonTree);

        trees[i].setLatLng(newLatLon);
        //trees[i].setStyle({fillColor: 'pink'});

        // Popup tree information
        var plantYear = treeData[i]['plant_jaar'];
        var treeAge = currentYear - parseInt(plantYear);
        var info = "My name is " + treeData[i]['name_wts']  + ", I am " + treeAge + " years old";
        trees[i].bindPopup(info);

        // workaround if tree plantyear is 0, then copy plantyear nearest tree
        if (parseInt(plantYear) > 0){
          ages[i] = treeAge;
        } else {
          if (i === 0){
            ages[i] = 57   // middle A
          } else {
          ages[i] = ages[i-1];    // copy age from nearest tree
          }
        }

        trees[i]._popup.options.keepInView = true;

      }
    }
    request.send();
  }

}

function initJustYouAndTheTrees(){

  setInterval(function(){
    updateUser();
    updateTrees();
  }, 2400)

}

function initSoundscape(){

  melodyStarted = false;
  chordCounter = 0;

  // animation - call animationIncrementLoop every 1200 millies (6 * 200)
  melodyLoop =  new Timer(() => { playMelodyLoop(); }, 1200);
  melodyLoop.start();


  // update data - call a bit later so there is time to retrieve and process the data without hickups (well that is the idea doing so...)
  setTimeout(function(){
    updateLoop = new Timer(()=> { updateMusicData();} , 1200);
    updateLoop.start();
  }, 200);
}

function playMelodyLoop(){

    // run these every 1200 millies
    //animationLoopA();       // trees 0 - 5
    animationLoopB();      // trees 6 - 11

  if (melodyStarted === false){

   appState = APP_STATE_PLAYING;
   window.plugins.pd.sendBang("start");
   melodyStarted = true;
  }
}

function animationLoopA(){

  // light note 1
  trees[0]._icon.classList.add("high-opacity");

  if (trees[0]._icon.classList.contains('low-opacity')){
    trees[0]._icon.classList.remove("low-opacity");
  }

  // dim note 6
   if (trees[5]._icon.classList.contains("high-opacity")){
     trees[5]._icon.classList.remove("high-opacity");
   }

  setTimeout(function(){

    // dim note 1
    trees[0]._icon.classList.remove("high-opacity");
    trees[0]._icon.classList.add("low-opacity");

    // light note 2
    trees[1]._icon.classList.add("high-opacity");
    trees[1]._icon.classList.remove("low-opacity");
  },200)

  setTimeout(function(){

    // dim note 2
    trees[1]._icon.classList.remove("high-opacity");
    trees[1]._icon.classList.add("low-opacity");

    // light note 3
    trees[2]._icon.classList.add("high-opacity");
    trees[2]._icon.classList.remove("low-opacity");
  },400)

  setTimeout(function(){

    // dim note 3
    trees[2]._icon.classList.remove("high-opacity");
    trees[2]._icon.classList.add("low-opacity");

    // light note 4
    trees[3]._icon.classList.add("high-opacity");
    trees[3]._icon.classList.remove("low-opacity");
  },600)

  setTimeout(function(){

    // dim note 4
    trees[3]._icon.classList.remove("high-opacity");
    trees[3]._icon.classList.add("low-opacity");

    // light note 5
    trees[4]._icon.classList.add("high-opacity");
    trees[4]._icon.classList.remove("low-opacity");
  },800)

  setTimeout(function(){

    // dim note 5
    trees[4]._icon.classList.remove("high-opacity");
    trees[4]._icon.classList.add("low-opacity");

    // light note 6
    trees[5]._icon.classList.add("high-opacity");
    trees[5]._icon.classList.remove("low-opacity");
  },1000)
}

function animationLoopB(){

  // light note 7
  trees[6]._icon.classList.add("high-opacity");

  if (trees[6]._icon.classList.contains('low-opacity')){
    trees[6]._icon.classList.remove("low-opacity");
  }

  // dim note 12
  if (trees[11]._icon.classList.contains("high-opacity")){
    trees[11]._icon.classList.remove("high-opacity");
  }

  setTimeout(function(){

    // dim note 7
    trees[6]._icon.classList.remove("high-opacity");
    trees[6]._icon.classList.add("low-opacity");

    // light note 8
    trees[7]._icon.classList.add("high-opacity");
    trees[7]._icon.classList.remove("low-opacity");

  },200);

  setTimeout(function(){

    // dim note 8
    trees[7]._icon.classList.remove("high-opacity");
    trees[7]._icon.classList.add("low-opacity");

    // light note 9
    trees[8]._icon.classList.add("high-opacity");
    trees[8]._icon.classList.remove("low-opacity");

  },400);

  setTimeout(function(){

    // dim note 9
    trees[8]._icon.classList.remove("high-opacity");
    trees[8]._icon.classList.add("low-opacity");

    // light note 10
    trees[9]._icon.classList.add("high-opacity");
    trees[9]._icon.classList.remove("low-opacity");

  },600);

  setTimeout(function(){

    // dim note 10
    trees[9]._icon.classList.remove("high-opacity");
    trees[9]._icon.classList.add("low-opacity");

    // light note 11
    trees[10]._icon.classList.add("high-opacity");
    trees[10]._icon.classList.remove("low-opacity");

  },800);

  setTimeout(function(){

    // dim note 4
    trees[10]._icon.classList.remove("high-opacity");
    trees[10]._icon.classList.add("low-opacity");

    // light note 6
    trees[11]._icon.classList.add("high-opacity");
    trees[11]._icon.classList.remove("low-opacity");

  },1000);
}

function updateMusicData(){

  updateUser();
  updateTrees();
  getPitches();
  getPannings();

  // set the chord notes
  if (chordCounter < 25){

    if (chordCounter === 12 ){
      window.plugins.pd.sendList("chordNotes", chordString);
    } else if (chordCounter === 13) {
      window.plugins.pd.sendBang('playChord');
    }
    chordCounter++;
  } else {
    chordCounter = 0;
  }



  window.plugins.pd.sendList("pitches", pitchesString);
  window.plugins.pd.sendList("pannings", panningsLeftString);
}

function Timer(callback, timeInterval){

  this.timeInterval = timeInterval;

  this.start = () => {
    // Set expected time
    this.expected = Date.now() + this.timeInterval;
    this.timeout = setTimeout(this.loop, this.timeInterval);
  }

  this.stop = () =>{
    clearTimeout(this.timeout);

  }
  this.loop = () => {
    var drift = Date.now() - this.expected;
    callback();
    this.expected += this.timeInterval;
    this.timeout = setTimeout(this.loop, this.timeInterval - drift);
  }
}

function getPannings(){

  for (var i = 0; i < 12; i++) {

    var latTree = parseFloat(treeData[i]['lat']);
    var lonTree = parseFloat(treeData[i]['lon']);

    var point1 = turf.point([lon, lat]);
    var point2 = turf.point([lonTree, latTree]);

    bearings[i] = turf.bearing(point1, point2);
    panningsLeft[i] = scale(bearings[i]);
    panningsLeftString = panningsLeft.join(' ');
  }
}


function scale (bear) {

  // returns the % left in the stereo field
  // right to calculate in pd (100 - left)

  if (bear >= 0 && bear <= 90 ){
    return Math.round(100 - (bear * 50 / 90 + 50));
  }
  else if (bear > 90 && bear <= 180 ){
    return Math.round((bear * 50 / 90) - 50);
  }

  if (bear < 0 && bear >= -90 ){
    return Math.round(100 - (bear * 50 / 90 + 50));
  }
  else if (bear < -90 & bear >= -180) {
    return Math.round(-(bear * 50 / 90));
  }
  //return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
