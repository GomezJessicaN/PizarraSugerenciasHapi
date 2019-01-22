import {suite, test} from "mocha-typescript";

@suite("A suite")
class Suite {

    @test("can have tests")
    test() {}
    
    @test
    "typescript also supports this syntax for method naming"() {}
}