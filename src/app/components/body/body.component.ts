
import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    //*utilizado para ngIf
    mostrar:boolean = true;
    frase:any={
        autor:"Ben Parker",
        mensaje:"Un Gran Poder Conlleva Una Gran Resonsabilidad"
    };


    personaje:string[] = ["Spiderman", "Venom", "Octapus"];
}