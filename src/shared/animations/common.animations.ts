import {
  animate, style, trigger, transition,
} from '@angular/animations';

export const fadeInAnimate = animate('.3s {{delay}}', style({opacity: 1}));
export const fadeOutAnimate = animate('.3s {{delay}}', style({opacity: 0}));

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    fadeInAnimate,
  ], { params: { delay: '0s' }}),
  transition(':leave', [
    fadeOutAnimate
  ], { params: { delay: '0s' }}),
]);

export const verticalSlideAnimate = animate('{{duration}} {{delay}}', style({transform: 'translateY(0)', opacity: 1}));
export const verticalSlideOutAnimate = animate('{{duration}} {{delay}}', style({
  transform: 'translateY({{yPosition}})',
  opacity: '{{initialOpacity}}'
}));
export const verticalSlideAnimation = trigger('verticalSlide', [
  transition(':enter', [
    style({transform: 'translateY({{yPosition}})', opacity: '{{initialOpacity}}'}),
    verticalSlideAnimate,
  ], {params: {initialOpacity: 1, yPosition: '-30px', delay: '0s', duration: '.3s' }}),
  transition(':leave', [
    verticalSlideOutAnimate,
  ], {params: {initialOpacity: 1, yPosition: '-30px', delay: '0s', duration: '.3s' }}),
]);
