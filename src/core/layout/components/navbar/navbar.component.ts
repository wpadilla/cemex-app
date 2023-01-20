import { Component } from '@angular/core';
import { verticalSlideAnimation} from "../../../../shared/animations/common.animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    verticalSlideAnimation,
  ]
})
export class NavbarComponent {

}
