import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
text!:string
  transform(value: any, input: string): any {
    if (input) {
      
      // console.log('Input' + input);
       return value.filter((val:any) =>
       {
         if (!('error' in val))
         {
          //  console.log(val);
          this.text = input[0].toUpperCase() + input.slice(1);
          return val.name.startsWith(this.text) || val.name == this.text;
         }
       });
     } else {
       return value;
     }

}
}
