/*
  Use encodeURIComponent() on user-entered fields from forms POST'd to the server
  this will encode & symbols that may inadvertently be generated during data entry for special HTML entities or other characters that require encoding/decoding.
*/

const searchTerm = "hello world!";
const encodedTerm = encodeURIComponent(searchTerm);

console.log("uncodedTerm:", searchTerm);
console.log("encodedTerm:", encodedTerm);

const urlWithUncodedTerm = "https://example.com/search?q=" + searchTerm;
const urlWithEncodedTerm = "https://example.com/search?q=" + encodedTerm;

console.log("url with uncodedTerm:", urlWithUncodedTerm); // Do not add scape for some chars.
console.log("url with uncodedTerm:", urlWithEncodedTerm); // Add scape for some chars.