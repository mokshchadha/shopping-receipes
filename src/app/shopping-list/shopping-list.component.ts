import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientsChangeSubscription: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.ingredientsChangeSubscription =
      this.slService.ingredintsChanged.subscribe((igs: Ingredient[]) => {
        this.ingredients = igs;
      });
  }

  ngOnDestroy(): void {
    this.ingredientsChangeSubscription.unsubscribe();
  }
}
