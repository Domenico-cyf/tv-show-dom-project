//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  const input = document.getElementById("input");
  let searchValue = "";
  input.addEventListener("input", (event) => {
    searchValue = event.target.value.toLowerCase();

    //let episodeList = getAllEpisodes();

    let filteredEpisodes = allEpisodes.filter((episode) => {
      if (
        episode.name.toLowerCase().includes(searchValue) ||
        episode.summary.toLowerCase().includes(searchValue)
      ) {
        return episode;
      }
    });
    
    let idArr = filteredEpisodes.map((element) => element.id);
    console.log(idArr);

    let idArrNoShow = allEpisodes.filter((element) => {
      return !idArr.includes(element.id);
    });

    idArrNoShow = idArrNoShow.map((element) => element.id);
    console.log(idArrNoShow);

    for (let episode in idArrNoShow) {
      let singleId = document.getElementById(idArrNoShow[episode]);
      singleId.className = "hide";
    }
    for (let episode in idArr) {
      let singleId = document.getElementById(idArr[episode]);
      singleId.className = "show";
    }
    let root = document.getElementById("root");
    root.textContent = `Got ${filteredEpisodes.length} episode(s)`;
    //makePageForEpisodes(filteredEpisodes);
  });

  // const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${filteredEpisodes.length} episode(s)`;
  // let episodeData = episodeList;
  // if (searchValue) {
  //   episodeData = filteredEpisodes;
  // }
  // const input = document.getElementById("input");
  // input.addEventListener("input", (event) => {
  //   let searchValue = event.target.value.toLowerCase();

  //   //let episodeList = getAllEpisodes();

  //   let filteredEpisodes = allEpisodes.filter((episode) => {
  //     if (
  //       episode.name.toLowerCase().includes(searchValue) ||
  //       episode.summary.toLowerCase().includes(searchValue)
  //     ) {
  //       return episode;
  //     }
  //   });

  //   console.log(filteredEpisodes);
  //   makePageForEpisodes(filteredEpisodes);

  // });
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  for (let episode in episodeList) {
    let episodeNum = episodeList[episode].number;
    let seasonNum = episodeList[episode].season;

    let seasonEpi = episodeFun(episodeNum, seasonNum);
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
  function episodeFun(episodeNum, seasonNum) {
    if (episodeNum < 10) {
      episodeNum = `0` + episodeNum.toString();
    }
    if (seasonNum < 10) {
      seasonNum = `0` + seasonNum.toString();
    }
    return `S${seasonNum}E${episodeNum}`;
  }
}
const foot = document.getElementById("foot");
const link = document.createElement("a");
link.innerHTML = "Licencing";
link.href = "https://www.tvmaze.com/api#licensing";
link.title = "https://www.tvmaze.com/api#licensing";
foot.appendChild(link);

window.onload = setup;
