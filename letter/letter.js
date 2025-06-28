const unopenedEnvelopeSrc = "images/pink-envelope.png";

const openedEnvelopeSrc = "images/pink-envelope-open.png";

const message = `
Dear Kaitlyn,

I wish for you to know how much I love you.
So I am sending you this letter, I hope it reaches you well.
To show my love, I will create am acrostic.

Kaitlyn is the woman I choose to marry.
Any other fails to compare to her.
I yearn for the long years we choose to spend with each other.
The day nears when I will get to declare my commitment before many others.
Lovingly I will hold her the rest of our days here in this life.
Young we are now, and old we will become, but the whole time I will be hers.
Never before was there a girl I wanted to be with like Kaitlyn.

Your loving fiance,
James
`;

function windowCheck() {
  return window.innerWidth <= 800 && window.innerHeight <= 800;
}

document.addEventListener("DOMContentLoaded", () => {
  if (windowCheck()) {
    document
      .getElementById("stylesheet")
      .setAttribute("href", "letter_mobile.css");
  }

  const envelope = document.getElementById("letter-envelope");

  const letterText = document.getElementById("letter-text");

  const letterPage = document.getElementById("letter-contents");

  function openLetter() {
    letterText.innerText = message;
    letterPage.hidden = false;
    envelope.src = openedEnvelopeSrc;
  }

  envelope.addEventListener("click", () => {
    openLetter();
  });
});
