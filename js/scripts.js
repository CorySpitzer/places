$(function() {

  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedStartDate = $("input#new-start-date").val();
    var inputtedEndDate = $("input#new-end-date").val();
    var inputtedCompanion = $("input#companion").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedNotes = $("input#notes").val();

    // var placeAttributes = { location: "",
    //                         start-date: "",
    //                         end-date: "",
    //                         campanions: [],
    //                         landmarks: [],
    //                         notes: "" };
    // var inputList = [ var new-location, "new-start-date", "new-end-date",
    //                  var companion, "landmark", "notes"];
    // var i = 0;
    // inputList.forEach(function(inputName) {
    //   var inputName = $("input#" + inputList[i]).val();
    //   i += 1;
    // });
    // campanion = "Bob";
    // alert(companion);
  });
});
