//=======================================================================================================================//
//===================================================SECCIÓN DE PÁGINA DISNEY==============================================//
//=======================================================================================================================//

// Función que filtra películas disney por género
function showDisneyMovies (genreDisney) { 
    disneyBase.innerHTML = ''; //limpiando div
    let finalData;  
        for (let i = 0; i<bestDisneyMovies.length; i++) {    
            fetch('http://www.omdbapi.com/?i='+bestDisneyMovies[i].imdbID+'&apikey=532b53fa')
            .then(res => res.json())
            .then(data => { // todos los elementos caen en data
            finalData = (data.Genre.includes(genreDisney)?data:'');// si dentro de la data.genero esta incluido el genero seleccionado se ejecutara si se cumple y si no quedara vacio
            if(finalData !== ''){ //si final data es distinto de vacio se muestra el resultado, es decir, que los resultados vacios no se muestran
                disneyBase.innerHTML +=`<div class="card text-center">
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active">Ficha de ${data.Title}</a>
                </li>
                </ul>
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                            <div class="align-left col-8">
                                <h3 class="align-left title-movie">${data.Title}</h3>
                                <p class="genre"><span class="bold">Género:</span> ${data.Genre}</p>
                                <div class="row"><p class="pink datos"><span class="bold">Año:</span> ${data.Year}</p>
                                <p class="pink datos"><span class="bold">Clasificación:</span> ${data.Rated}</p></div>
                                <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                <p><span class="bold">Idioma:</span> ${data.Language}</p>
                                <p><span class="bold">País:</span> ${data.Country}</p>
                                <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                <div class="pink"><p><span class="bold">Director:</span> ${data.Director}</p>
                                <p><span class="bold">Writer:</span> ${data.Writer}</p>
                                <p><span class="bold">Reparto:</span> ${data.Actors}</p></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                }
            })
        }
    };

// Función que filtra películas disney por rated
    function showDisneyMoviesForRated (ratedDisney) { 
        disneyBase.innerHTML = '';
        let finalData;  
            for (let i = 0; i<bestDisneyMovies.length; i++) {    
                fetch('http://www.omdbapi.com/?i='+bestDisneyMovies[i].imdbID+'&apikey=532b53fa')
                .then(res => res.json())
                .then(data => {
                finalData = (data.Rated.includes(ratedDisney)?data:'');
                if(finalData !== ''){
                    disneyBase.innerHTML +=`<div class="card text-center">
                    <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active">Ficha de ${data.Title}</a>
                    </li>
                    </ul>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                                <div class="align-left col-8">
                                    <h3 class="align-left title-movie">${data.Title}</h3>
                                    <p><span class="bold">Año:</span> ${data.Year}</p>
                                    <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                    <p><span class="bold">Género:</span> ${data.Genre}</p>
                                    <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                    <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                    <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                    }
                })
            }
        };

//=======================================================================================================================//
//===================================================SECCION DE PAGINA DREAMWORKS==============================================//
//=======================================================================================================================//

function showDreamworksMovies (genreDreamworks) { 
    dreamworksBase.innerHTML = '';
    let finalData;  
        for (let i = 0; i<bestDreamworksMovies.length; i++) {    
            fetch('http://www.omdbapi.com/?i='+bestDreamworksMovies[i].imdbID+'&apikey=532b53fa')
            .then(res => res.json())
            .then(data => {
            finalData = (data.Genre.includes(genreDreamworks)?data:'');
            if(finalData !== ''){
                dreamworksBase.innerHTML +=`<div class="card text-center">
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active">Ficha de ${data.Title}</a>
                </li>
                </ul>
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                            <div class="align-left col-8">
                                <h3 class="align-left title-movie">${data.Title}</h3>
                                <p><span class="bold">Año:</span> ${data.Year}</p>
                                <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                <p><span class="bold">Género:</span> ${data.Genre}</p>
                                <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                }
            })
        }
    };
    // Filtro películas dreamwork por rated
    function showDreamworkMoviesForRated (ratedDreamwork) { 
        dreamworksBase.innerHTML = '';
        let finalData;  
        for (let i = 0; i<bestDreamworksMovies.length; i++) {    
            fetch('http://www.omdbapi.com/?i='+bestDreamworksMovies[i].imdbID+'&apikey=532b53fa')
            .then(res => res.json())
            .then(data => {
            finalData = (data.Rated.includes(ratedDreamwork)?data:'');
            if(finalData !== ''){
                dreamworksBase.innerHTML +=`<div class="card text-center">
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link active">Ficha de ${data.Title}</a>
                </li>
                </ul>
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                            <div class="align-left col-8">
                                <h3 class="align-left title-movie">${data.Title}</h3>
                                <p><span class="bold">Año:</span> ${data.Year}</p>
                                <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                <p><span class="bold">Género:</span> ${data.Genre}</p>
                                <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                }
            })
        }
    };

//=======================================================================================================================//
//===================================================SECCIÓN DE PÁGINA PIXAR==============================================//
//=======================================================================================================================//

function showPixarMovies (genrePixar) { 
    pixarBase.innerHTML = '';
    let finalData;  
        for (let i = 0; i<bestPixarMovies.length; i++) {    
            fetch('http://www.omdbapi.com/?i='+bestPixarMovies[i].imdbID+'&apikey=532b53fa')
            .then(res => res.json())
            .then(data => {
            finalData = (data.Genre.includes(genrePixar)?data:'');
                if(finalData !== ''){
                    pixarBase.innerHTML +=`<div class="card text-center">
                    <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active">Ficha de ${data.Title}</a>
                    </li>
                    </ul>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                                <div class="align-left col-8">
                                    <h3 class="align-left title-movie">${data.Title}</h3>
                                    <p><span class="bold">Año:</span> ${data.Year}</p>
                                    <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                    <p><span class="bold">Género:</span> ${data.Genre}</p>
                                    <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                    <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                    <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                    }
                })
            }
        };
    
function showPixarMoviesForRated(ratedPixar) {
    pixarBase.innerHTML = '';
    let finalData;  
        for (let i = 0; i<bestPixarMovies.length; i++) {    
            fetch('http://www.omdbapi.com/?i='+bestPixarMovies[i].imdbID+'&apikey=532b53fa')
            .then(res => res.json())
            .then(data => {
            finalData = (data.Rated.includes(ratedPixar)?data:'');
                if(finalData !== ''){
                    pixarBase.innerHTML +=`<div class="card text-center">
                    <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                    <a class="nav-link active">Ficha de ${data.Title}</a>
                    </li>
                    </ul>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                                <div class="align-left col-8">
                                    <h3 class="align-left title-movie">${data.Title}</h3>
                                    <p><span class="bold">Año:</span> ${data.Year}</p>
                                    <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                    <p><span class="bold">Género:</span> ${data.Genre}</p>
                                    <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                    <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                    <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                }
            })
        }
    };

//=======================================================================================================================//
//===================================================SECCIÓN DE PÁGINA GHIBLI==============================================//
//=======================================================================================================================//

function showGhibliMovies (genreGhibli) { 
    ghibliBase.innerHTML = '';
    let finalData;
        for (let i = 0; i<bestGhibliMovies.length; i++) {    
            fetch('http://www.omdbapi.com/?i='+bestGhibliMovies[i].imdbID+'&apikey=532b53fa')
            .then(res => res.json())
            .then(data => {
            finalData = (data.Genre.includes(genreGhibli)?data:'');
            if(finalData !== ''){
                ghibliBase.innerHTML +=`<div class="card text-center">
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                <a class="nav-link active">Ficha de ${data.Title}</a>
                </li>
                </ul>
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                            <div class="align-left col-8">
                                <h3 class="align-left title-movie">${data.Title}</h3>
                                <p><span class="bold">Año:</span> ${data.Year}</p>
                                <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                <p><span class="bold">Género:</span> ${data.Genre}</p>
                                <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            }
        })
    }
};

    function showGhibliMoviesForRated(ratedGhibli) { 
        ghibliBase.innerHTML = '';
        let finalData;
            for (let i = 0; i<bestGhibliMovies.length; i++) {    
                fetch('http://www.omdbapi.com/?i='+bestGhibliMovies[i].imdbID+'&apikey=532b53fa')
                .then(res => res.json())
                .then(data => {
                finalData = (data.Rated.includes(ratedGhibli)?data:'');
                if(finalData !== ''){
                    ghibliBase.innerHTML +=`<div class="card text-center">
                    <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                    <a class="nav-link active">Ficha de ${data.Title}</a>
                    </li>
                    </ul>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-4"><img src="${data.Poster}" alt="" class="img-thumbnail"></div>
                                <div class="align-left col-8">
                                    <h3 class="align-left title-movie">${data.Title}</h3>
                                    <p><span class="bold">Año:</span> ${data.Year}</p>
                                    <p><span class="bold">Clasificación:</span> ${data.Rated}</p>
                                    <p><span class="bold">Género:</span> ${data.Genre}</p>
                                    <p><span class="bold">Sinopsis:</span> ${data.Plot}</p>
                                    <p><span class="bold">Reparto:</span> ${data.Actors}</p>
                                    <p><span class="bold">🏆 Premios:</span> ${data.Awards}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                }
            })
        }
    };