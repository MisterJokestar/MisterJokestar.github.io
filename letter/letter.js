document.addEventListener("DOMContentLoaded", () => {
  const message = `
Dear Kaitlyn,
<br>I wish for you to know how much I love you.
<br>So I am sending you this letter, I hope it reaches you well.
<br>To show my love, I will create an acrostic.
<br>
<br>Kaitlyn is the woman I choose to marry.
<br>Any other fails to compare to her.
<br>I yearn for the long years we choose to spend with each other.
<br>The day nears when I will get to declare my commitment before many others.
<br>Lovingly I will hold her the rest of our days here in this life.
<br>Young we are now, and old we will become, but the whole time I will be hers.
<br>Never before was there a girl I wanted to be with like Kaitlyn.
<br>
<br>Your loving fiance,
<br>James
`;

  const unopenedEnvelopeSrc = "images/pink-envelope.png";

  const openedEnvelopeSrc = "images/pink-envelope-open.png";

  const envelope = document.getElementById("letter-envelope");

  const letter = document.getElementById("letter-text");

  function openLetter() {
    letter.hidden = false;
    envelope.src = openedEnvelopeSrc;
  }

  envelope.addEventListener("click", () => {
    openLetter();
  });
});
