QUnit.test( "Chrono class should exists", function(assert) {
  var chrono = new Chrono();
  assert.ok( chrono, "Passed!" );
});

QUnit.test( "Start method should increment hundredths", function(assert) {
  var chrono = new Chrono();
  chrono.start();

  setTimeout(function() {
    assert.equal(chrono.hundredths, 1);
    chrono.stop();
  }, 100);
});