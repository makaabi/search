import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  onAccueil()
  {
    this.router.navigate(['/affichage']);
  }

  submit:boolean=false;

  
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
