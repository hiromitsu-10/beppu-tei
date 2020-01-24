const slideItems = document.querySelectorAll('.slide-item')
const IntervalTime = 2000

let activeNum = 0

// 一枚目を表示する
slideItems[0].classList.add('active')

setInterval(() => {
    if (activeNum < 5) {
        slideItems[activeNum].classList.remove('active')
        slideItems[activeNum].classList.add('active')
        activeNum = activeNum + 1
    } else {
        activeNum = 0
        slideItems[0].classList.add('active')
    }
}, IntervalTime);