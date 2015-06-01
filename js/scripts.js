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
                     companions: [],
                     landmarks: [],
                     notes: inputtedNotes
    };

    $(".new-companion").each(function() {
      // var inputtedCompanion = $(this).find("input#companion").val();
      newPlace.companions.push($(this).find("input.new-companion-input").val());
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</li>");

    $(".place").last().click(function() {
      $("#place-to-show").show();

      $("#place-to-show h2").text(newPlace.location);
      newPlace.companions.forEach(function(companion) {
        $('ul#display-companions').append('<li>' + companion + '</li>');
        console.log("in loop");
        // debugger;
      });

      $('.start-date').text(newPlace.startDate);
      $('.end-date').text(newPlace.endDate);
      // $('.companion').text(newPlace.companions);
      // $('.landmark').text(newPlace.landmarks);
      $('.notes').text(newPlace.notes);

    });
  });

  $("#add-companion").click(function() {
    $("#new-companions").append(
      '<div id="new-companions">' +
        '<div class="new-companion">' +
          '<div class="form-group">' +
            '<label for="companion">Travel companion</label>' +
            '<input type="text" class="form-control new-companion-input">' +
          '</div>' +
        '</div>' +
      'div'
    );
  });

  $("#add-landmark").click(function() {
    $("#new-landmark").append('<div class="form-group">' +
                                  '<label for="landmark">Landmark</label>' +
                                  '<input type="text" class="form-control" id="form-control landmark">' +
                                '</div>');
  });

});
