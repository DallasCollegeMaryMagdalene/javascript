/* Create a JavaScript file named rss-feed.js */
$(document).ready(function () {
	$.get('proxy.php?url=https://feeds.fireside.fm/bibleinayear/rss', function (data) {
      // check to see the type of data loaded
      console.log(data);

      // grab the feed title
      var title = $(data).find("channel > title");
      $("#title").html(title);

      // grab the feed description
      var description = $(data).find("channel > description");
      $("#description").html(description);

      // grab the feed posts
      var itemNum = 0;
      $(data)
        .find("item")
        .each(function () {
          $item = $(this);
          itemNum++;

          // grab the post title
          var title = $item.find("title").text();
          // grab the post URL
          var link = $item.find("link").text();
          // next, the description
          var description = $item.find("description").text();
          // don't forget the published date
          var pubDate = $item.find("pubDate").text();
          pubDate = pubDate.slice(0, pubDate.length - 15);

          // grab the related categories and assemble them
          $cat = "<p style='font-size: smaller;'>Categories: ";
          $item.find("category").each(function() {
            $cat += " | " + $(this).text() + " ";
          });
          $cat += "</p>";

          // format the post
          var post =
            "<fieldset>" +
            "<legend> Article " +
            itemNum +
            " </legend>" +
            "<h4><a href='" +
            link +
            "'>" +
            title +
            "</a></h4>" +
            "<p>" +
            pubDate +
            "</p>" +
            description +
            $cat +
            "</fieldset>";

          // limit the output to 5 posts
          if (itemNum <= 5) {
            // add the post to the feed
            $("#feed").append(post);
          }
        }); // end find
    }
  ); // end get
}); // end ready
