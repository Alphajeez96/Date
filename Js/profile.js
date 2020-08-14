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
const suggestions = [{

        name: "Janet Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 23.jpg'
    },
    {
        name: "Brianna Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 22.png'

    },
    {
        name: "Brian Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 25.png'
    },
    {
        name: "John Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: './Assets/Vectors/Ellipse 23.jpg'
    }
];

document.querySelector('.content')
    .innerHTML = suggestions.reduce((a, sg) => a +=
        `<div class="container">
        <div class=" w-1/2 mx-auto bg-white user__card hover:shadow-lg rounded-lg overflow-hidden">
            <div class="sm:flex sm:items-center px-6 py-5">
                <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full" src='${sg.src}' alt="Woman's Face">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <p class="text-xl user__name leading-tight">${sg.name}</p>
                    <p class="text-sm user__address pt-2 leading-tight text-gray-600">${sg.address}</p>
                    <p class="text-sm user__description leading-tight pt-2 ">${sg.description}</p>
                </div>

                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <div class="">
                        <button class=" short__list px-3 py-2 outline-none rounded-full inline-flex items-center font-semibold leading-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.16667 3.83333H12.1667V5.5H7.16667V3.83333ZM7.16667 7.16667H12.1667V8.83333H7.16667V7.16667ZM7.16667 10.5H12.1667V12.1667H7.16667V10.5ZM3.83333 3.83333H5.5V5.5H3.83333V3.83333ZM3.83333 7.16667H5.5V8.83333H3.83333V7.16667ZM3.83333 10.5H5.5V12.1667H3.83333V10.5ZM14.75 0.5H1.25C0.833333 0.5 0.5 0.833333 0.5 1.25V14.75C0.5 15.0833 0.833333 15.5 1.25 15.5H14.75C15.0833 15.5 15.5 15.0833 15.5 14.75V1.25C15.5 0.833333 15.0833 0.5 14.75 0.5ZM13.8333 13.8333H2.16667V2.16667H13.8333V13.8333Z" fill="#61E3DC"/>
                                </svg>
                          <span class="px-2">shortlist</span>
                        </button>
                    </div>

                    <div class="my-2">
                        <button class=" favorite px-3 outline-none py-2 rounded-full inline-flex items-center font-semibold leading-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9999 2.74799L7.2829 2.01099C5.5999 0.280988 2.5139 0.877988 1.39989 3.05299C0.876895 4.07599 0.758895 5.55299 1.71389 7.43799C2.63389 9.25299 4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25299 14.2859 7.43799C15.2409 5.55199 15.1239 4.07599 14.5999 3.05299C13.4859 0.877988 10.3999 0.279988 8.7169 2.00999L7.9999 2.74799ZM7.9999 15C-7.33311 4.86799 3.27889 -3.04001 7.82389 1.14299C7.88389 1.19799 7.94289 1.25499 7.9999 1.31399C8.05632 1.25504 8.11503 1.19833 8.17589 1.14399C12.7199 -3.04201 23.3329 4.86699 7.9999 15Z" fill="#FEAB3C"/>
                                </svg>
                          <span class="px-2">Favorite</span>
                        </button>
                    </div>

                    <div class="my-2">
                        <button class="reject px-4 outline-none py-2 rounded-full inline-flex items-center font-semibold leading-normal text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M8.40994 7L12.7099 2.71C12.8982 2.5217 13.004 2.2663 13.004 2C13.004 1.7337 12.8982 1.47831 12.7099 1.29C12.5216 1.1017 12.2662 0.995911 11.9999 0.995911C11.7336 0.995911 11.4782 1.1017 11.2899 1.29L6.99994 5.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L5.58994 7L1.28994 11.29C1.19621 11.383 1.12182 11.4936 1.07105 11.6154C1.02028 11.7373 0.994141 11.868 0.994141 12C0.994141 12.132 1.02028 12.2627 1.07105 12.3846C1.12182 12.5064 1.19621 12.617 1.28994 12.71C1.3829 12.8037 1.4935 12.8781 1.61536 12.9289C1.73722 12.9797 1.86793 13.0058 1.99994 13.0058C2.13195 13.0058 2.26266 12.9797 2.38452 12.9289C2.50638 12.8781 2.61698 12.8037 2.70994 12.71L6.99994 8.41L11.2899 12.71C11.3829 12.8037 11.4935 12.8781 11.6154 12.9289C11.7372 12.9797 11.8679 13.0058 11.9999 13.0058C12.132 13.0058 12.2627 12.9797 12.3845 12.9289C12.5064 12.8781 12.617 12.8037 12.7099 12.71C12.8037 12.617 12.8781 12.5064 12.9288 12.3846C12.9796 12.2627 13.0057 12.132 13.0057 12C13.0057 11.868 12.9796 11.7373 12.9288 11.6154C12.8781 11.4936 12.8037 11.383 12.7099 11.29L8.40994 7Z" fill="#F88584"/>
                                </svg>
                          <span class="px-2">Reject</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>`, ''
    );