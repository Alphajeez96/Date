//Dark mode toggler
function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

// loader

const cardImage = document.querySelector('.card-image');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-description');


const renderCard = () => {
    cardTitle.textContent = 'Card Title Yo!';
    cardDesc.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta repellat quibusdam assumenda at distinctio similique eos? Officiis voluptatem accusamus, id odit, quos eaque nemo, dicta quidem eum eligendi veritatis.';
    createImage();
    cardTitle.classList.remove('loading');
    cardDesc.classList.remove('loading');
    cardImage.classList.remove('loading');
};

function createImage() {
    const img = new Image();
    img.classList.add("image");
    img.setAttribute('alt', 'A cloud day at a mountain base');
    img.setAttribute('src', '  https://images.unsplash.com/photo-1516646255117-f9f933680173?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=dc874984018a4253ba7d2a3c53387135 ');
    cardImage.appendChild(img);
}

setTimeout(() => {
    renderCard();
}, 5000);


//Chat loops
const frameworks = [{
        name: "angular"
    },
    {
        name: "ember"
    },
    {
        name: "react"
    },
    {
        name: "vue"
    }
];

document.querySelector('.content')
    .innerHTML = frameworks.reduce((a, fw) => a +=
        `<div class="card   mt-5" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${fw.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`, ''
    );