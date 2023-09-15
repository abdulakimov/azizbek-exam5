const categoryName = localStorage.getItem("name");
let url = "http://localhost:3000/posts";
let aaa = categoryName.slice(1, -1);
let topCatigoreSec = document.querySelector(".top");
const catigoryCards = document.querySelector(".cat-cards");

async function fetchPosts() {
  try {
    let res = await axios.get(url);
    displayData(res.data);
    displayPosts(res.data);
  } catch (error) {
    console.log(error);
  }
}
fetchPosts();
let searchPost = document.querySelector(".search");
let aa;
searchPost.addEventListener("keyup", function (e) {
  aa = e.target.value;
  console.log(aa);
  async function fletchSearch() {
    try {
      let res = await axios.get(`${url}?q=${aa}`);
      displayPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  fletchSearch();
});

function displayData(post) {
  let str = "";
  post
    .filter((el) => el.category == aaa)
    .slice(0, 1)
    .map((el) => {
      str += `
    <div class="container">
    <p class="p1">${el.category}</p>
    <p class="p2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore.
    </p>
    <div class="d1">
      <a href="../pages/home.html" class="a1">Home</a>
      <p class="p3">></p>
      <a href="../pages/category.html" class="a1">${el.category}</a>
    </div>
  </div>
    `;
    });
  topCatigoreSec.innerHTML = str;
}

function displayPosts(post) {
  let str = "";
  post
    .filter((el) => el.category == aaa)
    .map((el) => {
      str += `
      <div class="cat-card">
      <div class="d10"><img src="${el.img}" alt="" class="photo4" /></div>
      <div class="d11">
        <p class="p11">${el.category}</p>
        <a href="../pages/post.html" class="p12" onclick="getId(${el.id})"
          >${el.title}</a
        >
        <p class="p13">
        ${el.description}
        </p>
      </div>
    </div>
    `;
    });
  catigoryCards.innerHTML = str;
}

function getId(id) {
  localStorage.setItem("id", JSON.stringify(id));
}
