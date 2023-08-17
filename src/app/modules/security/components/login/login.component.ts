import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router,private afAuth: AngularFireAuth) {
  }
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  signInWithEmail(){
    let email = this.loginForm.get('email')?.value
    let pw = this.loginForm.get('password')?.value
    this.afAuth.signInWithEmailAndPassword(email!,pw!).then(response=>{
      this.router.navigateByUrl('/dashboard')
    })
  }
  loginWithGoogle(){
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
      .then(response =>{
        console.log(response)
        console.log("You are successfully login!!")
      }).catch(err =>{
      console.log(err)
    })
  }
}
