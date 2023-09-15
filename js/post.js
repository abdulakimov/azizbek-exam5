let postId = localStorage.getItem("id");
let url = "http://localhost:3000/posts";
let blogMain = document.querySelector(".blog-post-content");

async function fetchPost() {
  try {
    let res = await axios.get(url);
    // console.log(res.data);
    displayPost(res.data);
  } catch (error) {
    console.log(error);
  }
}
fetchPost();

function displayPost(post) {
  let str = "";
  post
    .filter((el) => el.id == postId)
    .map((el) => {
      str += `
      <div class="d1">
      <img src="${el.img}" alt="photo" class="photo2" />
      <div class="d2">
        <p class="p1">${el.author}</p>
        <p class="p2">
          <span class="span4">Posted</span> on ${el.date}
        </p>
        <p class="p3">
          ${el.title}
        </p>
        <p class="p4">${el.category}</p>
        <p class="p5">
          ${el.description}
        </p>
        <p class="p6">
        ${el.description}
        </p>
      </div>
    </div>
      `;
    });
  blogMain.innerHTML = str;
}
