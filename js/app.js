(function($) {

    console.log("JS");

    var title = $('meta[property="og:title"]').attr('content');
    var url = $('meta[property="og:url"]').attr('content');
    console.log(title);

    var a2a_config = a2a_config || {};

    a2a_config.templates = {
        twitter: "Reading: ${title} ${link} by @AddToAny"
    };

})(jQuery);