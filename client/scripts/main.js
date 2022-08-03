let gameSquares = document.querySelectorAll('.board-square:not(.white)');
let redPieces = document.querySelectorAll('.red-piece');
let whitePieces = document.querySelectorAll('.white-piece');

for (let i = 0; i < redPieces.length; i++) {
    redPieces[i].addEventListener('click', () => {
        console.log(i);

        cleanMoveOptions();
        //this adds the blue squares

        /*if (i % 8 === 0) {
            gameSquares[i + 4].classList.add('selected');
        } else {
            gameSquares[i + 3].classList.add('selected');
            gameSquares[i + 4].classList.add('selected');
        }*/

        markMoveRed(i);
    })
}

function cleanMoveOptions() {
    for (let i = 0; i < gameSquares.length; i++) {
        if (gameSquares[i].classList.contains('selected')) {
            gameSquares[i].classList.remove('selected');
        }
    }
}

function markMoveRed(id) {
    gameSquares[id + 6].classList.add('selected');
}