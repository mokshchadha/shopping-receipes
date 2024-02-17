import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [],
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private recipeSelctedSubscripton: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeSelctedSubscripton = this.recipeService.recipeSelected.subscribe(
      (r: Recipe) => {
        this.selectedRecipe = r;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeSelctedSubscripton.unsubscribe();
  }
}
