var Benchmark = require("benchmark"),
    mori = require("mori"),
    Immutable = require("immutable"),
    ImmutableHashMap = require("..");


var suite = new Benchmark.Suite();


suite.add("immutable-hash_map", function() {
    ImmutableHashMap.fromObject({0: 0, 1: 1});
});

suite.add("Immutable", function() {
    Immutable.fromJS({0: 0, 1: 1});
});

suite.add("mori hash_map", function() {
    mori.hashMap(0, 1, 2, 3);
});

suite.on("cycle", function(event) {
    console.log(String(event.target));
});

suite.on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
    console.log("==========================================\n");
});

console.log("\n= create =================================");
suite.run();
