function exerciseElaboration(p,n){
    if ((p <= 9 && p >= 1) || (n <= 100000 && n >= 0)) {
        var base = p;
        var sum = 0;
        if (n > 2) {
            var res=2;
            base = p;
            while(res-- >= 0){
                base *= 10;
            }
            base += p;
            base = Math.pow(base, 2);
            sum = 0;
            while(base > 0){
                sum += base % 10;
                base = parseInt(base /= 10);
            }
        }
        else {
            n += 1;
            base = p;
            while(n-- > 0){
                base *= 10;
            }
            base += p;
            base = Math.pow(base, 2);
            sum = 0;
            while(base > 0){
                sum += base % 10;
                base = parseInt(base /= 10);
            }
        }
    }
    return sum;
}

module.exports = exerciseElaboration;
