import { Input, Output, Component,EventEmitter  } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector:'custom-counter',
    templateUrl:'./../templates/custom.html'
})
export class CustomCounterComponent{
   name = "counter "; 
   counterValue = 0;
@Output() counterChange = new EventEmitter();
   @Input()
   get counter(){
       return this.counterValue;
   } 

   


   set counter(val){
       this.counterValue = val;
       this.counterChange.emit(this.counterValue);
   }
   decrement(){
       this.counter--;
   }
   increment(){
       this.counter++;

   }
}
