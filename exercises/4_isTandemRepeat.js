function isTandemRepeat(inputString){
    if ((inputString.length) % 2 == 0) {
        if (inputString.substring(0,inputString.length / 2) === inputString.substring(inputString.length / 2, inputString.length)) {
            return true;
        } else {
            return false;
        }

    } else {
        return false
    }
}
console.log(isTandemRepeat("tandemtandem"));
