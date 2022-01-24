let body = document.getElementById('body');
let head = document.getElementById('head');
let hr = document.getElementById('hr');
let Timer = document.getElementById('timer');
let Click = document.getElementById('cps');
let Score = document.getElementById('score');
let LastScore = document.getElementById('last_score');
let Restart = document.getElementById('restart');
let restart_img = document.getElementById('restart_img');
let main = document.getElementById('main');
let main_text = document.getElementById('main_text');
let light = document.getElementById('light');
let light_img = document.getElementById('light_img');
let main_score = 0;
let main_timer = 0;
let click;
const main_container = document.querySelector('.main_container');

light.onclick = function () {
    if (body.style.backgroundColor != 'rgb(228, 226, 226)') {
        body.style.backgroundColor = 'rgb(228, 226, 226)';
        head.style.color = 'rgb(36, 37, 38)';
        restart_img.src = 'Images/black.png';
        main.style.backgroundColor = 'rgb(36, 37, 38)';
        main.style.color = 'rgb(228, 226, 226)';
        light.style.borderColor = 'rgb(36, 37, 38)';
        light_img.src = 'Images/moon.png';
        hr.color = black;
    } else {
        body.style.backgroundColor = 'rgb(36, 37, 38)';
        head.style.color = 'rgb(228, 226, 226)';
        restart_img.src = 'Images/white.png';
        main.style.backgroundColor = 'rgb(228, 226, 226)';
        main.style.color = 'rgb(36, 37, 38)';
        light.style.borderColor = 'rgb(228, 226, 226)';
        light_img.src = 'Images/sun.png';
        hr.color = white;
    }
}
main_container.addEventListener('click', () => {
    let effector = document.createElement('span');
    effector.style.cssText = `
    position: absolute;
    height: 1000px;
    width: 1000px;
    top: 50%;
    left: 50%;
    background: linear-gradient(83.98deg, rgba(231, 56, 56, 0.82) 4.02%, rgba(192, 84, 7, 0.82) 100%);
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: -1;
    border-radius: 50%;
    animation: main_animation 1s ease;
    `;
    effector.addEventListener('animationend', (e) => {
        e.target.remove();
    })
    main_container.appendChild(effector);
})
main.addEventListener("click", myFunction, {
    once: true
})
main.addEventListener("click", myFunction1, {
    once: true
})
main.addEventListener("click", myFunction2, {
    once: true
})
main.addEventListener("click", myFunction3, {
    once: true
})
main.addEventListener("click", myFunction4, {
    once: true
})
main.addEventListener("click", myFunction5, {
    once: true
})

function Function() {
    main_text.innerHTML = "";
    main_score = main_score + 1;
    Score.innerHTML = "Score: " + main_score;
    Restart.disabled = true;
}

function myFunction() {
    setTimeout(function () {
        main.disabled = true;
        Restart.disabled = true;
    }, 5000);
}

function myFunction1() {
    setTimeout(function () {
        main_timer = 1;
        Timer.innerHTML = "Timer: " + main_timer;
        let click = main_score / 1;
        Click.innerHTML = "Click/s: " + Math.round(click * 100) / 100;
        Restart.disabled = true;
    }, 1000);
}

function myFunction2() {
    setTimeout(function () {
        main_timer = 2;
        Timer.innerHTML = "Timer: " + main_timer;
        let click = main_score / 2;
        Click.innerHTML = "Click/s: " + Math.round(click * 100) / 100;
        Restart.disabled = true;
    }, 2000);
}

function myFunction3() {
    setTimeout(function () {
        main_timer = 3;
        Timer.innerHTML = "Timer: " + main_timer;
        let click = main_score / 3;
        Click.innerHTML = "Click/s: " + Math.round(click * 100) / 100;
        Restart.disabled = true;
    }, 3000);
}

function myFunction4() {
    setTimeout(function () {
        main_timer = 4;
        Timer.innerHTML = "Timer: " + main_timer;
        let click = main_score / 4;
        Click.innerHTML = "Click/s: " + Math.round(click * 100) / 100;
        Restart.disabled = true;
    }, 4000);
}

function myFunction5() {
    setTimeout(function () {
        main_timer = 5;
        Timer.innerHTML = "Timer: " + main_timer;
        let click = main_score / 5;
        Click.innerHTML = "Click/s: " + Math.round(click * 100) / 100;
        Restart.disabled = false;
    }, 5000);
}

function reFunction() {
    restart.disabled = true;
    last_score.innerHTML = "Last CPS: " + main_score / 5;
    main_score = 0;
    main_timer = 0;
    click = 0;
    Score.innerHTML = "Score: " + main_score;
    Timer.innerHTML = "Timer: " + main_timer;
    Click.innerHTML = "Click/s: " + Math.round(click * 100) / 100;
    main_text.innerHTML = "CLICK HERE TO START CPS TEST";
    main.disabled = false;
    main.addEventListener("click", myFunction, {
        once: true
    })
    main.addEventListener("click", myFunction1, {
        once: true
    })
    main.addEventListener("click", myFunction2, {
        once: true
    })
    main.addEventListener("click", myFunction3, {
        once: true
    })
    main.addEventListener("click", myFunction4, {
        once: true
    })
    main.addEventListener("click", myFunction5, {
        once: true
    })
}