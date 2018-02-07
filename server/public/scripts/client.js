$( document ).ready( function(){
  var employeeArray = [];
  var monthlyCost = 0;
  // capture user input
  $( '#submitButton' ).on( 'click', function(){
  // create new object with input
  var employee = {
    firstName: $( '#firstNameIn' ).val(),
    lastName: $( '#lastNameIn' ).val(),
    idNumber: $( '#idNumberIn' ).val(),
    jobTitle: $( '#jobTitleIn' ).val(),
    annualSalary: $( '#annualSalaryIn' ).val()
} // end employee object
//push employee into array
  employeeArray.push( employee );
// append array to DOM

  displayEmployees();

  calculateCost();

  //empty input fields
  $( '#firstNameIn' ).val('');
  $( '#lastNameIn' ).val('');
  $( '#idNumberIn' ).val('');
  $( '#jobTitleIn' ).val('');
  $( '#annualSalaryIn' ).val('');

}) // end submit button

function displayEmployees(){
    var output = $( '#employeeOut' );
    // output.empty();
    //loop through array and display on DOM
    for( i=0; i<employeeArray.length; i++ ){
      var outputString = '<li>';
      outputString += employeeArray[ i ].firstName + ' ';
      outputString += employeeArray[ i ].lastName + ' ';
      outputString += employeeArray[ i ].idNumber + ' ';
      outputString += employeeArray[ i ].jobTitle + ' ';
      outputString += '$' + employeeArray[ i ].annualSalary + ' ';
      outputString += '<button id="removeButton" data-id="' + i + '">Remove</button></li>';
    }
      output.append( outputString );
  }; //end displayEmployees


$( '#employeeOut' ).on( 'click', '#removeButton', function(){
    var employeeID = $( this ).data( 'id' );
    var removedEmployee = employeeArray.splice( employeeID, 1 );
    // console.log( removedEmployee[ 0 ]);
    // $( '#firstNameIn' ).val( removedEmployee[ 0 ].firstName );
    // $( '#lastNameIn' ).val( removedEmployee[ 0 ].lastName );
    // $( '#idNumberIn' ).val( removedEmployee[ 0 ].idNumber );
    // $( '#jobTitleIn' ).val( removedEmployee[ 0 ].jobTitle );
    // $( '#annualSalaryIn' ).val( removedEmployee[ 0 ].annualSalary );
    //
    // displayEmployees();


  });

function calculateCost(){
  var outputCost = $( 'h2' );
  //empty outputCost
  outputCost.empty();
  //divide annual salary of that employee by 12
  var yearlyCost = $( '#annualSalaryIn' ).val()
  employeeMonthlyCost = yearlyCost / 12
  //add employee's monthly cost to total monthly cost
  monthlyCost += employeeMonthlyCost;
  //display monthly cost on DOM
  outputCost.append( 'Monthly Cost: $' + Math.round(monthlyCost) );

} //end calculateCost

}); // end doc ready
