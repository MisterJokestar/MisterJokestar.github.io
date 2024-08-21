String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

class Game
{
    constructor(gameObj = null)
    {
        var wordList = JSON.parse(localStorage.getItem("word-list"))
        if (gameObj == null)
        {
            this.words = wordList[0];
            this.longWords = wordList[1];
            this.wordNum = 0;
            this.word = "";
            this.scramble = "";
            this.testedWords = [];
            this.score = 0;
            this.hintNum = 0;
            this.reveal = [];
            this.message = ""
        }
        else
        {
            this.words = wordList[0];
            this.longWords = wordList[1];
            this.wordNum = gameObj.wordNum;
            this.word = gameObj.word;
            this.scramble = gameObj.scramble;
            this.testedWords = gameObj.testedWords;
            this.score = gameObj.score;
            this.hintNum = gameObj.hintNum;
            this.reveal = gameObj.reveal;
            this.message = gameObj.message;
        }
        return;
    }

    getObjectSimplified()
    {
        return {wordNum : this.wordNum, 
                word : this.word, 
                scramble : this.scramble, 
                testedWords : this.testedWords, 
                score : this.score, 
                hintNum : this.hintNum, 
                reveal : this.reveal, 
                message : this.message}
    }

    createScramble(num = -1)
    {
        if (num < 0)
        {
            this.wordNum = Math.floor(Math.random() * this.longWords.length);
        }
        else
        {
            this.wordNum = num;
        }
        this.word = this.longWords[this.wordNum]
        this.scramble = this.words[this.word].shuffle();
        this.testedWords = [];
        this.score = 0;
        for (var i = 0; i < this.scramble.length; i++)
        {
            this.reveal.push("_");
        }
        return this.scramble;
    }

    testInput(test)
    {
        if (this.testedWords.includes(test))
        {
            this.message = "You Already Tried that word!"
            return false;
        }
        else if (this.words.includes(test))
        {
            var chars_word = this.scramble.split("");
            var chars_test = test.split("");
            for (var char of chars_test)
            {
                if (chars_word.includes(char))
                {
                    chars_word.splice(chars_word.indexOf(char), 1);
                }
                else
                {
                    this.message = "Try only using letters in the scramble"
                    return false;
                }
            }
            this.testedWords.push(test);
            return true;
        }
        this.message = "That isn't in my list of words, sorry!"
        return false;
    }

    hint()
    {
        if (this.score >=2)
        {
            if ((this.reveal != this.words[this.word]) && (this.hintNum != this.scramble.length))
            {
                this.score -= 2;
                var revealNum = Math.floor(Math.random() * (this.scramble.length - this.hintNum))
                this.hintNum += 1;
                while (this.reveal[revealNum] != "_")
                {
                    revealNum++;
                }
                this.reveal[revealNum] = this.words[this.word][revealNum];
                return true
            }
            else
            {
                if (this.hintNum == this.scramble.length)
                {
                    this.message = "There are no more hints to give!"
                }
                else
                {
                    this.message = "You already guessed the word!"
                }
            }
        }
        else
        {
            this.message = "Score is too low to buy a hint, try finding more words!"
        }
        return false
    }
}

function submitWord()
{
    var game = getGame();
    var guess = document.getElementById("guess").value.trim().toUpperCase();
    document.getElementById("guess").value = "";
    var scramble = undefined;
    var reveal = undefined;
    var usedWords = undefined;
    if (game.testInput(guess))
    {
        if (game.words[game.word] == guess)
        {
            game.score += 5;
            game.message = "You unscrambled the word!"
            game.reveal = game.words[game.word];
            game.scramble = game.words[game.word];
            reveal = "";
            usedWords = "<li> * " + guess + " * </li>" + document.getElementById("used-words").innerHTML
        }
        else
        {
            game.score++;
            game.message = "You found a word!"
            usedWords = "<li> " + guess + " </li>" + document.getElementById("used-words").innerHTML
        }
    }
    setGame(game);
    UpdateHtml(game.scramble, guess, game.message, reveal, ("Score: " + game.score + "  |  Hints Used: " + game.hintNum), undefined, usedWords);
}

function getHint()
{
    var game = getGame();
    var hint = undefined;
    if (game.hint())
    {
        hint = game.reveal.join(" ");
    }
    setGame(game);

    UpdateHtml(undefined, undefined, game.message, hint, ("Score: " + game.score + "  |  Hints Used: " + game.hintNum), undefined, undefined);
}

function playGame(num = -1)
{
    var game = new Game();
    game.createScramble(num);
    setGame(game);
    UpdateHtml(game.scramble, "", "", "", "Score: 0  |  Hints Used: 0", "New Word!", "");
}

function daily()
{
    localStorage.setItem("mode", "daily")
    document.getElementById("mode").innerHTML = "Daily"
    var InnitialDate = new Date("January 01, 2024 00:00:00 UTC");
    var today = Date.now();
    var millisecsInDay = 86400000;
    var dayNum = Math.floor((today - InnitialDate) / millisecsInDay);
    if (dayNum.toString() == localStorage.getItem("daily-num"))
    {
        var game = getGame();
        var reveal = "";
        var usedWords = "";
        if (game.hintNum != 0 && game.reveal != game.scramble)
        {
            reveal = game.reveal;
        }
        for (word of game.testedWords)
        {
            if (game.reveal == game.scramble && word == game.scramble)
            {
                usedWords = "<li> * " + word + " * </li>" + usedWords
            }
            else
            {
                usedWords = "<li> " + word + " </li>" + usedWords;
            }
        }
        UpdateHtml(game.scramble, "", "", reveal, ("Score: " + game.score + "  |  Hints Used: " + game.hintNum), "Random Word!", usedWords);
    }
    else
    {
        localStorage.setItem("daily-num", dayNum.toString())
        playGame(dayNum);
    }
}

// function randomGame()
// {
//     playGame()
// }

function UpdateHtml(
    scramble = document.getElementById("scramble").innerHTML, 
    word = document.getElementById("word").innerHTML, 
    message = document.getElementById("message").innerHTML, 
    reveal = document.getElementById("reveal").innerHTML, 
    score = document.getElementById("score").innerHTML, 
    start = document.getElementById("start").innerHTML, 
    usedWords = document.getElementById("used-words").innerHTML
)
{
    document.getElementById("scramble").innerHTML = scramble;
    document.getElementById("word").innerHTML = word;
    document.getElementById("message").innerHTML = message;
    document.getElementById("reveal").innerHTML = reveal;
    document.getElementById("score").innerHTML = score;
    document.getElementById("start").innerHTML = start;
    document.getElementById("used-words").innerHTML = usedWords;
}

function getGame()
{
    var mode = localStorage.getItem("mode");
    if (mode == "daily")
    {
        return new Game(JSON.parse(localStorage.getItem("daily")));
    }
    else
    {
        return new Game(JSON.parse(localStorage.getItem("game-object")));
    }
}

function setGame(game)
{
    var mode = localStorage.getItem("mode");
    if (mode == "daily")
    {
        localStorage.setItem("daily", JSON.stringify(game.getObjectSimplified()));
    }
    else
    {
        localStorage.setItem("game-object", JSON.stringify(game.getObjectSimplified()));
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    const start = document.getElementById("start");
    start.addEventListener('click', () => 
    {
        if (start.innerHTML == " Start! ")
        {
            daily();
        }
        else
        {
            localStorage.setItem("mode", "random");
            document.getElementById("mode").innerHTML = "Random"
            document.getElementById("daily").hidden = false;
            playGame();
        }
    });

    const dailyButton = document.getElementById("daily");
    dailyButton.addEventListener('click', () =>
    {
        dailyButton.hidden = true;
        daily();
    })

    const text = document.getElementById("submit");
    text.addEventListener('click', submitWord)

    const input = document.getElementById("guess");
    input.addEventListener('keypress', (event) =>
        {
            if (event.key == "Enter") {
                submitWord();
            }
        });

    const hint = document.getElementById("hint");
    hint.addEventListener('click', getHint);

    const showInstructions = document.getElementById("show-instructions");
    showInstructions.addEventListener('click', () => 
        {
            document.getElementById("instructions").hidden = false;
        });

    const hideInstructions = document.getElementById("hide-instructions");
    hideInstructions.addEventListener('click', () => 
        {
            document.getElementById("instructions").hidden = true
        });
});