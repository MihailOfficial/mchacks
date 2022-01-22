
    console.log("hello");
    var dir = "images/";
    var fileextension = ".png";
  $.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
      console.log("hello");
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            console.log("hello");
            $("body").append("<img src='" + dir + filename + "'>");
        });
    }
  });
