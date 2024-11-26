import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SvgRocketLaunchIcon } from '@semantic-components/heroicons/24/solid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgRocketLaunchIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app-angular-17-1-0';
}
