export const getPlayingCards = ({ allCards, playingCardsNumber }) => {
  let doubleCards = [];
  if (allCards?.length) {
    for (let i = allCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = allCards[i];
      allCards[i] = allCards[j];
      allCards[j] = k;
    }
    const selectedCards = allCards.slice(0, playingCardsNumber);
    if (selectedCards?.length) {
      doubleCards = JSON.parse(
        JSON.stringify(selectedCards.concat(selectedCards))
      );
      doubleCards = doubleCards.map((card, i) => {
        let obj = {};
        obj["visibility"] = false;
        obj["disable"] = true;
        obj["uniqueId"] = `card${i}`;
        obj["avatar_url"] = card.avatar_url;
        obj["id"] = card.id;
        return obj;
      });
      for (let i = doubleCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = doubleCards[i];
        doubleCards[i] = doubleCards[j];
        doubleCards[j] = k;
      }
    }
  }
  return [...doubleCards];
};
