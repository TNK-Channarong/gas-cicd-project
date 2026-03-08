function add(a, b) {
  return a + b;
}


function updateSheet() {
  var ss = SpreadsheetApp.openById("18UFkvstcXdlGnnoaB1tprmP_UG5aELKuZFuJhCmd434");
  const sheet = ss.getSheetByName("CICD data");
  sheet.getRange("A1").setValue("Hello from CI/CD!");
  return "Sheet updated!";

}