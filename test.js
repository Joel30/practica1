var fs = require('fs');

fs.readdir("./exercises", (err, files) => {
    files.forEach(file => {
        if (file === "1_MatrixElementsSum.js") {
            var f = require("./exercises/" + file);
            console.log("Exercise 1");
            console.log("   example 1:  " + f([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));
            console.log("   example 2:  " + f([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]));
        }
        if (file === "2_CenturyFromYear.js") {
            var f = require("./exercises/" + file);
            console.log("Exercise 2");
            console.log("   example 1:  " + f(1905));
            console.log("   example 2:  " + f(1700));
        }
        if (file === "3_ReverseParentheses.js") {
            var f = require("./exercises/" + file);
            console.log("Exercise 3");
            console.log("   example 1:  " + f("(bar)",));
            console.log("   example 2:  " + f("foo(bar)baz",));
            console.log("   example 3:  " + f("foo(bar)baz(blim)",));
            console.log("   example 4:  " + f("foo(bar(baz))blim",));
        }
        if (file === "4_isTandemRepeat.js") {
            var f = require("./exercises/" + file);
            console.log("Exercise 4");
            console.log("   example 1:  " + f("tandemtandem"));
            console.log("   example 2:  " + f("qqq"));
            console.log("   example 3:  " + f("aa"));
        }
        if (file === "5_ExerciseElaboration.js") {
            var f = require("./exercises/" + file);
            console.log("Exercise 5");
            console.log("   example 1:  " + f(5, 1));
            console.log("   example 2:  " + f(9, 0));
            console.log("   example 3:  " + f(1, 4));
        }
    });
});
