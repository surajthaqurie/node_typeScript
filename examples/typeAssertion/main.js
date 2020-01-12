// Type Assertion for accessing the intelligence
var message;
message = 'abc';
var endsWithC = (message).endsWith('c');
// let endsWithC = (<string>message).endsWith('c');  ERROR:Property 'endsWith' does not exist on type 'string'.
