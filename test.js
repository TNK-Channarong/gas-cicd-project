// Simple test for the add() function
function testAdd() {
  const result = add(2, 3);
  if (result === 5) {
    console.log("✓ Test passed: add(2, 3) = 5");
    return true;
  } else {
    console.error("✗ Test failed: add(2, 3) should equal 5 but got " + result);
    return false;
  }
}

// Run all tests
function runAllTests() {
  console.log("Running tests...");
  const test1 = testAdd();
  
  if (test1) {
    console.log("\n✓ All tests passed!");
  } else {
    console.log("\n✗ Some tests failed!");
  }
}
