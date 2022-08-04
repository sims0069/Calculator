const screen = document.querySelector('.screen')
const mid_screen = document.querySelector('.mid_screen')
const allBtns = document.querySelectorAll('.numpad button')

screen.innerHTML = '0'
mid_screen.innerHTML = ''


    allBtns.forEach(btn => {
        btn.onclick = function () {
            if (btn.classList.contains('clear')) {
                screen.innerHTML = '0'
                mid_screen = '0'
            } else if (btn.classList.contains('delete')) {
                mid_screen.innerText = mid_screen.innerText.slice(0, -1)
            } else if (btn.classList.contains('orange')) {
                screen.innerHTML = eval(mid_screen.innerHTML)
            } else if (btn.classList.contains('percentage')) {
                mid_screen.innerHTML = (mid_screen.innerHTML) / 100
            } else {
                mid_screen.innerHTML +=  btn.innerHTML
            }
        }
    })