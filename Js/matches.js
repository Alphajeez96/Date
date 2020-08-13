//Dark mode toggler
function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

// Chat Viewer here

function onTabClick(event) {
    let activeTabs = document.querySelectorAll('.active');

    // deactivate existing active tab and panel 
    activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace('active', '');
    });

    // activate new tab and panel
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);


//Chat loops
const suggestions = [{

        name: "Janet Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 23.jpg',
        id: 1
    },
    {
        name: "Brianna Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 22.png',
        id: 2

    },
    {
        name: "Brian Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 25.png',
        id: 3
    },
    {
        name: "John Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 23.jpg',
        id: 4
    }
];

document.querySelector('.contents')
    .innerHTML = suggestions.reduce((a, sg) => a +=
        `<div class="container justify-end flex">
        <div class="  w-3/4 mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-5">
            <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full" src='${sg.src}' alt="Woman's Face">
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p class="text-xl  leading-tight">${sg.name}</p>
                <p class="text-sm pt-2 leading-tight text-gray-600">${sg.address}</p>
                <p class="text-sm leading-tight pt-2 ">${sg.description}</p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            </div>
        </div>
     </div>
</div>`, '');

const images = [];

const mountImages = () => {
    let menu = document.querySelector('.menu')
    suggestions.forEach(e => {
        const me = document.createElement('div')
        me.classList.add('order2')
        me.innerHTML = `
        <div>
        <img src='${e.src}'>
        </div>
        <div class='choose'>
        <h3>${e.name}</h3>
        <h3>${e.address}</h3>
        </div>
        `
        menu.appendChild(me);

        images.push(me)
    })
    console.log(images)
}
mountImages();

images.forEach((e, i) => e.addEventListener('click', a => {
    console.log(a, i)
}))