// variabls
const section = document.querySelector(".memory-game");
const livesCount = document.querySelector("span");
let playerLives = 6;

livesCount.textContent = playerLives;

const getData = () => [
  {
    imgSrc: "./images/apples.webp",
    name: "apples",
  },
  {
    imgSrc: "./images/banana.png",
    name: "banana",
  },
  {
    imgSrc: "./images/berry.jpg",
    name: "berry",
  },
  {
    imgSrc: "./images/date.jpg",
    name: "date",
  },
  {
    imgSrc: "./images/fruits.jpg",
    name: "fruits",
  },
  {
    imgSrc: "./images/kiwi.png",
    name: "kiwi",
  },
  {
    imgSrc: "./images/orange.png",
    name: "orange",
  },
  {
    imgSrc: "./images/strawberries.jpg",
    name: "strawberries",
  },
  {
    imgSrc: "./images/apples.webp",
    name: "apples",
  },
  {
    imgSrc: "./images/banana.png",
    name: "banana",
  },
  {
    imgSrc: "./images/berry.jpg",
    name: "berry",
  },
  {
    imgSrc: "./images/date.jpg",
    name: "date",
  },
  {
    imgSrc: "./images/fruits.jpg",
    name: "fruits",
  },
  {
    imgSrc: "./images/kiwi.png",
    name: "kiwi",
  },
  {
    imgSrc: "./images/orange.png",
    name: "orange",
  },
  {
    imgSrc: "./images/strawberries.jpg",
    name: "strawberries",
  },
];

//randomizing function -----------------------------------------
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5); // to randomized an array
  return cardData;
};

//cards
const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attaching info to cards--
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};
//check cards

const checkCards = (e) => {
  const clickedCard = e.target;

  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      //match
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((cards) => {
        cards.classList.remove("flipped");
        setTimeout(() => cards.classList.remove("toggleCard"), 1000);
      });
      if (playerLives === 0) {
        restart();
        alert("you Lost!!!");
        window.location.reload();
      }
      playerLives--;
      livesCount.textContent = playerLives;
    }
  }
};

const restart = () => {
  let cardData = randomize();
  let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
  });
  playerLives = 6;
  livesCount.textContent = playerLives;
};
cardGenerator();
