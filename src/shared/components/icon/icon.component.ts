import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { IAvailableIcons } from "../../../core/interfaces/icons";
import { fadeAnimation } from "../../animations/common.animations";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  animations: [
    fadeAnimation,
  ]
})
export class IconComponent implements OnInit, AfterViewInit {
  @Input() icon: any = 'person';
  @Input() iconClass?: string;
  rendered?: boolean;
  @ViewChild('customIcon') customIcon?: ElementRef<HTMLObjectElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.customIcon?.nativeElement) this.customIcon.nativeElement.data = `assets/icons/${this.icon}.svg`
    setTimeout(() => {
      this.rendered = true;
    }, 300)
  }
}
