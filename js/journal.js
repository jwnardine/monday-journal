exports.JournalEntry = function(title, entry, date) {
  this.title = title;
  this.entry = entry;
  this.date = date;
}

exports.JournalEntry.prototype.entry_length = function(entry) {
  var entry_array = entry.split(' ');
  var entry_length = entry_array.length;
  return entry_length;
}
