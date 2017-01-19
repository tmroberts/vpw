// 'use strict';
// if (this.contactform === undefined) this.contactform = {};
//
// (function(context) {
//
//   function start() {
    //Call your code here
    console.log('contactform is invoked!');
    // code to send data to mail service (SendGrid)
    //  name property - used to reference a particuar input element
    //  value property - used to retrieve what the user entered ! ! !
    //
    //-- url /sendmail

  $('#contactme').on('submit', function(evt){
    evt.preventDefault();

    //var formData = new FormData(document.getElementsByName('contactme')[0]);// yourForm: form selector
    var formData = $(this).serialize();
    console.log('This is BEFORE the AJAX call');
    $.ajax({
        type: "POST",
        url: "/sendemail",
        data: formData,
        error: function(jqXHR, textStatus, errorMessage) {
           console.log(errorMessage); // Optional
           console.log(formData);
        },
        success: function(data) {
          console.log(data)
          alert('Success!  Email sent to Kathy.');
        }

    });
    // .done(function (data) {
    //   console.log('BEFORE displaying data from contactform');
    //   console.log('This is the data: ', data);
    //   console.log('This is the formData: ', formData);
    //   console.log('End of PROCESSING contactform');

    /* Alerts the results */
    //      posting.done(function( data ) {
    //        alert('success');
    //      });



    // });

    console.log('This is the formData: ', formData);
    $("#contactme")[0].reset();
    console.log('End of PROCESSING contactform');
  });
  //
  //
  // }

//   context.start = start;
//
// })(window.contactform);
