const getPostsBtn = document.getElementById("get-posts-btn");
const output = document.getElementById("output");
const form = document.getElementById("add-post-form");

// fetch posts
async function fetchPosts() {
  try {
    const res = await fetch("http://localhost:5555/api/posts");

    if (!res.ok) throw new Error("Failed to fetvh posts");

    const posts = await res.json();

    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log(error, "error in try cath block");
  }
}

// add new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("http://localhost:5555/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) throw new Error("Failed to add post");

    const newPost = await res.json();

    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    output.appendChild(postEl);

    fetchPosts();
  } catch (error) {
    console.error(error, "error  while adding post");
  }
}

// event listeners
getPostsBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", addPost);
