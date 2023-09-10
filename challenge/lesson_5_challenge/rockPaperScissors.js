#!/usr/bin/node
// Let's play! You have to return which player won! 
// In case of a draw return Draw!.
const rockPaperScissors = (player1, player2) => {
    if (player1 === 'rock') {
        if (player2 === 'rock') {
            return 'Draw!';
        }
        if (player2 === 'paper') {
            return 'Player 1 won!';
        }
        if (player2 === 'scissors') {
            return 'Player 2 won!';
        }
    }
    if (p1 === 'paper') {
        if (player2 === 'rock') {
            return 'Player 1 won!';
        }
        if (player2 === 'paper') {
            return 'Draw!';
        }
        if (player2 === 'scissors') {
            return 'Player 2 won!';
        }
    }
    if (p1 === 'scissors') {
        if (player2 === 'rock') {
            return 'Player 2 won!';
        }
        if (player2 === 'paper') {
            return 'Player 1 won!';
        }
        if (player2 === 'scissors') {
            return 'Draw!';
        }
    }
}