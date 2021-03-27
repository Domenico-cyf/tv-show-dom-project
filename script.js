//You can edit ALL of the code here
function setup() {

const allEpisodes = getAllEpisodes();
makePageForEpisodes(allEpisodes);



  let epiFilter;
  
  const input = document.getElementById('input')
    input.addEventListener("input",(event) => {
     

       let searchValue = event.target.value.toLowerCase();

       let episodeList = getAllEpisodes();

       let filteredEpisodes = episodeList.filter((episode) => {
         if (
           episode.name.toLowerCase().includes(searchValue) ||
           episode.summary.toLowerCase().includes(searchValue)
         ) {
           return episode;
         }
       });
       showFiltered(filteredEpisodes);
     //  epiFilter = makePageForEpisodes(filteredEpisodes);
       console.log(filteredEpisodes);
    })
  
  
}

let showFiltered = function(filteredEpisodes){
  console.log(filteredEpisodes)
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;


  for (let episode in episodeList) {
    
    let episodeNum = episodeList[episode].number;
    let seasonNum = episodeList[episode].season;

    if (episodeNum < 10) {
      episodeNum = `0` + episodeNum.toString();
    }
    if (seasonNum < 10) {
      seasonNum = `0` + seasonNum.toString();
    }
    let seasonEpi = `S${seasonNum}E${episodeNum}`;
    
    
    const title = document.createElement("div");
    
   
    title.textContent = episodeList[episode].name + " - " + seasonEpi;
    //displayList.appendChild(title);

    const image = document.createElement("img");
    
    image.src = episodeList[episode].image.medium;
    //displayList.appendChild(image);

    
   // displayList.innerHTML += episodeList[episode].summary;

    const container = document.createElement("div");
    container.id = episodeList[episode].id;
    container.append(title, image);
    container.innerHTML += episodeList[episode].summary;
    displayList.appendChild(container);
  }


}
const foot = document.getElementById("foot");
const link = document.createElement("a");
link.innerHTML = "Licencing";
link.href = "https://www.tvmaze.com/api#licensing";
link.title = "https://www.tvmaze.com/api#licensing";
foot.appendChild(link);



window.onload = setup;
