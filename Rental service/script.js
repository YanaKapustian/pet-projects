const locationBtn = document.querySelector('#location')
const locationField = document.querySelector('.search__field-location')
const priceBtn = document.querySelector('#price')
const priceField = document.querySelector('.search__field-price')
const arrowBtnLocation = document.querySelector('#svg__location')
const arrowBtnPrice = document.querySelector('#svg__price')
const spanLocation = document.querySelector('#location>span')
const spanPrice = document.querySelector('#price>span')
const btn = document.querySelector('.search__btn')
const blockPartners = document.querySelector('.partners')
const items = document.querySelectorAll('.properties__item')
const cities = document.querySelectorAll('.properties__city')

locationBtn.addEventListener('click', ()=> {
    locationField.classList.toggle('hidden')
    if (!arrowBtnLocation.classList.contains('open')) {
        arrowBtnLocation.classList.add('open');
        arrowBtnLocation.classList.remove('close')
    } else if (arrowBtnLocation.classList.contains('open')) {
        arrowBtnLocation.classList.add('close')
        arrowBtnLocation.classList.remove('open')
    }
})
priceBtn.addEventListener('click', ()=> {
    priceField.classList.toggle('hidden')
    if (!arrowBtnPrice.classList.contains('open')) {
        arrowBtnPrice.classList.add('open');
        arrowBtnPrice.classList.remove('close')
    } else if (arrowBtnPrice.classList.contains('open')) {
        arrowBtnPrice.classList.add('close')
        arrowBtnPrice.classList.remove('open')
    }
})
locationField.addEventListener('click', (event)=> {
    spanLocation.innerText = event.target.innerText
    arrowBtnLocation.classList.add('close')
    arrowBtnLocation.classList.remove('open')
    locationField.classList.add('hidden')
})
priceField.addEventListener('click', (event)=> {
    spanPrice.innerText = event.target.innerText
    arrowBtnPrice.classList.add('close')
    arrowBtnPrice.classList.remove('open')
    priceField.classList.add('hidden')
})

btn.addEventListener('click', () => {
    blockPartners.classList.add('hidden')
    if (spanLocation.innerText != "Location") {
        let chosenLocation = spanLocation.innerText;
        showItems();
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].innerText != chosenLocation) {
                items[i].classList.add('hidden')
            }
        }
    }
})

function showItems() {
    items.forEach(elem => {
        elem.classList.remove('hidden')
    })
}

const track = document.querySelector('.reviews__track')
const dots = document.querySelector('.reviews__dots')
const dotsList = document.querySelectorAll('.reviews__dot')
const container = document.querySelector('.container')

let clientWidth = container.clientWidth;

dots.addEventListener('click', (event)=> {
    let current = event.target
    if (current.classList.contains('reviews__dot')) {
        if (!current.classList.contains('active')) {
            clear()
            current.classList.remove('passive')
            current.classList.add('active')
        }
        track.animate(
            {transform: `translateX(-${clientWidth * current.id}px)`},
            {
                duration: 600,
                fill: 'forwards'
            }
        )
    }
})

function clear() {
    for (let i = 0; i < dotsList.length; i++) {
        if (dotsList[i].classList.contains('active')) {
            dotsList[i].classList.remove('active')
            dotsList[i].classList.add('passive')
        }
    }
}

const svgHeart = document.querySelectorAll('.properties__name svg')

for (let i = 0; i < svgHeart.length; i++) {
    svgHeart[i].addEventListener('click', () => {
        svgHeart[i].style.fill = "#E61E14"
    })
}


