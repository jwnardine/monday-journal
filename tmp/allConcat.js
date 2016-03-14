var JournalEntry = require('./../js/journal.js').JournalEntry;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('input#title').val();
    var entry = $('input#entry').val();
    var date = $('input#date').val();
    $('#output').append("<h1>" + title + "</h1><h4>" + date + "</h4><p>" + entry + "</p>");
  });
});
