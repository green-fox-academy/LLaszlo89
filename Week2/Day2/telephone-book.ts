'use strict'

/* We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

Create a map with the following key-value pairs.
Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Create an application which solves the following problems.
What is John K. Miller's phone number?
Whose phone number is 307-687-2982?
Do we know Chris E. Myers' phone number? */

let ourContacts:any = {
  
  'William A. Lathan' :	'405-709-1865',
  'John K. Miller' :	'402-247-8568',
  'Hortensia E. Foster'	: '606-481-6467',
  'Amanda D. Newland'	: '319-243-5613',
  'Brooke P. Askew'	: '307-687-2982',

}
console.log('John number is: '+ ourContacts['John K. Miller']);

Object.keys(ourContacts).forEach(key => {
  let value = ourContacts[key];
  if (value === "307-687-2982"){
      console.log(key);
  }
});

if (ourContacts['Chris E. Myers']) {  console.log('We do know him') } else {  console.log('Whos is that guy?')};