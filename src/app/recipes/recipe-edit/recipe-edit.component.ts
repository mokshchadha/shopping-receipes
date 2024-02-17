import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode = false;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((p: Params) => {
      this.id = parseInt(p.id);
      this.isEditMode = p.id != null;
    });
  }
}
