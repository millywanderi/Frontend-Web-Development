#!/usr/bin/node
// Calculates the points of x and y games
function points(games) {
    let totalPoints = 0;
  
    for (let i = 0; i < games.length; i++) {
        // Sample value 3:1
        const value = games[i];
        const parts = value.split(':');
    
        const x = parts[0];
        const y = parts[1];
    
        if (x > y) {
            totalPoints = totalPoints + 3; 
            } else if (x === y) {
            totalPoints = totalPoints + 1;
        }
    }
    return totalPoints;
}