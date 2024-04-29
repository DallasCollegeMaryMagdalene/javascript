$(document).ready(function () {
  //create variable to count items in the shopping cart and initiatlize it to zero
  var itemCount = 0;

  //create variable to hold some html t o create a delete button. YOu can use a span tag with a class of del and text remove
  var deleteButton = "<span class='del'>Remove</span>";

  /* Add to cart event */
  $(".add").click(function () {
    var itemName = $(this).attr("name");
    var itemID = $(this).attr("id");
    var shoppingCart = $(this).attr("#cart");
    itemCount++;
    //console.log(itemCount);
    if (itemCount > 0) {
      $("#empty").hide();
    }
    var cartLink =
      "<li class='cartItem' name='" +
      itemID +
      "'>" +
      itemName +
      " <span class='del'>Remove</span></li>";
    $("#cart").append(cartLink);
    $("#" + itemID).hide();
  });

  /* Remove from cart event */
  $("#cart").delegate(".del", "click", function () {
    //span is nested in list item, therefore list item is the closest parent
    var itemID = $(this).closest(".cartItem").attr("name");
    //console.log(itemID);
    $(this).parent().remove();
    $("#" + itemID).show();
    itemCount--;
    //console.log(itemCount);
    if (itemCount == 0) {
      $("#empty").show();
    }
  });


  /* Rating */

  $(".rating img").click(function () {
    $(this).siblings('img').attr("src", "staroff.gif");
    $(this).attr("src", "staron.gif");
    $(this).prevAll().attr("src", "staron.gif");
  });

});