//=======================================================================================================================//
//=================================SECCIÓN EN DONDE SE ARMAN LOS ARREGLOS CON LAS PELÍCULAS ==============================//
//=======================================================================================================================//
const bestDisneyMovies = [
    {title:'Aladdin', imdbID:'tt0103639'},
    {title:'Beauty and the Beast', imdbID:'tt0101414'},
    {title:'Frozen', imdbID:'tt2294629'},
    {title:'The Little Mermaid', imdbID:'tt0097757'},
    {title:'Snow white and the seven dwarfs', imdbID:'tt0029583'},
    {title:'Peter Pan', imdbID:'tt0046183'},
    {title:'Tarzan', imdbID:'tt0120855'},
    {title:'The Jungle Book', imdbID:'tt0061852'},
    {title:'Dumbo', imdbID:'tt0033563'},
    {title:'Lady and the Tramp', imdbID:'tt0048280'}
];

const bestDreamworksMovies =[ 
    {Title:'How to Train Your Dragon', imdbID:'tt0892769'},
    {Title:'Shrek', imdbID:'tt0126029'},
    {Title:'Madagascar', imdbID:'tt0351283'},
    {Title:'How to Train Your Dragon 2', imdbID:'tt1646971'},
    {Title:'The Prince of Egypt', imdbID:'tt0120794'},
    {Title:'Flushed Away', imdbID:'tt0424095'},
    {Title:'Kung Fu Panda 3', imdbID:'tt2267968'},
    {Title:'Bee Movie', imdbID:'tt0389790'},
    {Title:'Antz', imdbID:'tt0120587'},
    {Title:'Chicken Run', imdbID:'tt0120630'}
];

const bestGhibliMovies = [
    {Title:'My Neighbor Totoro', imdbID:'tt0096283'},
    {Title:'Lupin the 3rd: Castle of Cagliostro', imdbID:'tt0079833'},
    {Title:'Howls Moving Castle', imdbID:'tt0347149'},
    {Title:'Castle in the Sky', imdbID:'tt0092067'},
    {Title:'Nausicaä of the Valley of the Wind', imdbID:'tt0087544'},
    {Title:'The Secret World of Arrietty', imdbID:'tt1568921'},
    {Title:'Kikis Delivery Service', imdbID:'tt0097814'},
    {Title:'Ponyo', imdbID:'tt0876563'},
    {Title:'The Cat Returns', imdbID:'tt0347618'},
    {Title:'Only Yesterday', imdbID:'tt0102587'},
    {Title:'Whisper of the Heart', imdbID:'tt0113824'}
];

const bestPixarMovies = [
    {title:'Toy Story 2', imdbID:'tt0120363'},
    {title:'Toy Story', imdbID:'tt0114709'},
    {title:'Finding Nemo', imdbID:'tt0266543'},
    {title:'WALL·E', imdbID:'tt0910970'},
    {title:'The Incredibles', imdbID:'tt0317705'},
    {title:'Up', imdbID:'tt1049413'},
    {title:'Monsters, Inc.', imdbID:'tt0198781'},
    {title:'Toy Story 3', imdbID:'tt0435761'},
    {title:'Inside Out', imdbID:'tt2096673'},
    {title:'Ratatouille', imdbID:'tt0382932'},
    {title:'Finding Dory', imdbID:'tt2277860'},
    {title:'Cars', imdbID:'tt0317219'},
    {title:'Monsters University', imdbID:'tt1453405'},
    {title:'Clip: Cars 3: Driven to Win Playthrough', imdbID:'tt7818322'},
    {title:'Cars 2', imdbID:'tt1216475'},
    {title:'Coco', imdbID:'tt2380307'},
    {title:'Brave', imdbID:'tt1217209'},
    {title:'The Good Dinosaur', imdbID:'tt1979388'}
];

//=======================================================================================================================//
//===================================================DIVS PARA CADA ESTUDIO==============================================//
//=======================================================================================================================//

const disneyBase = document.getElementById('showDisney');
const dreamworksBase = document.getElementById('showDreamworks');
const pixarBase = document.getElementById('showPixar');
const ghibliBase = document.getElementById('showGhibli');

//=======================================================================================================================//
//===================================================SECCION DE PAGINA DISNEY==============================================//
//=======================================================================================================================//

document.getElementById('allDisney').addEventListener('click', () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
    thirdPage.style.display = 'none';
  });

// Se detecta el click de botón de disney para mostrar la descripción  
document.getElementById('allDisney').addEventListener('click',showDescriptionStudioDisney);

// Detectando select para filtrar por género 
const selectDisney = document.getElementById('genreSearchDisney');
selectDisney.addEventListener('change', function() { 
    const genreDisney = document.getElementById('genreSearchDisney').value; //se rescata el valor del genero seleccionado
    showDisneyMovies(genreDisney);
});

// Detectando select para filtrar por rated  
const selectRatedDisney = document.getElementById('ratedSearchDisney');
selectRatedDisney.addEventListener('change', function() { 
    const ratedDisney = document.getElementById('ratedSearchDisney').value;
    showDisneyMoviesForRated(ratedDisney);
});

// Función que muestra la descripción disney
function showDescriptionStudioDisney (){
let studioDisney= document.getElementById('descriptionStudioDisney')
studioDisney.style.display = 'block';
}

//=======================================================================================================================//
//===================================================SECCIÓN DE PÁGINA DREAMWORKS==============================================//
//=======================================================================================================================//

document.getElementById('allDreamworks').addEventListener('click', () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'none';
    thirdPage.style.display = 'block';
  });
document.getElementById('allDreamworks').addEventListener('click', showDescriptionStudioDreamwork);

const selectDreamworks = document.getElementById('genreSearchDreamworks');// llamar al id del select
selectDreamworks.addEventListener('change', function() { 
    const genreDreamworks = document.getElementById('genreSearchDreamworks').value;
    showDreamworksMovies(genreDreamworks);
});

// Detectando select para filtrar por rated
const selectRatedDreamwork = document.getElementById('ratedSearchDreamworks');// llamar al id del select
selectRatedDreamwork.addEventListener('change', function() { 
    const ratedDreamwork = document.getElementById('ratedSearchDreamworks').value;
    showDreamworkMoviesForRated(ratedDreamwork);
});

function showDescriptionStudioDreamwork () {
    let studioDreamwork= document.getElementById('descriptionStudioDreamwork')
    studioDreamwork.style.display = 'block';
}

//=======================================================================================================================//
//===================================================SECCIÓN DE PÁGINA PIXAR==============================================//
//=======================================================================================================================//

document.getElementById('allPixar').addEventListener('click', () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'none';
    thirdPage.style.display = 'none';
    fourthPage.style.display = 'block';
  });

document.getElementById('allPixar').addEventListener('click', showDescriptionStudioPixar);

const selectPixar = document.getElementById('genreSearchPixar');// llamar al id del select
selectPixar.addEventListener('change', function() { 
    const genrePixar = document.getElementById('genreSearchPixar').value;
    showPixarMovies(genrePixar);
});

// Detectando select para filtrar por rated
const selectRatedPixar = document.getElementById('ratedSearchPixar');// llamar al id del select
selectRatedPixar.addEventListener('change', function() { 
    const ratedPixar = document.getElementById('ratedSearchPixar').value;
    showPixarMoviesForRated(ratedPixar);
});

function showDescriptionStudioPixar (){
    let studioPixar= document.getElementById('descriptionStudioPixar')
    studioPixar.style.display = 'block';
}

//=======================================================================================================================//
//===================================================SECCION DE PAGINA GHIBLI==============================================//
//=======================================================================================================================//

document.getElementById('allGhibli').addEventListener('click', () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'none';
    thirdPage.style.display = 'none';
    fourthPage.style.display = 'none';
    fifthPage.style.display = 'block';
  });

document.getElementById('allGhibli').addEventListener('click', showDescriptionStudioGhibli);

const selectGhibli = document.getElementById('genreSearchGhibli');// llamar al id del select
selectGhibli.addEventListener('change', function() { 
    const genreGhibli = document.getElementById('genreSearchGhibli').value;
    showGhibliMovies(genreGhibli);
});

// Detectando select para filtrar por rated
const selectRatedGhibli = document.getElementById('ratedSearchGhibli');// llamar al id del select
selectRatedGhibli.addEventListener('change', function() { 
    const ratedGhibli = document.getElementById('ratedSearchGhibli').value;
    showGhibliMoviesForRated(ratedGhibli);
});

function showDescriptionStudioGhibli (){
    let studioGhibli= document.getElementById('descriptionStudioGhibli')
    studioGhibli.style.display = 'block';
}