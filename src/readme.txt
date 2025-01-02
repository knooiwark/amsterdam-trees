Basically you need 3 tools to compile and edit the app code:

cordova - https://cordova.apache.org/
android studio - https://developer.android.com/studio
pd - https://puredata.info/

The app also some need cordova plugins:

https://www.npmjs.com/package/cordova-plugin-device-orientation
https://www.npmjs.com/package/cordova-plugin-geolocation
https://www.npmjs.com/search?q=cordova-plugin-insomnia
https://www.npmjs.com/package/org.urbanstew.cordova.pd

IMPORTANT!
--------------------------------------------------
There is also a server side required for this app. Currently this is all still there on a knooiwark server. Basically this is it:

- A query returning data from the http request
- a MySQL database with the tree data (about 300.000 trees). Do note this dataset is not up to date anymore. Get the latest dataset here: https://api.data.amsterdam.nl/v1/docs/datasets/bomen.html)
- a lot of maptiles in png format which are retrieved by the leaflet.js to render the city map background image

Please feel free to contact me if you would like to get in touch if you would like more info/details about the serverside implementation. 

Cheers!




