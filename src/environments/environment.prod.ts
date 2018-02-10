//as  "postinstall": "ng build --aot -prod" requires environment.prods.ts and ng serve requires environment.ts so copied its content here 
export const environment = {
  production: true, // true for prod 
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
