function centuryFromYear(year){
    var century  = Math.ceil(year/100);
    return century;
}

console.log(centuryFromYear(1700));
