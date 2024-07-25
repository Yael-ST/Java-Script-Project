
function StartTheGame() {
    var song = new Audio("../audio/music2.mp3");
    song.play();
    cards = document.querySelectorAll('.cards');
    num = Math.floor(Math.random() * (6 - 1));
    //document.getElementById("music").onload();

    if (num % 2 === 0) {

        cards[num].style.display = 'block';
        cards[num + 1].style.display = 'block';
        console.log('1');
    }
    else {
        cards[num].style.display = 'block';
        cards[num - 1].style.display = 'block';
        console.log('2');
    }
    document.getElementById("t").innerHTML = `
               <div class="btnGroup">
            <span class="Btn" id="verifiBtn">
            </span>
            <span class="timer">
                <span id="counter"></span>
            </span>
        </div>
            `;
    countdown(60);
    cir = document.querySelectorAll('.c2');
    circles = document.querySelectorAll('.c1');
    circle= document.querySelectorAll('.c3');

    if (cards[4].style.display === 'block') {
        for (i = 0; i <= 21; i++) {
            circles[i].style.display = 'block';
            cir[i].style.display = 'none';
            circle[i].style.display = "none";

        }
    }

    else if (cards[2].style.display === 'block') {
        for (i = 0; i <= 21; i++) {
            cir[i].style.display = 'block';
            circles[i].style.display = 'none';
            circle[i].style.display = "none";

        }
    }

    else if (cards[0].style.display === 'block') {
        for (i = 0; i <= 21; i++) {
            cir[i].style.display = 'none';
            circles[i].style.display = 'none';
            circle[i].style.display = "block";

        }
    }
}

function BackPage() {
    console.log('1');
    document.getElementById("back").innerHTML = ` 
      <div class="backgroundMessage">
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <center>
                <div class="message ">
                    <br /> <br /> <br /> <br />
                    <h5>Are you sure you want to go out?</h5>
                    <br />
                    <button onclick="goOut()" id="yes" class=" btnYesOrNo">Yes</button>
                    <button onclick="stay()" id="no" class=" btnYesOrNo">No</button>

                    <br /> <br /> <br /> <br /><br />

                </div>
            </center>
        </div>
   `;
    //document.getElementById("music").pause();
   
    stop();
    //document.getElementById("music").play();

}
function stay() {
    document.getElementById("back").innerHTML = "";
    stop();

}
function goOut() {
    window.location.href = "../html/menu.html";
}
function help() {
    window.location.href = "../html/Instructions.html";

}
function newGame() {
    window.location.href = "../html/game.html";
}
function menu() {
    window.location.href = "../html/menu.html";
}

count = 0;
function found(event) {
    console.log(event);
    event.target.style.display = 'none';
    count++;
    text1 = document.querySelector('.text1')
    text1.innerHTML++;
    text2 = document.querySelector('.text2')
    text2.innerHTML--;
    if (count === 10) {
        window.location.href = "../html/win.html";
    }


}
flag = "on";
function stop() {
    if (flag === "on") {
        flag = "off";
      
        //to prevent the user from clicking
        cir = document.querySelectorAll('.c2');
        circles = document.querySelectorAll('.c1');
        if (cards[4].style.display === 'block') {
            for (i = 10; i < 20; i++) {//images
                if (circles[i].style.display === 'none') {
                    circles[i - 10].style.display = 'block';
                }
                else {
                    circles[i].style.display = 'none';
                    circles[i - 10].style.display = 'none';
                }
            }
        }
        else if (cards[2].style.display === 'block') {
            for (i = 10; i < 20; i++) {//images
                if (cir[i].style.display === 'none') {
                    cir[i - 10].style.display = 'block';
                }
                else {
                    cir[i].style.display = 'none';
                    cir[i - 10].style.display = 'none';
                }
            }
        }
        console.log("11");
    }
    else if (flag === "off") {
        flag = "on";
   
        console.log("22");
        var counter = document.getElementById("counter");
        if (counter.innerHTML === "") {
            countdown(60);
        }
        else {
            countdown(parseInt(parseFloat(counter.innerHTML) * 100));
        }
    
        //to allow the user to click
        cir = document.querySelectorAll('.c2');
        circles = document.querySelectorAll('.c1');
        if (cards[4].style.display === 'block') {
            for (i = 0; i < 10; i++) {//circles
                if (circles[i].style.display === 'none') {
                    circles[i + 10].style.display = 'block';//img
                    circles[i].style.display = 'block';//circle
                }
            }
        }
        else if (cards[2].style.display === 'block') {
            console.log("2222");

            for (i = 0; i < 10; i++) {//circles
                if (cir[i].style.display === 'none') {
                    cir[i + 10].style.display = 'block';//img
                    cir[i].style.display = 'block';//circle
                }
            }
        }
      
    }
   
}

function countdown(num) {
    var seconds = num;
    function tick() {
        if (flag === "on") {

            var counter = document.getElementById("counter");
            seconds--;
            counter.innerHTML =
                "0." + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } if (seconds < 11) {
                document.getElementById("counter").style.color = '#4cacb0';
            }
            if (seconds === 0) {
                document.getElementById("counter").innerHTML = "00.00";
                window.location.href = "../html/booz.html";
            }

        }

    }
    tick();
}
function Definitions() {
    stop();

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        document.getElementById("setting").style.visibility = "hidden";
        stop();
    }
    document.getElementById("setting").style.visibility = "visible";

}

function imgSetting1() {
    body = document.getElementById("body");
    body.style.backgroundImage = "url(../img/backSet4.png)";
    document.getElementById("setting").style.visibility = "hidden";
    stop();

}
function imgSetting2() {
    body = document.getElementById("body");
    body.style.backgroundImage = "url(../img/back2.png)";
    document.getElementById("setting").style.visibility = "hidden";
    stop();

}
function imgSetting3() {
    body = document.getElementById("body");
    body.style.backgroundImage = "url(../img/backSet3.png)";
    document.getElementById("setting").style.visibility = "hidden";
    stop();

}
