import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [PeliculasService]
   
    
})

export class PeliculasListComponent{
    public pelicula:Pelicula;
    public mostrarDatos:boolean;
    public peliculas;
    public peliculaElegida:Pelicula;
    public datoServicio;

    constructor(private peliculasService:PeliculasService){

        this.mostrarDatos = false;
        
        this.debug();

        this.peliculas = this.peliculasService.getPeliculas();

        this.pelicula = this.peliculas[0];
        this.peliculaElegida = this.peliculas[0];
    }

    debug(){
        console.log(this.pelicula);
    }

    onShowHide(value){
        this.mostrarDatos = value;
    }

    onCambiarPelicula(pelicula){
        this.pelicula=pelicula;
        this.peliculaElegida = pelicula;
    }
}