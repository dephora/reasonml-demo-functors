// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry                               = require("bs-platform/lib/js/curry.js");
var Pervasives                          = require("bs-platform/lib/js/pervasives.js");
var PrintablePair3$ReasonmlDemoFunctors = require("./PrintablePair3.bs.js");

function print(s) {
  return s;
}

var PrintableString = /* module */[/* print */print];

var print$1 = Pervasives.string_of_int;

var PrintableInt = /* module */[/* print */print$1];

var PrintableSI = PrintablePair3$ReasonmlDemoFunctors.Make(PrintableString)(PrintableInt);

Pervasives.print_string(Curry._1(PrintableSI[/* print */1], Curry._2(PrintableSI[/* make */0], "Jane", 53)));

exports.PrintableString = PrintableString;
exports.PrintableInt    = PrintableInt;
exports.PrintableSI     = PrintableSI;
/* PrintableSI Not a pure module */
