(function(){

    const timeEl = document.querySelector('.time')
    // setInterval(() => {
    //     실행식
    // }, time)

    // setInterval(() => {
    //     document.write('2초마다 실행됨, 시간간격 설정해야함')
    // }, 1000)

    

    // setInterval(() => {

    //     const time = new Date()
    
    //     const hour = time.getHours()
    //     // 변수 타임의 날짜에서 시간만 가져오는
    //     const min = time.getMinutes()
    //     const sec = time.getSeconds()

    //     timeEl.innerHTML = `${hour} : ${min} : ${sec}`

    // }, 1000)

    const setInterval = document.querySelector
    const handleSet = () => {
        const time = new Date()
    
        const hour = String(time.getHours()).padStart(2, 0)
        // 변수 타임의 날짜에서 시간만 가져오는
        const min = String(time.getMinutes()).padStart(2, 0)
        const sec = String(time.getSeconds()).padStart(2, 0)
        timeEl.innerHTML = `${hour} : ${min} : ${sec}`
    }

    handleSet.style.fontWeight = 900

    setInterval(handleSet, 1000)

})()