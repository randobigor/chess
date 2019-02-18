window.onload = function () {
	drawTable();
}

function drawTable(){
	for (let line = 1; line <= 10; line++) {
		addLine(line);
	}
}

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

function addLine(line){
	let whiteColor = true;
	if(line % 2 === 0){
		whiteColor = false;
	}
	for (let i = 1; i <= 10; i++) {
		if(line === 1 || line === 10 || i === 1 || i === 10){
            
            if(line === 1 || line === 10){
                if(i != 1 && i != 10){
                    let newPosition = document.createElement('div');
                    newPosition.classList.add('position');
                    newPosition.innerHTML = letters[i-2]
                    document.getElementById('table').appendChild(newPosition);
                }else{
                    let newPosition = document.createElement('div');
                    newPosition.classList.add('position');
                    document.getElementById('table').appendChild(newPosition);
                }
            }else{
                let newPosition = document.createElement('div');
                if(line != 1 && line != 10) newPosition.innerHTML = line-1;
                newPosition.classList.add('position');
                document.getElementById('table').appendChild(newPosition);
            }
            
        }else{
            let newPosition = document.createElement('div');
            
            if(whiteColor){
                newPosition.classList.add('white-position');
            }else{
                newPosition.classList.add('black-position');
            }

            switch(line){
                case 3:
                    newPosition.classList.add('blackPawn');
                    break;
                case 8:
                    newPosition.classList.add('whitePawn');
                    break;
                case 2: 
                    switch(i){
                        case 2:
                            newPosition.classList.add('blackCastle');
                            break;
                        case 3:
                            newPosition.classList.add('blackHorse');
                            break;
                        case 4:
                            newPosition.classList.add('blackElephant');
                            break;
                        case 5:
                            newPosition.classList.add('blackKing');
                            break;
                        case 6:
                            newPosition.classList.add('blackQueen');
                            break;
                        case 7:
                            newPosition.classList.add('blackElephant');
                            break;
                        case 8:
                            newPosition.classList.add('blackHorse');
                            break;
                        case 9:
                            newPosition.classList.add('blackCastle');
                            break;
                    }
                    break;
                case 9: 
                    switch(i){
                        case 2:
                            newPosition.classList.add('whiteCastle');
                            newPosition.draggable = true;
                            break;
                        case 3:
                            newPosition.classList.add('whiteHorse');
                            break;
                        case 4:
                            newPosition.classList.add('whiteElephant');
                            break;
                        case 5:
                            newPosition.classList.add('whiteKing');
                            break;
                        case 6:
                            newPosition.classList.add('whiteQueen');
                            break;
                        case 7:
                            newPosition.classList.add('whiteElephant');
                            break;
                        case 8:
                            newPosition.classList.add('whiteHorse');
                            break;
                        case 9:
                            newPosition.classList.add('whiteCastle');
                            break;
                    }
            }

            newPosition.classList.add('position');
            document.getElementById('table').appendChild(newPosition);
            whiteColor = !whiteColor;

            
        }

	}	
}