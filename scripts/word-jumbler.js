function wordJumbler(sentence) {
  let jumbledSentence = "";
  let randomIndex = getRandomInt(sentence.length);

  while (sentence.length > 0) {
    randomIndex = getRandomInt(sentence.length);
    jumbledSentence += sentence.charAt(randomIndex);
    sentence = removeLetter(sentence, randomIndex);
  }

  return jumbledSentence;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function removeLetter(sentence, index) {
  return sentence.substr(0, index) + sentence.substr(index + 1);
}
