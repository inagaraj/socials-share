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
    var href = "https://wa.me/?text="+quotes_text+"\r\n\r\n -via:"+location;
    window.open(encodeURI(href), "_blank");
});
jQuery(document).on("click", "#share-telegram-icon", function() {
    var quotes_text = jQuery(this).parents("blockquote").find('p').clone().find('br').prepend('\r\n').end().text();
    var location = window.location.href;
    quotes_text = quotes_text+"\r\n\r\n -via:"+location;
    // var href = "tg://msg?text="+quotes_text;
    var href = "https://t.me/share/url?url="+quotes_text;
    window.open(encodeURI(href), "_blank");
});
jQuery(".wp-block-image").each(function() {

    var imageurl = jQuery(this).find("img").attr("src");
    var download_html =`<div class="download-link">
                            <a id="download_nopurchased" class="click_download icon-download" href="${imageurl}"  download="${imageurl}" data-url="${imageurl}"><i class="fas fa-download"></i> Download</a>
                        </div>`;
    jQuery(this).append(download_html);
});
jQuery(".click_download").click(function() {
    var file = jQuery(this).data("url");
    var file_name = getFileName(file);
    forceDownload(file,file_name);
    //window.location.href="'.$plugin_url.'?file=file;
    // setTimeout(function(){ location.reload(); }, 2000);
    // var formData = new FormData();
    // formData.append("file", file);
    // jQuery.ajax({
    //     url: "./wp-content/plugins/custom-socials-share/download.php",
    //     contentType: false,
    //     processData: false,
    //     data: formData,
    //     type: "POST",
    //     success: function (data) {
    //         console.log(data);
        
    //     }
    // });
});
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}
function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

new ClipboardJS('.copyit');  

jQuery(document).on("click", ".copyit", function() {
    jQuery(this).find('span').fadeIn(500);
    jQuery(this).find('span').fadeOut(1000);

});

