const fs = require('fs');
const { SourceMapConsumer } = require('source-map');

let map = fs.readFileSync('/Users/v_wchding/develop/web/vue/vue-test-demo/dist/0.d8b4a9c92078616a68e8.js.map');
map = map.toJSON();
map = JSON.parse();
console.log(map);
SourceMapConsumer.with(map, null, consumer => {
  debugger;
});