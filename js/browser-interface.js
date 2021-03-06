var JournalEntry = require('./../js/journal.js').JournalEntry;

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('input#title').val();
    var entry = $('input#entry').val();
    var date = $('input#date').val();
    var newEntry = new JournalEntry(title, entry, date);
    var word_count = entry_length(entry);
    $('#output').append("<h1>" + newEntry.title + "</h1><h4>" + newEntry.date + "</h4><p>" + newEntry.entry + "</p><p class='length'>" + entry_length + "</p>");
  });
});
