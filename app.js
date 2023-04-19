const searchBtn = document.querySelector(".query");
const query = document.querySelector(".searchText");
searchBtn.addEventListener("click", findGif);
const image = document.querySelector(".images");
async function findGif(e) {
  e.preventDefault();
  console.log("Searching");
  const searchText = query.value;
  const url = await getGif(searchText.trim());
  console.log(url);
  createImageDiv(url);
}

async function getGif(search) {
    console.log("Search value", search);
  const searchObj = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: search,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  console.log("URL", searchObj);
  return searchObj.data.data[0].images.original.url;
}
function createImageDiv(url) {
  console.log("creating Image");
  const col = document.createElement("div");
  col.className = "col-3 mt-3";
  const img = document.createElement("img");
  img.className = "w-100";
  img.src = url;
  col.appendChild(img);
  image.appendChild(col);
}
