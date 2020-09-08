import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {//

    mostrar=true; //Boton mostrar o ocultar

    frase: any={
        mensaje: 'Esto es autor',
        autor: 'Esto es mensaje'
    };

    //En base a arreglos trabaja
    personajes: string[] = ['daniel','venon', 'otroenemigo'];

}