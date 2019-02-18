let chessPositions = `[
    {
        "0" : {
            "name" : "Black Castle 1",
            "row" : 2,
            "col" : 2,
            "figure" : "blackCastle"
        },
        "1" : {
            "name" : "Black Horse 1",
            "row" : 3,
            "col" : 2,
            "figure" : "blackHorse"
        },
        "2" : {
            "name" : "Black Elephant 1",
            "row" : 4,
            "col" : 2
        },
        "3" : {
            "name" : "Black King",
            "row" : 5,
            "col" : 2
        },
        "4" : {
            "name" : "Black Queen",
            "row" : 6,
            "col" : 2
        },
        "5" : {
            "name" : "Black Elephant 2",
            "row" : 7,
            "col" : 2
        },
        "6" : {
            "name" : "Black Horse 2",
            "row" : 8,
            "col" : 2
        },
        "7" : {
            "name" : "Black Tower2",
            "row" : 9,
            "col" : 2
        },
        "8" : {
            "name" : "Black Pawn 1",
            "row" : 2,
            "col" : 3
        },
        "9" : {
            "name" : "Black Pawn 2",
            "row" : 3,
            "col" : 3
        },
        "10" : {
            "name" : "Black Pawn 3",
            "row" : 4,
            "col" : 3
        },
        "11" : {
            "name" : "Black Pawn 4",
            "row" : 5,
            "col" : 3
        },
        "12" : {
            "name" : "Black Pawn 5",
            "row" : 6,
            "col" : 3
        },
        "13" : {
            "name" : "Black Pawn 6",
            "row" : 7,
            "col" : 3
        },
        "14" : {
            "name" : "Black Pawn 7",
            "row" : 8,
            "col" : 3
        },
        "15" : {
            "name" : "Black Pawn 8",
            "row" : 9,
            "col" : 3
        },
        "16" : {
            "name" : "White Tower 1",
            "row" : 2,
            "col" : 9
        },
        "17" : {
            "name" : "White Horse 1",
            "row" : 3,
            "col" : 9
        },
        "18" : {
            "name" : "White Elephant 1",
            "row" : 4,
            "col" : 9
        },
        "19" : {
            "name" : "White King",
            "row" : 5,
            "col" : 9
        },
        "20" : {
            "name" : "White Queen",
            "row" : 6,
            "col" : 9
        },
        "21" : {
            "name" : "White Elephant 2",
            "row" : 7,
            "col" : 9
        },
        "22" : {
            "name" : "White Horse 2",
            "row" : 8,
            "col" : 9
        },
        "23" : {
            "name" : "White Tower2",
            "row" : 9,
            "col" : 9
        },
        "24" : {
            "name" : "White Pawn 1",
            "row" : 2,
            "col" : 8
        },
        "25" : {
            "name" : "White Pawn 2",
            "row" : 3,
            "col" : 8
        },
        "26" : {
            "name" : "White Pawn 3",
            "row" : 4,
            "col" : 8
        },
        "27" : {
            "name" : "White Pawn 4",
            "row" : 5,
            "col" : 8
        },
        "28" : {
            "name" : "White Pawn 5",
            "row" : 6,
            "col" : 8
        },
        "29" : {
            "name" : "White Pawn 6",
            "row" : 7,
            "col" : 8
        },
        "30" : {
            "name" : "White Pawn 7",
            "row" : 8,
            "col" : 8
        },
        "31" : {
            "name" : "White Pawn 8",
            "row" : 9,
            "col" : 8
        }
    }
]`

const blacks = 0;
const whites = 1;


window.onload = function () {
    drawTable();
}

function drawTable(pos){
	for (let row = 1; row <= 10; row++) {
		addrow(row);
	}
}

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

let pos = JSON.parse(chessPositions);

function addrow(row){
	let whiteColor = true;
	if(row % 2 === 0){
		whiteColor = false;
	}
	for (let col = 1; col <= 10; col++) {
		if(row === 1 || row === 10 || col === 1 || col === 10){
            drawSymbols(row, col);
        }else{
            let newPosition = document.createElement('div');
            if(whiteColor){
                newPosition.classList.add('white-position');
            }else{
                newPosition.classList.add('black-position');
            }

            
            newPosition.classList.add('position');
            document.getElementById('table').appendChild(newPosition);
            whiteColor = !whiteColor;
            
            // drawFigures(row, col, newPosition)
            
            
            for(let j = 0; j < 31; j++){
                if((pos[0][j]['row'] == row) && (pos[0][j]['col'] == col)){
                    drawFigures((pos[0][j]['row']), (pos[0][j]['col']), newPosition)
                }
            }
            

        }

	}	
}

function drawSymbols(row, col){
    if(row === 1 || row === 10){
        if(col != 1 && col != 10){
            let newPosition = document.createElement('div');
            newPosition.classList.add('position');
            newPosition.innerHTML = letters[col-2]
            document.getElementById('table').appendChild(newPosition);
        }else{
            let newPosition = document.createElement('div');
            newPosition.classList.add('position');
            document.getElementById('table').appendChild(newPosition);
        }
    }else{
        let newPosition = document.createElement('div');
        if(row != 1 && row != 10) newPosition.innerHTML = row-1;
        newPosition.classList.add('position');
        document.getElementById('table').appendChild(newPosition);
    }
}

function drawFigures(row, col, figurePosition){
    switch(row){
        case 3:
        let newFigure = figurePosition;
            newFigure.classList.add('blackPawn');
            newFigure.draggable = true;
            break;
        case 8:
            figurePosition.classList.add('whitePawn');
            break;
        case 2: 
            switch(col){
                case 2:
                    figurePosition.classList.add('blackCastle');
                    break;
                case 3:
                    figurePosition.classList.add('blackHorse');
                    break;
                case 4:
                    figurePosition.classList.add('blackElephant');
                    break;
                case 5:
                    figurePosition.classList.add('blackKing');
                    break;
                case 6:
                    figurePosition.classList.add('blackQueen');
                    break;
                case 7:
                    figurePosition.classList.add('blackElephant');
                    break;
                case 8:
                    figurePosition.classList.add('blackHorse');
                    break;
                case 9:
                    figurePosition.classList.add('blackCastle');
                    break;
                }
            break;
        case 9: 
            switch(col){
                case 2:
                    figurePosition.classList.add('whiteCastle');
                    figurePosition.draggable = true;
                    break;
                case 3:
                    figurePosition.classList.add('whiteHorse');
                    break;
                case 4:
                    figurePosition.classList.add('whiteElephant');
                    break;
                case 5:
                    figurePosition.classList.add('whiteKing');
                    break;
                case 6:
                    figurePosition.classList.add('whiteQueen');
                    break;
                case 7:
                    figurePosition.classList.add('whiteElephant');
                    break;
                case 8:
                    figurePosition.classList.add('whiteHorse');
                    break;
                case 9:
                    figurePosition.classList.add('whiteCastle');
                    break;
            }
        break;
    }
}

// function drawFigures(row, col){
//     if((String(row) + col != undefined) || (String(row) + col != null)){
//         console.log(pos[String(row) + col]['id'])
//     }
// }