(function(){
  
    // setTimeout( ()=> {
    //     실행식
    // }, time)
    // 지정한 시간 안에 한번만 실행함
    // 시간 단위는 천 단위로, 1초=1000 / s 안 붙임 

    // setTimeout(() => {
    //     document.write('2초 뒤에 실행됨니당')
    // }, 2000)


    const handleTime = () => {
        document.write('2 seconds,,,')
    }
    setTimeout(handleTime, 2000)
    // 실행식 밖으로 빼기,, 실행식 = 함수
    

})()