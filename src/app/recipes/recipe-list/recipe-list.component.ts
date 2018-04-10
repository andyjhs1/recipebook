import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes:Recipe[]=[
new Recipe('This is a Test','This is Test Description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH3zeK3hjqm3vKCuTKsKAYMSU5TDjA5F3FZVR3aDup3ViZnPArA'),new Recipe('This is a Test','This is Test Description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH3zeK3hjqm3vKCuTKsKAYMSU5TDjA5F3FZVR3aDup3ViZnPArA')
];
  constructor() { }

  ngOnInit() {
  }

}
