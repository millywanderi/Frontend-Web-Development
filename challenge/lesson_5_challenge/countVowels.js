#!/usr/bin/node
function getCount(str) {
    let vowelsCount = 0;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
            
        }
    }
    return vowelsCount;
}