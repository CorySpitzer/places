$(function() {

  $("form#new-place").submit(function(event) {
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedStartDate = $("input#new-start-date").val();
    var inputtedEndDate = $("input#new-end-date").val();
    var inputtedCompanion = $("input#companion").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = { location: inputtedLocation,
                     startDate: inputtedStartDate,
                     endDate: inputtedEndDate,
                     companions: [inputtedCompanion],
                     landmarks: [inputtedLandmark],
                     notes: inputtedNotes };

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</li>");

    $(".place").last().click(function() {
      $("#place-to-show").show();

      $("#place-to-show h2").text(newPlace.location);

      $('.start-date').text(newPlace.startDate);
      $('.end-date').text(newPlace.endDate);
      $('.companion').text(newPlace.companions);
      $('.landmark').text(newPlace.landmarks);
      $('.notes').text(newPlace.notes);

    })
  });

});
