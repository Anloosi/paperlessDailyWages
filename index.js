const oneHour = document.querySelectorAll('.minutes')
const gauge = document.getElementById('gauge')
const percentage = document.getElementById('percentage')
const unutilised = document.getElementById('unutilised')

updateHours()

oneHour.forEach((hour, idx) => {
    hour.addEventListener('click', () => highlightMinutes(idx))
})

function highlightMinutes(idx) {
    if (idx===7 && oneHour[idx].classList.contains("complete")) idx--;
    else if(oneHour[idx].classList.contains('complete') && !oneHour[idx].nextElementSibling.classList.contains('complete')) {
        idx--
    }

    oneHour.forEach((hour, idx2) => {
        if(idx2 <= idx) {
            hour.classList.add('complete')
        } else {
            hour.classList.remove('complete')
        }
    })

    updateHours()
}

function updateHours() {
    const eightHours = document.querySelectorAll('.minutes.complete').length
    const maximumHours = oneHour.length

    if(eightHours === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${eightHours / maximumHours * 205}px`
        percentage.innerText = `${eightHours / maximumHours * 100}%`
    }

    if(eightHours === maximumHours) {
        unutilised.style.visibility = 'hidden'
        unutilised.style.height = 0
    } else {
        unutilised.style.visibility = 'visible'
       gauge.innerText = `${8- (60 * eightHours / 60)}hrs`
    
    } 
}