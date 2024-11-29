let cards = document.querySelectorAll(".card");
let stadiumContainer = document.querySelector(".stadium-image");
let addButton = document.querySelector(".add-player-card");
let addinContainer = document.querySelector(".adding-container");
let list_adding = document.querySelector(".available-create-cards");
let carding = document.querySelector(".carding");

let listedContainer = document.querySelector(".cards-exist");
let listed_cards = document.querySelectorAll(".listed-card");

let poste = document.querySelector(".player_post");
let backBttn = document.querySelector(".back-button");

let ProfilePic = document.getElementById("player-picture");
let profileUpload = document.getElementById("pro-file");

let FlagPic = document.getElementById("flag-picture");
let FlagUpload = document.getElementById("flag-file");

let leaguePic = document.getElementById("league-picture");
let leagueUpload = document.getElementById("league-file");

let postChoose = document.getElementById("position-selector");
let gkChoice = document.querySelector(".gk-created");
let usualChoice = document.querySelector(".created-stats");

let submitBttn = document.querySelector(".submit-button");
let PlayerName = document.querySelector("#Player-name");
let PlayerRating = document.querySelector("#Player-rating");

let pacing = document.getElementById("pacing");
let shooting = document.getElementById("Shooting");
let passing = document.getElementById("Passing");
let dribbling = document.getElementById("Dribbling");
let defending = document.getElementById("Defending");
let physical = document.getElementById("Physical");

let diving = document.getElementById("Diving");
let handling = document.getElementById("Handling");
let kicking = document.getElementById("Kicking");
let reflexes = document.getElementById("Reflexes");
let speed = document.getElementById("Speed");
let positioning = document.getElementById("Positioning");

let main = document.querySelector(".main-button");

let allCards = document.querySelector(".all-cards");



let currentCard = null;
var clickedPost = null;

submitBttn.onclick = function () {
    let newCard;
    if (postChoose.value !== "GK") {
        newCard = `<div class="listed-card" data-id="card${Date.now()}">
                    <img src="images/empty-card.webp" alt="">
                    <div class="listed-card-stats">
                        <div class="listed-stats">
                            <p class="player_rate">${PlayerRating.value}</p>
                            <p class="player_post">${postChoose.value}</p>
                        </div>
                        <div class="listed-image">
                            <img src="${ProfilePic.src}" alt="">
                        </div>
                        <div class="listed-name">
                            <p>${PlayerName.value}</p>
                        </div>
                        <div class="listed-player-stats">
                            <div class="lpacing">
                                <p>PAC</p>
                                <p>${pacing.value}</p>
                            </div>
                            <div class="lshooting">
                                <p>SHO</p>
                                <p>${shooting.value}</p>
                            </div>
                            <div class="lpassing">
                                <p>PAS</p>
                                <p>${passing.value}</p>
                            </div>
                            <div class="ldribbling">
                                <p>DRI</p>
                                <p>${dribbling.value}</p>
                            </div>
                            <div class="ldefending">
                                <p>DEF</p>
                                <p>${defending.value}</p>
                            </div>
                            <div class="lphysical">
                                <p>PHY</p>
                                <p>${physical.value}</p>
                            </div>
                        </div>
                        <div class="listed-flag">
                            <img src="${FlagPic.src}" alt="">
                        </div>
                        <div class="listed-league">
                            <img src="${leaguePic.src}" alt="">
                        </div>
                    </div>
                </div>`

    } else {
        newCard = `<div class="listed-card" data-id="card${Date.now()}">
                    <img src="images/empty-card.webp" alt="">
                    <div class="listed-card-stats">
                        <div class="listed-stats">
                            <p class="player_rate">${PlayerRating.value}</p>
                            <p class="player_post">${postChoose.value}</p>
                        </div>
                        <div class="listed-image">
                            <img src="images/Pele-No-Background.png" alt="">
                        </div>
                        <div class="listed-name">
                            <p>${PlayerName.value}</p>
                        </div>
                        <div class="listed-player-stats">
                            <div class="lpacing">
                                <p>DIV</p>
                                <p>${diving.value}</p>
                            </div>
                            <div class="lshooting">
                                <p>HAN</p>
                                <p>${handling.value}</p>
                            </div>
                            <div class="lpassing">
                                <p>KIC</p>
                                <p>${kicking.value}</p>
                            </div>
                            <div class="ldribbling">
                                <p>REF</p>
                                <p>${reflexes.value}</p>
                            </div>
                            <div class="ldefending">
                                <p>SPE</p>
                                <p>${speed.value}</p>
                            </div>
                            <div class="lphysical">
                                <p>POS</p>
                                <p>${positioning.value}</p>
                            </div>
                        </div>
                        <div class="listed-flag">
                            <img src="${FlagPic.src}" alt="">
                        </div>
                        <div class="listed-league">
                            <img src="${leaguePic.src}" alt="">
                        </div>
                    </div>
                </div>`
    }
    listedContainer.innerHTML += newCard;
    listed_cards = document.querySelectorAll(".listed-card");

    const allCardElement = document.createElement("div");
    allCardElement.innerHTML = newCard;
    allCards.appendChild(allCardElement.firstElementChild);

    listed_cards = document.querySelectorAll(".listed-card");

    listed_cards.forEach((j) => {
        j.addEventListener("click", () => {
            if (currentCard) {
                let previousPlayer = currentCard.querySelector(".listed-card");
                if (previousPlayer) {
                    let prevCardId = previousPlayer.getAttribute("data-id");
                    let previousListedCard = Array.from(listed_cards).find(card => card.getAttribute("data-id") === prevCardId);
                    if (previousListedCard) {
                        previousListedCard.classList.remove("used-card");
                        previousListedCard.style.display = "";
                    }
                }
                currentCard.innerHTML = j.outerHTML;
                stadiumContainer.style.display = "";
                list_adding.style.display = "none";
                currentCard = null;
                j.classList.add("used-card");
                j.style.display = "none";
            }
        });
    });
}

cards.forEach(e => {
    e.addEventListener("click", () => {
        clickedPost = e.id;
        currentCard = e;
        allCards.style.display = "none";
        stadiumContainer.style.display = "none";
        list_adding.style.display = "flex";
        backBttn.style.display = "block";
        carding.style.display = "none"
        listedContainer.style.display = ""
        // listed_cards.forEach((card) => {
        //     let playerPosition = card.querySelector(".player_post").innerText;
        //     if (playerPosition === clickedPost && !card.classList.contains("used-card")) {
        //         card.style.display = "";
        //     } else {
        //         card.style.display = "none";
        //     }
        // });

        Array.from(listedContainer.children).forEach((card) => {
            let playerPosition = card.querySelector(".player_post").innerText;
            if (playerPosition === clickedPost && !card.classList.contains("used-card")) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

main.onclick = function () {
    allCards.style.display = "grid";
    carding.style.display = ""
    stadiumContainer.style.display = "none";
    list_adding.style.display = "flex";
    backBttn.style.display = "block";
    listedContainer.style.display = "none"
}


backBttn.addEventListener("click", () => {
    stadiumContainer.style.display = "";
    list_adding.style.display = "none";
    backBttn.style.display = "none"
})

profileUpload.onchange = function () {
    ProfilePic.src = URL.createObjectURL(profileUpload.files[0]);
}

FlagUpload.onchange = function () {
    FlagPic.src = URL.createObjectURL(FlagUpload.files[0]);
}

leagueUpload.onchange = function () {
    leaguePic.src = URL.createObjectURL(leagueUpload.files[0]);
}

postChoose.onchange = function () {
    if (postChoose.value === "GK") {
        gkChoice.style.display = "block";
        usualChoice.style.display = "none";
    }
    else {
        usualChoice.style.display = "block"
        gkChoice.style.display = "none"
    }
}