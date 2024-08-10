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
        this.scramble = this.word.shuffle();
        this.testedWords = [];
        this.score = 0;
        for (var i = 0; i < this.word.length; i++)
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
            var chars_word = this.word.split("");
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
            if (this.reveal != this.word)
            {
                this.hintNum += 1;
                this.score -= 2;
                var revealNum = Math.floor(Math.random() * (this.word.length - this.hintNum))
                while (this.reveal[revealNum] != "_")
                {
                    revealNum++;
                }
                this.reveal[revealNum] = this.word[revealNum];
                return true
            }
            else
            {
                this.message = "You already guessed the word!"
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
    var game = new Game(JSON.parse(localStorage.getItem("game-object")));
    var guess = document.getElementById("guess").value.toUpperCase();
    if (game.testInput(guess))
    {
        if (game.word == guess)
        {
            game.score += 5;
            game.message = "You unscrambled the word!"
            game.reveal = game.word;
            document.getElementById("scramble").innerHTML = game.word;
            document.getElementById("reveal").innerHTML = "";
        }
        else
        {
            game.score++;
            game.message = "You found a word!"
        }
    }
    localStorage.setItem("game-object", JSON.stringify(game.getObjectSimplified()));

    document.getElementById("word").innerHTML = guess;
    document.getElementById("message").innerHTML = game.message;
    document.getElementById("score").innerHTML = ("Score: " + game.score + "  |  Hints Used: " + game.hintNum);
}

function getHint()
{
    var game = new Game(JSON.parse(localStorage.getItem("game-object")));
    if (game.hint())
    {
        document.getElementById("reveal").innerHTML = game.reveal.join(" ");
    }
    localStorage.setItem("game-object", JSON.stringify(game.getObjectSimplified()));

    document.getElementById("message").innerHTML = game.message;
    document.getElementById("score").innerHTML = ("Score: " + game.score + "  |  Hints Used: " + game.hintNum);
}

function playGame()
{
    var game = new Game();
    game.createScramble();
    localStorage.setItem("game-object", JSON.stringify(game.getObjectSimplified()));

    document.getElementById("scramble").innerHTML = game.scramble;
    document.getElementById("word").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("reveal").innerHTML = "";
    document.getElementById("score").innerHTML = "Score: 0  |  Hints Used: 0";
    document.getElementById("start").innerHTML = "New Word!";
}