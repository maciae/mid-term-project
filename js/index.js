async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  } catch(error) {
    console.log(error);
  }
}

async function getPost(id) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}