System.register(["angular2/core", "../model/pelicula", "../services/peliculas.service", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1, peliculas_service_1, router_1;
    var CrearPeliculaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            },
            function (peliculas_service_1_1) {
                peliculas_service_1 = peliculas_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CrearPeliculaComponent = (function () {
                function CrearPeliculaComponent(peliculasService, router, routeParams) {
                    this.peliculasService = peliculasService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.tituloPelicula = "";
                }
                CrearPeliculaComponent.prototype.ngOnInit = function () {
                    this.tituloPelicula = this.routeParams.get("titulo");
                    this.nuevaPelicula = new pelicula_1.Pelicula(0, this.routeParams.get("titulo"), this.routeParams.get("director"), this.routeParams.get("anyo"));
                };
                CrearPeliculaComponent.prototype.onSubmit = function () {
                    this.peliculasService.insertPelicula(this.nuevaPelicula);
                    this.router.navigate(['Peliculas']);
                };
                CrearPeliculaComponent = __decorate([
                    core_1.Component({
                        selector: "crear-pelicula",
                        templateUrl: "app/view/crear-pelicula.html",
                        providers: [peliculas_service_1.PeliculasService]
                    }), 
                    __metadata('design:paramtypes', [peliculas_service_1.PeliculasService, router_1.Router, router_1.RouteParams])
                ], CrearPeliculaComponent);
                return CrearPeliculaComponent;
            }());
            exports_1("CrearPeliculaComponent", CrearPeliculaComponent);
        }
    }
});
//# sourceMappingURL=crear-pelicula.component.js.map