/* JavaScript */
// place this in your external JavaScript file
$(document).ready(function () {
    console.log("Ready!"); // debug to verify jQuery working. load page and check the console log (F12)
    // jQuery function calls go here...

    //use class botanic, identify all the spans and hide them. this needs to be the first function in the document ready so they hide immediatly
    $(".botanic").hide();

    //add the hide method to the imgdiv so the img only shows when the user hovers
    $(".imgdiv").hide();

    //add a click event to flower  that will first hide the botanic class
    $(".flower").click(function () {
        $(".botanic").hide();
        // add a click event to show only the current flower - this is not working
        $(this).children(".botanic").show();
    });

    //create a mouseover event to change the color of the headings
    $("header h1, h2").mouseover(changeColor);
    $("header h1, h2").mouseout(originalColor);

    //funciton changeColor
    function changeColor() {
        $("header h1, h2").css("color", "#d7d");
    }

    //function original Color
    function originalColor() {
        $("header h1, h2").css("color", "darkgreen");
    }

    //attempting to create a hover event for .pic. geting the position of the cursor when we hover over the .pic span tag so we know where to place the image
    //assignment says be sure to add the evt parameter to the annonymous funciton
    $(".pic").hover(
        function (evt) {
            var xPos = evt.pageX + 150;
            var yPos = evt.pageY;
            //from the video 2 13:40-13:52 instead of doing an alert here we can do a selector for the image and we could set the css properties, left property to the x positon and the top property to the y position and then use query to show it at that location
            //alert("X:" + xPos + " Y:" + yPos);
            //how do I put the two together??
            //i need to trigger a jquery event that says 'give me the x and y coordinates of where that curser is' 26:14; once i get these, I know where to position the flower
            /* from the jq event article.... evt is a user-assigned variable name assigned to the event...video 2 13:30 */
            //assignment says to add 150 to the x coordinate so it doesnt cover name of flower
        var flowerName = '#' + $(this).attr('title');
        $(flowerName).show().css({ top: yPos, left: xPos });
        },
        function () {
            // a Mouseout function to hide the image div
            $(".imgdiv").hide();
        }
    ); //ends hover

  //add keypress event for first letter of each respective flower, ie m is margureite - tested this and it is not working!!
  $(document).keypress(function (evt) {
    var keyPressed = String.fromCharCode(evt.which);
    //switchtolowercase in case they entered an uppercase letter
    keyPressed.toLowerCase();
    //jump to location on page
    window.location = "#" + keyPressed;
    //console.log(keyPressed);
  }); //end key press

  var tips = [
    "<p>Those of  us who live through our gardens know how bittersweet it can be to see the lush green growth of  summer disappear during the cold months of  winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of  both of  these cool season beauties and enjoy them in your garden for years to come.</p>",
    "<p>Spring is a time of  renewal for both the gardener and the garden. Suggestions for this month: </p><ul><li> Transplants of  tomatoes should be planted by March 15th</li><li> Fertilize your  lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li> Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants. </li></ul>",
    "<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes from the huge selection of  varieties we offer.</li><li>Transplants of  peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",
    "<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of  our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of  winter’s trusted and long-lasting pansies and violas.</p>",
  ];
  // create a specials array
  var specials = [
    "<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p> ",
    "<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
    "<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
    "<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
    "<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
    "<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
    "<p><strong>BOGO</strong></p><p>All containers, buy one, get one of equal or lesser value 1/2 price</p>",
    "<p>Cacti and succulents, 25% off</p>",
    "<p>Get ready for fall!<p><p>Mums: 6 inch pot $5.99</p>",
    "<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins: <br>large $8.99<br>small $5.99<br>Decorative pumpkins: <br>$7.99-11.99<br>Gourds: $6.99</p>",
    "<p>Trees and shrubs: 1/2 price - in stock only.</p>",
    "<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties. Find the perfect fit for your family while they last!</p>",
  ];

  /* creates a date object with the current date */
  let date = new Date();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //set up swtich statement
  switch (monthIndex) {
    case 11:
    case 0:
    case 1:
      season = "Winter";
      backgroundImage = "winterbg.jpg";
      seasonIndex = 0;
      seasonColor = "#00f";
      break;
    case 2:
    case 3:
    case 4:
      season = "Spring";
      backgroundImage = "springbg.jpg";
      seasonIndex = 1;
      seasonColor = "#d7d";
      break;
    case 5:
    case 6:
    case 7:
      season = "Summer";
      backgroundImage = "summerbg.jpg";
      seasonIndex = 2;
      seasonColor = "#006400";
    case 8:
    case 9:
    case 10:
      season = "Fall";
      backgroundImage = "fallbg.jpg";
      seasonIndex = 3;
      seasonColor = "#930";
    default:
      season = "Spring";
  }

  //modify h3 tag with id = month
  let month = months[monthIndex];
  //Display month in heading
  $("#month").html(`<h3 id='month'>Tips for ${month}</h3>`);

  //add id slogan saying happy holidays
  if (monthIndex == 11) {
    $("#slogan").after("<h3>Happy Holidays</h3>");
  }

  //use the month number as index to specials array and modify the #specials div to display text and html from array
  $("#specials").html(specials[monthIndex]);

  //change css to reflect season
  $("header h1, h2").css("color", seasonColor);

  //modify the h3 tag to include month
  $("#welcome").append(" March has arrived.");

  //append year to footerYear selector
  $("#copy").append(year);

  //change the page background image to the seasonal image
  $("body").css("background-image", `url(${backgroundImage})`);

  //change div with season tips to the html and text in the tips array using season index as index
  $("#seasontips").html(tips[seasonIndex]);

  //add class  to the specials id using season as the class name
  $("#specials").addClass(season);

  //replace the text where class = season with what is in specials array
  //$('.season').text(specials);
});
