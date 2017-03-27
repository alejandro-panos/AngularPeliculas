import {Injectable} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PELICULAS} from "./mock.peliculas";

@Injectable()
export class PeliculasService{
    private pelicula:Pelicula;
    getPeliculas(){
        return PELICULAS;
    }

    insertPelicula(pelicula:Pelicula){
        Promise.resolve(PELICULAS).then((peliculas: Pelicula[]) => peliculas.push(pelicula));
    }
}
