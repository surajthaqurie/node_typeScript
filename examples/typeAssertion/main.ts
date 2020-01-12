// Type Assertion for accessing the intelligence
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternatveWay = (message as string).endsWith('c');