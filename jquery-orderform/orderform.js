$(document).ready(function () {
  //put the cursor in the username field
  $("#name").focus();

  //add validatation to the Personal Information form fields whenever the user moves off the form field.
  // name required non-blank
  $("#name").blur(function () {
    if (!$(this).val()) {
      $("#nameErr").text("Each order must have a name");
    }
  }); // end name valiation

  //regex for email
  emailregex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

  // validate email using regex
  $("#email").blur(function () {
    if (!$("#email").val().match(emailregex)) {
      $("#emailErr").text("Format user@domain.com");
    } else {
      $("#emailErr").text("");
    }
  }); // end email validation

  // validate that the emails match if the email or confirmation email is changed
  $("#email2").blur(function () {
    if ($("#email").val() != $("#email2").val()) {
      $("#email2Err").text("Emails do not match");
    } else {
      $("#email2Err").text("");
    }
  }); // end email validation

  // address required non blank, city, shipping address, city
  $("#address").blur(function () {
    if (!$(this).val()) {
      $("#addressErr").text("Billing address required");
    } else {
      $("#addressErr").text("");
    }
  }); // end address validation

  // city required non blank
  $("#city").blur(function () {
    if (!$(this).val()) {
      $("#cityErr").text("Billing city required");
    }
  }); // end city validation

  // shipping address required non blank
  $("#shipaddr").blur(function () {
    if (!$(this).val()) {
      $("#shipaddrErr").text("Shipping address required");
    }
  }); // end shipping address validation

  // shipping address required non blank
  $("#shipcity").blur(function () {
    if (!$(this).val()) {
      $("#shipcityErr").text("Shipping city required");
    }
  }); // end shipping city validation

  //regex for zip code
  zipregex = /^\d{5}(-\d{4})?$/;

  // validate zipcode using regex
  $("#zip").blur(function () {
    if (!$("#zip").val().match(zipregex)) {
      $("#zipErr").text("Format requires 5 digits");
    } else {
      $("#zipErr").text("");
    }
  }); // end zipcode validation

  // validate shipping zipcode using regex
  $("#shipzip").blur(function () {
    if (!$("#shipzip").val().match(zipregex)) {
      $("#shipzipErr").text("Format requires 5 digits");
    } else {
      $("#shipzipErr").text("");
    }
  }); // end shipping zipcode validation

  // if the checkbox is checked,copy billing address, city, and zip to the corresponding shipping fields
  $("#copy").change(function () {
    if ($(this).prop("checked")) {
      $("#shipaddr").val($("#address").val());
      $("#shipcity").val($("#city").val());
      $("#shipzip").val($("#zip").val());
    }
  });

  //add an entry to state dropdown as selected with the state from billing state dropdown list
  $("#copy").change(function () {
    $(":selected").val($("#state").val());
  });

  //initialize order total to 0
  orderTotal = 0;

  //when the user moves off a quantity control, if it is not numeric change to zero
  $('#1').blur(function () {
    //initialize order total to 0
    orderTotal = 0;
    let qtyOne = $(this).val();
    if (isNaN(qtyOne)) {
      $("input[name=qty1]").val("0");
    }
  });

  $("#2").blur(function () {
    //initialize order total to 0
    orderTotal = 0;
    let qtyTwo = $(this).val();
    if (isNaN(qtyTwo)) {
      $("input[name=qty2]").val("0");
    }
  });
  
  $("#3").blur(function () {
    //initialize order total to 0
    orderTotal = 0;
    let qtyThree = $(this).val();
    if (isNaN(qtyThree)) {
      $("input[name=qty3]").val("0");
    }
  });

  $(".qty").blur(function () {
    //initialize order total to 0
    orderTotal = 0;
    //get id to identify the associated price and total
    var id = $(this).attr("id");
    // console.log(id);
    var qty = $(this).val();
    // console.log(qty);
    //get the price text by using id price plus index value
    var price = $("#price" + id).text();
    // console.log(price);

    var indTotal = price * qty;
    $("#total" + id).text(indTotal);

    //create total variables
    var total1 = Number($("#total1").text());
    var total2 = Number($("#total2").text());
    var total3 = Number($("#total3").text());
    // $("#total2").text(indTotal);
    // $("#total3").text(indTotal);

    // console.log(total1);
    // console.log(total2);
    // console.log(total3);

    //place the order total in subtotal
    var subTotal = total1 + total2 + total3;
    subTotal = subTotal.toFixed(2);
    subTotal = Number(subTotal);
    console.log(subTotal);
    $("#subt").text(subTotal);

    var shipState = $("#shipstate").val();
    // console.log(shipState);

    //Calculate tax
    if (shipState != "TX") {
      var tax = 0;
      $("#tax").text(tax);
    } else {
      var tax = subTotal * 0.08;
      tax = tax.toFixed(2);
      tax = Number(tax);
      $("#tax").text(tax);
    }
    console.log(tax);

    //Calculate shipping
    if (shipState == "TX") {
      var shippingCost = 5; // TX shipping cost is 5 bucks
    } else {
      if (shipState == "NY") {
        shippingCost = 20; // NYC shipping is 20
      } else {
        if (shipState == "CA") {
          shippingCost = 20; // CA shipping is 20
        } else {
          if (shipState == "OK") {
            shippingCost = 10; // all other states 10
          } else {
            shippingCost = 10; // all other states 10
          }
        }
      }
    }
    shippingCost = Number(shippingCost);
    $("#ship").text(shippingCost);
    console.log(shippingCost);

    var orderTotal = subTotal + tax + shippingCost;
    orderTotal = Number(orderTotal);
    orderTotal = orderTotal.toFixed(2);
    $("#gTotal").text(orderTotal);
    console.log(orderTotal);
  });
  
  
  //when form is submitted revalidate all fields, if data is not valid cancil submission of the form
  $("#entry").submit(function () {
    // set valid flag to true
    valid = true;

    //add validatation to the Personal Information form fields whenever the user moves off the form field.
    // name required non-blank
    $("#name").blur(function () {
      if (!$(this).val()) {
        $("#nameErr").text("Each order must have a name");
        valid = false;
      }
    }); // end name valiation

    //regex for email
    emailregex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

    // validate email using regex
    $("#email").blur(function () {
      if (!$("#email").val().match(emailregex)) {
        $("#emailErr").text("Format user@domain.com");
        valid = false;
      } else {
        $("#emailErr").text("");
      }
    }); // end email validation

    // validate that the emails match if the email or confirmation email is changed
    $("#email2").blur(function () {
      if ($("#email").val() != $("#email2").val()) {
        $("#email2Err").text("Emails do not match");
        valid = false;
      } else {
        $("#email2Err").text("");
      }
    }); // end email validation

    // address required non blank, city, shipping address, city
    $("#address").blur(function () {
      if (!$(this).val()) {
        $("#addressErr").text("Billing address required");
        valid = false;
      }
    }); // end address validation

    // city required non blank
    $("#city").blur(function () {
      if (!$(this).val()) {
        $("#cityErr").text("Billing city required");
        valid = false;
      }
    }); // end city validation

    // shipping address required non blank
    $("#shipaddr").blur(function () {
      if (!$(this).val()) {
        $("#shipaddrErr").text("Shipping address required");
        valid = false;
      }
    }); // end shipping address validation

    // shipping city required non blank
    $("#shipcity").blur(function () {
      if (!$(this).val()) {
        $("#shipcityErr").text("Shipping city required");
        valid = false;
      }
    }); // end shipping city validation

    //regex for zip code
    zipregex = /^\d{5}(-\d{4})?$/;

    // validate zipcode using regex
    $("#zip").blur(function () {
      if (!$("#zip").val().match(zipregex)) {
        $("#zipErr").text("Format requires 5 digits");
        valid = false;
      } else {
        $("#zipErr").text("");
      }
    }); // end zipcode validation

    // validate shipping zipcode using regex
    $("#shipzip").blur(function () {
      if (!$("#shipzip").val().match(zipregex)) {
        $("#shipzipErr").text("Format requires 5 digits");
        valid = false;
      } else {
        $("#shipzipErr").text("");
      }
    }); // end shipping zipcode validation

    // return the valid flag (true or false). False will stop submission of the form
    return valid;
  }); // end form submission validation
});//end ready
