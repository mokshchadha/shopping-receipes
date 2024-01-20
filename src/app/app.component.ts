import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test';
  loadedFeature = 'recipe';

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
