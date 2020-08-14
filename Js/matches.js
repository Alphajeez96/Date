//Dark mode toggler
function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);

//User Data
const suggestions = [{
        name: "Janet Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: "./Assets/Vectors/Ellipse 23.jpg",
        id: 1,
        chat1: "So what are your fantasies?",
        chat2: "A MacBook pro, a nice Mercedes and a chance to work on this 😍",
    },
    {
        name: "Brianna Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: "./Assets/Vectors/Ellipse 22.png",
        id: 2,
        chat1: "Hello Brianna here Nice to meet you",
        chat2: "Hi, the pleasure is all mine. The name is Alpha",
    },
    {
        name: "Brian Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: "./Assets/Vectors/Ellipse 25.png",
        id: 3,
        chat1: "Hello, you free for a cup of coffee later today?",
        chat2: "Sure, do give me a call when you ready",
    },
    {
        name: "John Doe",
        address: "24, Arizona",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vitae, at scelerisque scelerisque morbi.",
        src: "./Assets/Vectors/Ellipse 23.jpg",
        id: 4,
        chat1: "Hello This is Chat 4",
        chat2: "Hi, the pleasure is all mine Chat 4",
    },
];

//Looping per object
// document.querySelector('.contents')
//     .innerHTML = suggestions.reduce((a, sg) => a +=
//         `<div class="container justify-end flex">
//         <div class="  w-3/4 mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
//         <div class="sm:flex sm:items-center px-6 py-5">
//             <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full" src='${sg.src}' alt="Woman's Face">
//             <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
//                 <p class="text-xl  leading-tight">${sg.name}</p>
//                 <p class="text-sm pt-2 leading-tight text-gray-600">${sg.address}</p>
//                 <p class="text-sm leading-tight pt-2 ">${sg.description}</p>
//             </div>
//             <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
//             </div>
//         </div>
//      </div>
// </div>`, '');

//Loop through arraya and create elements
const mountchats = () => {
    let menu = document.querySelector(".contents");
    suggestions.forEach((q) => {
        const matches = document.createElement("div");
        matches.innerHTML = `<div class="container justify-end flex">
        <div class="  w-3/4 mx-2 bg-white user__card hover:shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-5">
            <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 rounded-full" src='${q.src}' alt="Woman's Face">
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p class="text-xl user__name leading-tight">${q.name}</p>
                <p class="text-sm user__addresse pt-2 leading-tight text-gray-600">${q.address}</p>
                <p class="text-sm user__description leading-tight pt-2 ">${q.description}</p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            </div>
        </div>
     </div>
</div>`;
        menu.appendChild(matches);

        matches.addEventListener("click", (a) => {
            let chatView = document.querySelector(".msger");
            chatView.innerHTML = `  <div class="msger-header">
<div class="msger-header-title">
    <i class="date px-2 py-1"> ${getFormattedDate(new Date())}</i>
</div>
<div class="msger-header-options">
   
</div>
</div>

<main class="msger-chat">
<div class="msg left-msg pt-2">
    <div class="msg-img" style="background-image: url('${q.src}')"></div>

    <div class="msg-bubble">
        <div class="msg-info">
        <div class="msg-info-name"></div>

        </div>

        <div class="msg-text">
        ${q.chat1}
        </div>
        
    </div>
   
</div>
<div class="msg-info-time flex justify-start">12:45</div>

<div class="msg right-msg pt-5">
    <div class="msg-img" style="background-image: url('./Assets/Vectors/Ellipse 28.png')"></div>

    <div class="msg-bubble">
        <div class="msg-info">
            <!-- <div class="msg-info-name">Sajad</div> -->
            <!-- <div class="msg-info-time">12:46</div> -->
        </div>

        <div class="msg-text-right">
        ${q.chat2}
        </div>
    </div>
</div>
<div class="msg-info-time flex justify-end">12:45</div>
</main>

<form class="msger-inputarea">

<label for="fileInput" class="mx-2 mt-2 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M9.5 5.75V16.33C9.5 18.42 7.97 20.28 5.89 20.48C5.33435 20.5355 4.77322 20.4739 4.24288 20.299C3.71253 20.1242 3.22475 19.8401 2.81104 19.465C2.39733 19.0899 2.06689 18.6323 1.84107 18.1215C1.61524 17.6108 1.49905 17.0584 1.5 16.5V4.14C1.5 2.83 2.44 1.64 3.74 1.51C4.08863 1.47354 4.44104 1.51081 4.77434 1.61938C5.10763 1.72795 5.41437 1.9054 5.67464 2.14021C5.93491 2.37502 6.14289 2.66194 6.28508 2.98234C6.42728 3.30274 6.5005 3.64946 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5.75C4.5 5.34 4.16 5 3.75 5C3.34 5 3 5.34 3 5.75V14.36C3 15.67 3.94 16.86 5.24 16.99C5.58863 17.0265 5.94104 16.9892 6.27434 16.8806C6.60763 16.772 6.91437 16.5946 7.17464 16.3598C7.43491 16.125 7.64289 15.8381 7.78508 15.5177C7.92728 15.1973 8.0005 14.8505 8 14.5V4.17C8 2.08 6.47 0.219997 4.39 0.0199968C3.8345 -0.034733 3.2737 0.0274655 2.74369 0.202588C2.21369 0.377711 1.72622 0.661876 1.31269 1.03679C0.899149 1.41171 0.568702 1.86906 0.342618 2.37942C0.116534 2.88977 -0.000176281 3.44181 1.99848e-07 4V16.27C1.99848e-07 19.14 2.1 21.71 4.96 21.98C8.25 22.28 11 19.72 11 16.5V5.75C11 5.34 10.66 5 10.25 5C9.84 5 9.5 5.34 9.5 5.75Z"
            fill="#636363" />
    </svg>
</label>
<input type="file" style="display: none;" id="fileInput" />


<button type="" class=" mx-2 rounded" type="button"></button>

<div class="flex items-end border-b border-teal-500 py-2">
    <input class="appearance-none msger-input bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="" aria-label="Full name">

    <button class="mx-2 rounded" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"
            fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z"
                fill="#F98B78" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.28514 9.56694C4.39998 9.50064 4.53646 9.48267 4.66454 9.51699C4.79263 9.55131 4.90184 9.63511 4.96814 9.74994C5.27525 10.2823 5.71719 10.7243 6.24947 11.0315C6.78175 11.3387 7.38557 11.5003 8.00014 11.4999C8.61472 11.5003 9.21854 11.3387 9.75081 11.0315C10.2831 10.7243 10.725 10.2823 11.0321 9.74994C11.0647 9.69262 11.1083 9.64231 11.1605 9.60191C11.2126 9.56151 11.2722 9.53181 11.3358 9.51454C11.3994 9.49726 11.4659 9.49274 11.5312 9.50124C11.5966 9.50974 11.6597 9.53109 11.7168 9.56406C11.7739 9.59703 11.8239 9.64097 11.864 9.69335C11.904 9.74573 11.9333 9.80552 11.9502 9.86927C11.967 9.93302 11.9711 9.99947 11.9622 10.0648C11.9533 10.1301 11.9315 10.1931 11.8981 10.2499C11.5033 10.9343 10.9351 11.5026 10.2508 11.8975C9.56651 12.2925 8.79025 12.5003 8.00014 12.4999C7.21004 12.5003 6.43378 12.2925 5.74949 11.8975C5.06519 11.5026 4.49702 10.9343 4.10214 10.2499C4.03584 10.1351 4.01787 9.99863 4.05219 9.87054C4.08651 9.74246 4.17031 9.63325 4.28514 9.56694Z"
                fill="#F98B78" />
            <path
                d="M7 6.5C7 7.328 6.552 8 6 8C5.448 8 5 7.328 5 6.5C5 5.672 5.448 5 6 5C6.552 5 7 5.672 7 6.5ZM11 6.5C11 7.328 10.552 8 10 8C9.448 8 9 7.328 9 6.5C9 5.672 9.448 5 10 5C10.552 5 11 5.672 11 6.5Z"
                fill="#F98B78" />
        </svg>
    </button>

    <button class=" mx-2 rounded" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none">
            <path
                d="M22.125 7.00791H16.2188C16.1156 7.00791 16.0312 7.09229 16.0312 7.19541V16.711C16.0312 16.8142 16.1156 16.8985 16.2188 16.8985H17.6063C17.7094 16.8985 17.7938 16.8142 17.7938 16.711V12.8884H21.7359C21.8391 12.8884 21.9234 12.804 21.9234 12.7009V11.6017C21.9234 11.4985 21.8391 11.4142 21.7359 11.4142H17.7938V8.53604H22.125C22.2281 8.53604 22.3125 8.45166 22.3125 8.34854V7.19541C22.3125 7.09229 22.2281 7.00791 22.125 7.00791ZM13.7812 7.03135H12.4688C12.3656 7.03135 12.2812 7.11572 12.2812 7.21885V16.7345C12.2812 16.8376 12.3656 16.922 12.4688 16.922H13.7812C13.8844 16.922 13.9688 16.8376 13.9688 16.7345V7.21885C13.9688 7.11572 13.8844 7.03135 13.7812 7.03135ZM10.5938 11.7399H6.80859C6.70547 11.7399 6.62109 11.8243 6.62109 11.9274V12.9517C6.62109 13.0548 6.70547 13.1392 6.80859 13.1392H9.03281L9.02578 13.3478C8.99766 14.7259 7.95703 15.6563 6.42656 15.6563C4.64063 15.6563 3.52266 14.2571 3.52266 11.9837C3.52266 9.73838 4.61953 8.34619 6.37031 8.34619C7.65469 8.34619 8.55234 8.97666 8.91328 10.1134H10.6992C10.3805 8.06963 8.68359 6.75244 6.37031 6.75244C3.51562 6.7501 1.6875 8.79385 1.6875 11.9978C1.6875 15.2392 3.49453 17.2501 6.39844 17.2501C9.07266 17.2501 10.7812 15.5931 10.7812 12.9938V11.9274C10.7812 11.8243 10.6969 11.7399 10.5938 11.7399Z"
                fill="#F98B78" />
        </svg>
    </button>

    <button type="button" class="rounded mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 19 18"
            fill="none">
            <path
                d="M18.5875 8.3325L2.08754 0.0825048C1.95821 0.0178298 1.81295 -0.00808404 1.66924 0.00788357C1.52554 0.0238512 1.38951 0.0810194 1.27754 0.172505C1.1706 0.262124 1.09079 0.379795 1.04707 0.512288C1.00334 0.644781 0.997446 0.786843 1.03004 0.922505L3.25004 9L1.00004 17.055C0.969455 17.1683 0.965886 17.2872 0.989614 17.4021C1.01334 17.517 1.06371 17.6248 1.13665 17.7167C1.2096 17.8086 1.3031 17.8821 1.40964 17.9313C1.51617 17.9805 1.63276 18.0041 1.75004 18C1.86744 17.9993 1.98304 17.971 2.08754 17.9175L18.5875 9.6675C18.7104 9.60457 18.8135 9.50895 18.8855 9.39117C18.9575 9.2734 18.9956 9.13804 18.9956 9C18.9956 8.86197 18.9575 8.72661 18.8855 8.60884C18.8135 8.49107 18.7104 8.39544 18.5875 8.3325ZM2.91254 15.8325L4.57004 9.75H11.5V8.25H4.57004L2.91254 2.1675L16.57 9L2.91254 15.8325Z"
                fill="url(#paint0_linear)" />
            <defs>
                <linearGradient id="paint0_linear" x1="1" y1="9" x2="19" y2="9"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F88584" />
                    <stop offset="1" stop-color="#FEAB3C" />
                </linearGradient>
            </defs>
        </svg>
    </button>
</div>
</form>`;
        });
    });
};
mountchats();

// Date formatter here
function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "-" + day + "-" + year;
}