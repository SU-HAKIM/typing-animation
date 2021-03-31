//target = 15 April,2021.
let showTime = document.getElementById('demo')

function countDown() {
    let goal = new Date(2021, 3, 15, 10, 0, 0).getTime()
    let toDay = new Date().getTime()
    let difference = goal - toDay
    let day = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor(((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((((difference % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000)

    showTime.innerHTML = `${day}d,${hours}:${minutes}:${seconds}`
    let finish = setTimeout(countDown, 1000);
    if (day < 0) {
        clearTimeout(finish)
    }
}
countDown()