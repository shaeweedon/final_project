// hamburger function

const hamburger = document.getElementById('burger-icon');
const sideMenu = document.getElementById('side-menu');
const crossButton = document.getElementById('cross-button');

function burgerClick() {
    sideMenu.style.opacity = '1';
    sideMenu.style.visibility = 'visible';
    hamburger.style.visibility = 'hidden';
    hamburger.style.opacity = '0';
}

function crossClick(){
    sideMenu.style.opacity = '0';
    sideMenu.style.visibility = 'hidden';
    hamburger.style.visibility = 'visible';
    hamburger.style.opacity = '1';
}

hamburger.addEventListener('click', burgerClick);
crossButton.addEventListener('click', crossClick);


//change boss picture

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const boss = document.getElementById('boss');
const bossImage = boss.querySelector('img.boss-1');
const bossName = boss.querySelector('h2');
const bossNumber = boss.querySelector('p');
const bossEmail = boss.querySelector('p.email');



function rightChannel() {

    if (bossImage.getAttribute('src') === 'assets/andrew-philpot-pro-scaff.png'){
        bossImage.setAttribute('src', 'assets/simon-gardner-pro-scaff.png');
        bossName.innerHTML = 'Simon <span class="last-name">Gardner</span>';
        bossNumber.innerHTML = '<img class="gicon" src="assets/green-phone.png" alt=""> 0447 292 144';
        bossEmail.innerHTML = '<img class="gicon" src="assets/green-envelope.png" alt=""> simon@proscafftas.com.au';


    } else if (bossImage.getAttribute('src') === 'assets/simon-gardner-pro-scaff.png'){
        bossImage.setAttribute('src','assets/methew-donaghy-pro-scaff.png')
        bossName.innerHTML = 'Matthew <span class="last-name">Donaghy</span>';
        bossNumber.innerHTML = '<img class="gicon" src="assets/green-phone.png" alt=""> 0410 111 753';
        bossEmail.innerHTML = '<img class="gicon" src="assets/green-envelope.png" alt=""> matthew@proscafftas.com.au';

    } else if (bossImage.getAttribute('src') === 'assets/methew-donaghy-pro-scaff.png'){
        bossImage.setAttribute('src', 'assets/andrew-philpot-pro-scaff.png')
        bossName.innerHTML = 'Andrew <span class="last-name">Philpott</span>';
        bossNumber.innerHTML = '<img class="gicon" src="assets/green-phone.png" alt=""> 0447 295 445';
        bossEmail.innerHTML = '<img class="gicon" src="assets/green-envelope.png" alt=""> andrew@proscafftas.com.au';

    }

}

function leftChannel() {

    if (bossImage.getAttribute('src') === 'assets/andrew-philpot-pro-scaff.png'){
        bossImage.setAttribute('src', 'assets/methew-donaghy-pro-scaff.png');
        bossName.innerHTML = 'Matthew <span class="last-name">Donaghy</span>';
        bossNumber.innerHTML = '<img class="gicon" src="assets/green-phone.png" alt=""> 0410 111 753';
        bossEmail.innerHTML = '<img class="gicon" src="assets/green-envelope.png" alt=""> matthew@proscafftas.com.au';


    } else if (bossImage.getAttribute('src') === 'assets/methew-donaghy-pro-scaff.png'){
        bossImage.setAttribute('src','assets/simon-gardner-pro-scaff.png')
        bossName.innerHTML = 'Simon <span class="last-name">Gardner</span>';
        bossNumber.innerHTML = '<img class="gicon" src="assets/green-phone.png" alt=""> 0447 292 144';
        bossEmail.innerHTML = '<img class="gicon" src="assets/green-envelope.png" alt=""> simon@proscafftas.com.au';


    } else if (bossImage.getAttribute('src') === 'assets/simon-gardner-pro-scaff.png'){
        bossImage.setAttribute('src', 'assets/andrew-philpot-pro-scaff.png')
        bossName.innerHTML = 'Andrew <span class="last-name">Philpott</span>';
        bossNumber.innerHTML = '<img class="gicon" src="assets/green-phone.png" alt=""> 0447 295 445';
        bossEmail.innerHTML = '<img class="gicon" src="assets/green-envelope.png" alt=""> andrew@proscafftas.com.au';

    }

}

rightButton.addEventListener('click', rightChannel);
leftButton.addEventListener('click', leftChannel);





// click event that bring you to the boss description



const andrewDropdown = document.querySelector('.dropdown-list');
const simonDropdown = document.querySelector('.dropdown-list1');
const matthewDropdown = document.querySelector('.dropdown-list2');

function setBossContent(name, number, email, imgSrc) {
    bossName.innerHTML = name;
    bossNumber.innerHTML = `<img class="gicon" src="assets/green-phone.png" alt=""> ${number}`
    bossEmail.innerHTML = `<img class="gicon" src="assets/green-envelope.png" alt=""> ${email}`
    bossImage.setAttribute('src', imgSrc)
}

andrewDropdown.addEventListener('click', (event) => {
    event.preventDefault()
    boss.scrollIntoView({behavior: 'smooth'})
    setBossContent('Andrew <span class="last-name"> Philpott </span>', '0447 295 445', 'andrew@proscafftas.com.au', 'assets/andrew-philpot-pro-scaff.png')
});

simonDropdown.addEventListener('click', (event) => {
    event.preventDefault()
    boss.scrollIntoView({behavior: 'smooth'})
    setBossContent('Simon <span class="last-name"> Gardner </span>', '0447 292 144', 'simon@proscafftas.com.au', 'assets/simon-gardner-pro-scaff.png')
});

matthewDropdown.addEventListener('click', (event) => {
    event.preventDefault()
    boss.scrollIntoView({behavior: 'smooth'})
    setBossContent('Mathew <span class="last-name"> Donaghy </span>', '0410 111 753', 'mathew@proscafftas.com.au', 'assets/methew-donaghy-pro-scaff.png')
});



const form = document.getElementById('myform')

// store all id inputs into object that equals to their weight
const inputWeights = {
    '3sta': 20,
    '2.5sta': 16.7,
    '2sta': 13.3,
    '1.5sta': 10,
    '1sta': 6.7,
    '0.5sta': 3.3,
    '3leg': 14,
    '2.4leg': 11.2,
    '1.8leg': 8.4,
    '1.2leg': 5.6,
    '0.7leg': 3.3,
    '0.5leg': 2.4,
    '24tran': 10,
    '18tran': 7.5,
    '12tran': 5,
    '09tran': 3.75,
    '07tran': 2.9,
    '05tran': 2.5,
    '30sp': 23,
    '24sp': 18.4,
    '18sp': 13.8,
    '12sp': 9.2,
    '09sp': 6.9,
    '07sp': 5.3
  };
  
  // function 

  function calculateTotalWeight(event) {

    //prevent it from submiting
    event.preventDefault();
  
    // inputs = all the inputs with the type number 
    const inputs = document.querySelectorAll('#myform input[type="number"]');
    let totalWeight = 0;
  
    inputs.forEach(function (input) {

        const value = parseInt(input.value); // convert string number into a number

        const weight = inputWeights[input.id]; // looks up the weight with the id
      
        if (!isNaN(value)) { // checks if value is a valid number
        totalWeight += value * weight;
      }
    });
  
    const tons = Math.ceil(totalWeight / 1000); // ceil rounds up to nearest whole number
    const additionalCost = 80 * tons; // weight times $80

    const resultElement = document.getElementById('result'); 
    resultElement.textContent = `= Total Weight: ${totalWeight} kg, Cost Per Week: $${additionalCost}`;
  }

  form.addEventListener('submit', calculateTotalWeight);
  