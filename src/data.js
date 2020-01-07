// fetch('http://www.omdbapi.com/?s&apikey=532b53fa')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

//Cambiar de FIRST PAGE a SECOND PAGE al hacer click en la imagen 
document.getElementById('allDisney').addEventListener('click', () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
  });

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
    {Title:'Antz', imdbID:'tt0120587'}
];
// console.log(bestDreamworksMovies);

const bestGhibliMovies = [
    {Title:'My Neighbor Totoro', imdbID:'tt0096283'},
    {Title:'Lupin the 3rd: Castle of Cagliostro', imdbID:'tt0079833'},
    {Title:'Howls Moving Castle', imdbID:'tt0347149'},
    {Title:'Castle in the Sky', imdbID:'tt0092067'},
    {Title:'Nausicaä of the Valley of the Wind', imdbID:'tt0087544'},
    {Title:'The Secret World of Arrietty', imdbID:'tt1568921'},
    {Title:'Kikis Delivery Service', imdbID:'tt0097814'},
    {Title:'Ponyo', imdbID:'tt0876563'},
    {Title:'The Cat Returns', imdbID:'tt0347618'}
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
    {title:'The Good Dinosaur', imdbID:'tt1979388'},
];

const movieBase = document.getElementById('showMovies');

const allMovies = [].concat(bestDisneyMovies, bestDreamworksMovies, bestGhibliMovies, bestPixarMovies);

movieBase.innerHTML = ''; 
finalArray = [];  
for (let i = 0; i<allMovies.length; i++){    
    fetch('http://www.omdbapi.com/?i='+allMovies[i].imdbID+'&apikey=532b53fa')
    .then(res => res.json())
    .then(data => {
      finalArray.push(data)  
      movieBase.innerHTML +=`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div class="card" style="width: 18rem;">
      <a href="index.html"><img src="${data.Poster}" id="img2" class="img-fluid" alt="poster"></a>
      <div class="cardStyle">
      <h3 class="cardTitle">${data.Title}</h3>
      </div>
      </div>
      </div>`
    }) 
} 
