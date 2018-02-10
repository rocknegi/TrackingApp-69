import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

constructor(private firebaseAuth: AngularFireAuth, private router: Router) { 
      this.user = firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      )
  }

  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
    )
}

logout() {
    this.firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }

    signInRegular(email, password) {
   
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
    
      
   }

   loginInWithEmail(email, password){
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
   }

}


  
