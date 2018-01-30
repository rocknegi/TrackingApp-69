// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    //my firebase credentials dont steal them :/
      apiKey: "AIzaSyDbXZSiKbfHi07N1STvc6DiM6F_3F2J06o",
      authDomain: "trackingapp-69.firebaseapp.com",
      databaseURL: "https://trackingapp-69.firebaseio.com",
      projectId: "trackingapp-69",
      storageBucket: "trackingapp-69.appspot.com",
      messagingSenderId: "765454094072"
    
  }
};
