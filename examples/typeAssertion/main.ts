// Type Assertion for accessing the intelligence
let message;
message = 'abc';
let endsWithC = (message).endsWith('c');

// let endsWithC = (<string>message).endsWith('c');  ERROR:Property 'endsWith' does not exist on type 'string'.