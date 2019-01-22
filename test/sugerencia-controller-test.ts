
import { suite, test } from "mocha-typescript";
import SugerenciaController from '../src/sugerencia/sugerencia-controller';
import { sugerencia } from '../src/interfaces/osm';
var assert = require('chai').assert

@suite class UnitTest extends SugerenciaController {
  @test "Es sugerencia sin completar"() {
   
   var sugerencia: any = {
      descripcion: "",
      idsugerencia: ""
    };
    let result = this.EsSugerenciaSinCompletar(sugerencia);
      assert.equal(result, true)
}
}