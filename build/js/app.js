(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function JournalEntry(title, entry, date) {
  this.title = title;
  this.entry = entry;
  this.date = date;
}

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
