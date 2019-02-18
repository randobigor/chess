var xmlhttp = new XMLHttpRequest();
var url = "../assets/db/positions.json";

let pos;

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    pos = JSON.parse(this.responseText);
    console.log(pos)
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

window.onload = function () {
    drawTable();
}

function drawTable(pos){
	for (let row = 1; row <= 10; row++) {
		addrow(row);
	}
}

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

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
            
            setPositions(row, col, newPosition);
        }
	}	
}

function drawSymbols(row, col){
    let newPosition = document.createElement('div');
    if(row === 1 || row === 10){
        if(col != 1 && col != 10){
            newPosition.classList.add('position');
            newPosition.classList.add('corners')
            document.getElementById('table').appendChild(newPosition);
            newPosition.innerHTML = letters[col-2]
        }
        else{
            let newPosition = document.createElement('div');
            newPosition.classList.add('position');
            newPosition.classList.add('corners');
            document.getElementById('table').appendChild(newPosition);
        }
    }else{
        let newPosition = document.createElement('div');
        if(row != 1 && row != 10) newPosition.innerHTML = row-1;
        newPosition.classList.add('corners')
        newPosition.classList.add('position');
        document.getElementById('table').appendChild(newPosition);
    }
}

function setPositions(row, col, newPosition){
    for(let j = 0; j < 32; j++){
        if((pos[0][j]['row'] == row) && (pos[0][j]['col'] == col)){
            newPosition.classList.add(pos[0][j]['figure']);
            newPosition.draggable = true;
        }
    }
}