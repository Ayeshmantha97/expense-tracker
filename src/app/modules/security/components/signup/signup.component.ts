import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private afAuth: AngularFireAuth) {
  }
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    fullName: new FormControl('',[Validators.required,])
  })
  signUpWithEmail(){
    let email = this.loginForm.get('email')?.value;
    let pw = this.loginForm.get('password')?.value;
    let userName = this.loginForm.get('fullName')?.value;

    this.afAuth.createUserWithEmailAndPassword(email!, pw!).then(response =>{
              console.log(response);
          } )
  }

}
