const url = "http://localhost:3000/posts";
let allPosts = document.querySelector(".cards");
let searchPost = document.querySelector(".search");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let pageNum = document.querySelector(".page-num");
let p = 1;
async function fletchPosts() {
  try {
    let res = await axios.get(`${url}?_page=${p}&_limit=3`);
    displayData(res.data);
  } catch (error) {
    console.log(error);
  }
}
next.addEventListener("click", () => {
  if (p < 4) {
    p++;
  }
  fletchPosts();
});
// pageNum.addEventListener("click", () => {
//   console.log(pageNum.textContent);
//   fletchPosts();
// });
prev.addEventListener("click", () => {
  p--;
  fletchPosts();
});
fletchPosts();

let aa;
searchPost.addEventListener("keyup", function (e) {
  aa = e.target.value;
  let p = 1;
  async function fletchSearch() {
    try {
      let res = await axios.get(`${url}?q=${aa}&_page=${p}&_limit=3`);
      displayData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  next.addEventListener("click", () => {
    if (p < 4) {
      p++;
    }
    fletchSearch();
  });
  // pageNum.addEventListener("click", () => {
  //   console.log(pageNum.textContent);
  //   fletchPosts();
  // });
  prev.addEventListener("click", () => {
    p--;
    fletchSearch();
  });
  fletchSearch();
});

function displayData(post) {
  let str = "";
  post.map((el) => {
    str += `<div class="card">
    <div class="d1"><img src="${el.image}" alt="" class="img3" /></div>
    <div class="d2">
      <p class="p1">${el.category}</p>
      <a href="../pages/post.html" class="p2" onclick="getId(${el.id})">
        ${el.title}
      </a>
      <p class="p3">
        ${el.description}
      </p>
    </div>
  </div>`;
  });
  allPosts.innerHTML = str;
}

function getId(id) {
  localStorage.setItem("id", JSON.stringify(id));
}
