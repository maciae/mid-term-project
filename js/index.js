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

const projectsImages = ["images/projects-section/1.jpg", "images/projects-section/2.jpg", "images/projects-section/3.jpg"];
const projectsLinks = ["/simplify", "/dashcoin", "/vectorify"];

getPosts().then(posts => {
/*
    posts.forEach(function (item, index) {
        console.log(item, index);
    });
*/

let loopLength = posts.length > 3 ? 3 : posts.length;
for (let i = 0 ; i < loopLength ; i++){
    //console.log(posts[i]);
    let cardHTML = '\
    <div class="card"> \
    <img class="card__img"src="' + projectsImages[i] + '"> \
    <div class="card__title"> \
        '+ posts[i].title +' \
    </div> \
    <p class="card__description"> \
        ' + posts[i].body +' \
    </p> \
    <div class="card__link-div"> \
        <a class="card__link" href=" ' + projectsLinks[i] +'">Learn more</a> \
    </div> \
    </div> \
    ';
    document.getElementsByClassName('projects__cards')[0].insertAdjacentHTML('beforeend', cardHTML);
}
});