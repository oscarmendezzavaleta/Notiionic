import {Injectable} from '@angular/core';

@Injectable()
export class NotesService{
    notes=[
        {id:1,title:'Nota 1',description:'Descripcion de la Nota 1'},
        {id:2,title:'Nota 2',description:'Descripcion de la Nota 2'},
        {id:3,title:'Nota 3',description:'Descripcion de la Nota 3'}
      ];
      public getNotes(){
          return this.notes;
      }
}