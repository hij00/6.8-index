(function(){

    const btn = document.querySelector('button')
    const mBox = document.querySelector('.me_box')

    const handleClick = () => {
        mBox.classList.add('act')

        setTimeout(() => {
            mBox.classList.remove('act')
        }, 1500)
    }

    

    btn.addEventListener('click', handleClick)

})()