import {Pipe, PipeTransform} from '@angular/core';
import {Park} from './models/park.model';

@Pipe ({
  name: 'filter',
  pure: false
})

// Set this to false for now. By setting pure to true, our pipe becomes stateless. This means it transforms input to output but doesn't do anything else or store any information until we explicitly tell it to.


export class FilterPipe implements PipeTransform {
  transform(list: Park[]){



    // var output: Park[] = [];
    // for (var i = 0; i < input.length; i++) {
    //   if (input[i].done === false) {
    //     output.push(input[i]);
    //   }
    // }
    // return output;
  }
}
