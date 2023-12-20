let url = "http://localhost:3000/posts";
const postHomeMain = document.querySelector(".home-sec-content");
const lastPosts = document.querySelector(".cards");
const moveCategory1 = document.querySelector(".move-category1");
const moveCategory2 = document.querySelector(".move-category2");
const moveCategory3 = document.querySelector(".move-category3");
const moveCategory4 = document.querySelector(".move-category4");
async function fetchHomePost() {
  try {
    let res = await axios.get(url);
    displayPosts(res.data);
    displayLastPosts(res.data);
  } catch (error) {
    console.log(error);
  }
}
fetchHomePost();

function displayPosts(post) {
  let str = "";
  post.slice(0, 1).map((el) => {
    str += `  <div
    class="d1"
    style="
      background: radial-gradient(
          80.99% 71.93% at 74.58% 0%,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        url('${el.image}');
    "
  >
    <div class="container">
      <p class="p1">POSTED ON <span class="sp1">${el.category}</span></p>
      <p class="p4">${el.title}</p>
      <p class="p2">
        By <span class="sp2">${el.author}</span> | ${el.date}
      </p>
      <p class="p3">
        ${el.description}
      </p>
      <a href="../pages/all.html"><button class="btn3">Read More</button></a>
    </div>
  </div>`;
  });
  postHomeMain.innerHTML = str;
}
function displayLastPosts(post) {
  let str = "";
  post.slice(post.length - 3, post.length).map((el) => {
    str += `  
    <div class="card">
                <img src="${el.image}" alt="photo"class="photo1"/>
                <p class="p2">
                  By <span class="sp3">${el.author}</span> | ${el.date}
                </p>
                <a href="../pages/post.html" class="p3" onclick="getId(${el.id})">
                  ${el.title}
                </a>
                <p class="p4">
                 ${el.description}
                </p>
              </div>
      `;
  });
  lastPosts.innerHTML = str;
}
let aaa1 = moveCategory1.textContent;
let aaa2 = moveCategory2.textContent;
let aaa3 = moveCategory3.textContent;
let aaa4 = moveCategory4.textContent;

function getId(id) {
  localStorage.setItem("id", JSON.stringify(id));
}
function getName(name) {
  localStorage.setItem("name", JSON.stringify(name));
}
