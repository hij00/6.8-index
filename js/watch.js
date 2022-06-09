(function(){
    const dayEl = document.querySelector('.day')
    const hoursEl = document.querySelector('.hours')
    const minEl = document.querySelector('.min')
    const secEl = document.querySelector('.sec')

    // // 날짜 및 시간 가져오는 방법 : new Date
    // const time = new Date()

    // const hours = time.getHours()
    // // 시간
    // const min = time.getMinutes()
    // // 분
    // const sec = time.getSeconds()
    // // 초

    // setInterval(() => {
    //     hoursEl.innerHTML = hours
    //     minEl.innerHTML = min
    //     secEl.innerHTML = sec
    // }, 1000)
    // new Date가 바깥에 있으면 실시간으로 갱신 안됨, 
    // new Date 자체를 setInterval안에 적용

    setInterval(() => {
        // 날짜 및 시간 가져오는 방법 : new Date
        const time = new Date()

        const hours = String(time.getHours()).padStart(2, '0')
        // 시간
        const min = String(time.getMinutes()).padStart(2, '0')
        // 분
        const sec = String(time.getSeconds()).padStart(2, '0')
        // 초
        hoursEl.innerHTML = hours
        minEl.innerHTML = min
        secEl.innerHTML = sec
    }, 1000)
    // 1초마다 새로고침..?!
    // 1자리는 0이 안 붙어서 나옴 => 조건문 or padstart

    // padstart 반드시 문자로 작성, 문자열로 나오기때문에
    // 문자열의 시작에 붙여주는 
    // 문자로 바꿔주는 String()

    // 아날로그 시계 만들기???????

    // p태그 자체에 넣을수도 있음(span 설정 안해도 됨!)
    // html>>
    // <p></p>

    // js>>
    // pEl = document.querySelector('p')
    // pEl.innerHTML = `${hours} : ${} : ${}`

    // 팝업창 오늘은 그만보기도 타임펑션으로 하는거임!!!!

})()