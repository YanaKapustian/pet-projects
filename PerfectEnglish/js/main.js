const btnsCheck = document.querySelectorAll('.main__check')
const btnsShow = document.querySelectorAll('.main__show')
const inputsAll = document.querySelectorAll('input')
const popUp = document.querySelector('.pop-up')

popUp.addEventListener('click', function(event) {
	if (event.target.className === 'pop-up__close') {
		popUp.classList.add('hidden')
	}
})

for(let check of btnsCheck) {
    check.addEventListener('click', function() {
        let idOfCheck = check.id;
        let inputs = document.getElementsByClassName(`${idOfCheck}`)
        let ticks = document.getElementsByClassName(`${idOfCheck}_tick`)
        let crosses = document.getElementsByClassName(`${idOfCheck}_cross`)
        for (let i = 0; i < inputs.length; i++){
            if (inputs[i].value === inputs[i].id) {
                ticks[i].classList.remove('hidden')
                crosses[i].classList.add('hidden')
            } else {
                crosses[i].classList.remove('hidden')
                ticks[i].classList.add('hidden')
            }
        }
    })
}

for(let show of btnsShow) {
    show.addEventListener('click', function() {
        let idOfShow = show.id;
        let answers = document.getElementsByClassName(`${idOfShow}_answer`)
        for (let i = 0; i < answers.length; i++) {
            answers[i].classList.toggle('hidden')
        }
    })
}

for(let input of inputsAll) {
    input.addEventListener('focus', function() {
        let idOfInput = input.classList[1]
        let answers = document.getElementsByClassName(`${idOfInput}_answer`)
        for (let i = 0; i < answers.length; i++) {
            answers[i].classList.add('hidden')
        }
    })
}
