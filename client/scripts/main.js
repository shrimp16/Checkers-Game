let gameSquares = document.querySelectorAll('.board-square:not(.white)');
let redPieces = document.querySelectorAll('.red-piece');
let whitePieces = document.querySelectorAll('.white-piece');


/*for (let i = 0; i < redPieces.length; i++) {
    redPieces[i].addEventListener('click', () => {
        console.log(i);

        cleanMoveOptions();
        //this adds the blue squares

        if (i % 8 === 0) {
            gameSquares[i + 4].classList.add('selected');
        } else {
            gameSquares[i + 3].classList.add('selected');
            gameSquares[i + 4].classList.add('selected');
        }

        markMoveRed(i);
    })
} */

redPieces.forEach((piece) => {
    piece.addEventListener('click', () => redPieceLogic(piece))
});


function redPieceLogic(piece) {
    console.log(piece);
    cleanMoveOptions();
    markMoveRed(piece);
}

function cleanMoveOptions() {
    redPieces.forEach(({ classList }) => classList.remove('selected'))
}

function markMoveRed({ classList }) {
    classList.add('selected');
}