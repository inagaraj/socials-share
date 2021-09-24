var share_html = `<div class="quote-share">
                    <span>Share:</span>
                    <a  class="icon-facebook" id="share-facebook-icon"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" class="icon-whatsapp" data-action="share/whatsapp/share" id="share-whatsapp-icon"><i class="fab fa-whatsapp"></i></a>
                    <a class="icon-telegram" id="share-telegram-icon"><i class="fab fa-telegram"></i></a>
                    <a class="copyit">Copy<span class="copied">Copied</span></a>
                </div>`;
jQuery("blockquote").addClass("custom-social-share").append(share_html);

//jQuery(".wp-block-quote p").prepend('<span class="icon-quote-left"></span>');

jQuery(".copyit").each(function() {
    cool = jQuery(this).parents("blockquote").find('p').clone().find('br').prepend('\r\n').end().text();
    jQuery(this).attr('data-clipboard-text', cool);
});

jQuery(document).on("click", "#share-facebook-icon", function() {
    var quotes_text = jQuery(this).parents("blockquote").find('p').clone().find('br').prepend('\r\n').end().text();
    var location = window.location.href;
    var href = "https://www.facebook.com/sharer/sharer.php?u="+location+"&quote="+quotes_text;
    window.open(encodeURI(href), "_blank");
});

jQuery(document).on("click", "#share-whatsapp-icon", function() {
    var quotes_text = jQuery(this).parents("blockquote").find('p').clone().find('br').prepend('\r\n').end().text();
    // var href = "https://api.whatsapp.com/?text="+quotes_text;
    var location = window.location.href;
    var href = "https://wa.me/?text="+quotes_text+"\r\n\r\nvia-"+location;
    window.open(href, "_blank");
});
jQuery(document).on("click", "#share-telegram-icon", function() {
    var quotes_text = jQuery(this).parents("blockquote").find('p').clone().find('br').prepend('\r\n').end().text();
    var location = window.location.href;
    quotes_text = quotes_text+"\r\n\r\nvia-"+location;
    var href = "tg://msg?text="+quotes_text;
    window.open(href, "_blank");
});

new ClipboardJS('.copyit');  

jQuery(document).on("click", ".copyit", function() {
    jQuery(this).find('span').fadeIn(500);
    jQuery(this).find('span').fadeOut(1000);

});
