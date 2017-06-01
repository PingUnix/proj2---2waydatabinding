import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name1}}</h1>
    <input type="text" [(ngModel)] = "counterValue" > 
    <custom-counter [(counter)]="counterValue"></custom-counter>
    <p> counter value = {{counterValue}} </p>
  `,
})
export class AppComponent  { 
  
  name1 = 'Angular'; 
  counterValue = 10;
}
/*
 It has an internal counter property that is used to display the
  current counter value. In order to make this property two-way
   data bound, the first thing we have to do is to make it an 
   Input property. Let’s add the @Input() decorator:
   
 an @Output() event with the same name, plus the Change suffix.
  We want to emit that event, 
 whenever the value of the counter property changes. Let’s add 
 an @Output() property and emit the latest value in the setter
  interceptor:
*/