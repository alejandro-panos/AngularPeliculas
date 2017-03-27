import {Component, OnInit} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from "../services/peliculas.service";
import {Router, RouteParams} from "angular2/router";

@Component({
    selector: "crear-pelicula",
    templateUrl: "app/view/crear-pelicula.html",
    providers: [PeliculasService]
      
})

export class CrearPeliculaComponent implements OnInit {
    public tituloPelicula = "";
    public nuevaPelicula:Pelicula;
    
    constructor(private peliculasService:PeliculasService, private router:Router, private routeParams:RouteParams){}
   
       ngOnInit():any {
            this.tituloPelicula = this.routeParams.get("titulo");
            this.nuevaPelicula = new Pelicula(0,this.routeParams.get("titulo"),this.routeParams.get("director"),this.routeParams.get("anyo") );
        }
        
   onSubmit(){
       
       this.peliculasService.insertPelicula(this.nuevaPelicula);

       this.router.navigate(['Peliculas']);

      
   }
    
}