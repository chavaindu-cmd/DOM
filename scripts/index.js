const words = 
[
    "javascript",
    "html",
    "css",
    "computer",
    "website",
    "developer"
];

let score = 0;
let time = 10;

function addWordToDOM()
{
    const randomWord = Math.floor(Math.random() * words.length);

    document.getElementById("word").innerText = words[randomWord];
}

function updateScore()
{
    score++;

    document.getElementById("score").innerText = score;
}

const text = document.getElementById('text');
text.addEventListener("input",function()
{
    const currentWord = document.getElementById("word").innerText;
    if (text.value === currentWord)
    {
        updateScore();
        addWordToDOM();
        time = time + 5;
        text.value = "";

    }
});


function updateTime()
{
    time--;
    document.getElementById("time").innerText = time + "s";
    if (time === 0)
    {
        gameOver();
    }
}

function gameOver()
{
    clearInterval(timer);
    document.getElementById("end-game-container").style.display = "flex";
    document.getElementById("end-game-container").innerHTML = "Game Over! Your final score is " + score +
    `<br><buttononclick="location.reload()">Restart</button>`;

}

addWordToDOM();
const timer = setInterval(updateTime,3000);
