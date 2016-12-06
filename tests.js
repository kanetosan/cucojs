QUnit.test( "Chrono class should exists", function(assert) {
  var chrono = new Chrono();
  assert.ok( chrono, "Passed!" );
});

QUnit.test( "Start method should increment hundredths", function(assert) {
  var chrono = new Chrono();
  setTimeout(function() {
    chrono.stop();
  }, 1000);
  chrono.start();
});