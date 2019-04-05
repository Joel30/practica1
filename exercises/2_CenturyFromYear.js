function centuryFromYear(year){
    var century  = Math.ceil(year/100);
    return century;
}

module.exports = centuryFromYear;
