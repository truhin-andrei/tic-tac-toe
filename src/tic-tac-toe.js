class TicTacToe {
    constructor() {
        this.field=[[null,null,null],
                    [null,null,null],
                    [null,null,null],];
        this.firstPlayer = true;

    }

    getCurrentPlayerSymbol() {
        if (this.firstPlayer) {
            return "x";
        }
        return "o";

    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            if (this.firstPlayer) {
                this.field[rowIndex][columnIndex] = "x";
                this.firstPlayer = false;
            }
            else {
                this.field[rowIndex][columnIndex] = "o";
                this.firstPlayer = true;
            }
        }

    }

    isFinished() {
        if (this.isDraw() || this.getWinner() !== null ) {
            return true;
        }
        else return false;

    }

    getWinner() {
        if ((this.field[0][0] ===  this.field[0][1] && this.field[0][1]=== this.field[0][2] && this.field[0][1] !==null) ||
        (this.field[1][0] ===  this.field[1][1] && this.field[1][1]=== this.field[1][2] && this.field[1][1] !==null) ||
        (this.field[2][0] ===  this.field[2][1] && this.field[2][1]=== this.field[2][2] && this.field[2][1] !==null) ||
        (this.field[0][0] ===  this.field[1][0] && this.field[1][0]=== this.field[2][0] && this.field[2][0] !==null) ||
        (this.field[0][1] ===  this.field[1][1] && this.field[1][1]=== this.field[2][1] && this.field[2][1] !==null) ||
        (this.field[0][2] ===  this.field[1][2] && this.field[1][2]=== this.field[2][2] && this.field[2][2] !==null) ||
        (this.field[0][0] ===  this.field[1][1] && this.field[1][1]=== this.field[2][2] && this.field[1][1] !==null) ||
        (this.field[0][2] ===  this.field[1][1] && this.field[1][1]=== this.field[2][0] && this.field[1][1] !==null) ){
            if (this.firstPlayer) return "o";
            else return "x";
        }
        return null;

    }

    noMoreTurns() {
        for (let i=0; i< this.field.length;i++){
            for(let k=0; k< this.field[i].length; k++){
                if (this.field[i][k] === null) {
                    return false;
                }
            }
            
        }
        return true;

    }

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null){
            
            return true; 
        } 
        return false;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
