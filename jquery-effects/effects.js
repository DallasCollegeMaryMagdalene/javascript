$(document).ready(function () {
  $("#newsSignup").hide();

  //add a click event to the signup link anchor tag to do the following:
  $("#signuplink").click(function () {
    $("#newsSignup").slideToggle(400);

    //cancel default action
    return false;
  });

  $("#signuplink").toggle(function () {
    $("#openclose").text("-");
  },
    function () {
    $("#openclose").text("+");
  });

  //Slogan
  //Add a hover event to slogan element that does the following
  $("#slogan").hover(
    function () {
      //fade element
      $("#slogan").fadeOut("400", "linear", function () {
        $("#slogan").fadeIn("slow", "swing", function () {
          $("#slogan").text("Hand Picked Just For You");
        });
      });
    },
    function () {
      //fade emelent at fast speed
      $("#slogan").fadeOut("400", "swing", function () {
        $("#slogan").fadeIn("slow", "linear", function () {
          $("#slogan").text("The Power of Flowers");
        });
      });
    }
  ); //end hover

  //animation
  $("#rose").animate(
    {
      "margin-right": "100px",
      opacity: 1,
    },
    "slow"
  );

  //Form Submission Event
  //they click sign up and get a thx u for registering pop up
  $("#newsSignup").submit(function () {
    alert("Thank you for registering");
    $("#newsSignup").hide();
    $("#signuplink").fadeTo("normal", .30);
    //cancel default action to submit the form
    return false;
  });


});