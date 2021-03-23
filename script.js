//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  for (let episode in episodeList) {
    console.log(episodeList[episode].name);
    let episodeNum = episodeList[episode].number;
    let seasonNum = episodeList[episode].season;

    if (episodeNum < 10) {
      episodeNum = `0` + episodeNum.toString();
    }
    if (seasonNum < 10) {
      seasonNum = `0` + seasonNum.toString();
    }
    let seasonEpi = `S${seasonNum}E${episodeNum}`;
    console.log(seasonEpi);

    const title = document.createElement("div");
    const displayList = document.getElementById("displayList");
    console.log(displayList);
    title.textContent = episodeList[episode].name + " - " + seasonEpi;
    displayList.appendChild(title);

    const image = document.createElement("img");
    console.log(image);
    image.src = episodeList[episode].image.medium;
    displayList.appendChild(image);

    //console.log(summary);

    displayList.innerHTML += episodeList[episode].summary;
  }
const foot = document.getElementById("foot");
const link = document.createElement("a");
link.innerHTML = "Licencing";
link.href = "https://www.tvmaze.com/api#licensing";
link.title = "https://www.tvmaze.com/api#licensing";
foot.appendChild(link);
console.log(foot.innerHTML);
console.log(foot.innerText);
}


window.onload = setup;
