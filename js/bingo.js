/*
This function allows to toggle the arrow image on a menu link
- linkId is the id selector of the link
- imageid is the id selector of the image to toggle
- rightImageName is just the name of the image (to identify the current value)
- rightImageSrc is the source path of the right image
- leftImageSrc is the source path of the left image
- fadeOutTime, it uses an animation to do the switch, this is the time as a string in milliseconds
Example:
setToggleLinkArrow('#profile-tab', "#arrow-icon", "right-arrow.png", "images/right-arrow.png", "images/left-arrow.png", '300');
*/
function setToggleLinkArrow (linkId, imageId, rightImageName, rightImageSrc, leftImageSrc, fadeOutTime, resetFunction) {

    $(linkId).click(function(){
    
        let image = $(imageId);
        
        image.fadeOut(fadeOutTime, function () {
            
            let src = image.attr("src");
            if (src.endsWith (rightImageName) ){
                image.attr("src", leftImageSrc);
            }
            else{
                image.attr("src", rightImageSrc);
            }
            image.fadeIn(fadeOutTime);
        });
        
        if (resetFunction) {
            resetFunction();
        }
        return true;
        
    });
}    


function resetCollapseMenu(linkId, imageId, rightImageSrc, fadeOutTime) { 

    let image = $(imageId);
    let src = image.attr("src");
    if (src != rightImageSrc) {

        image.fadeOut(fadeOutTime, function () {
        
            image.attr("src", rightImageSrc);
            image.fadeIn(fadeOutTime);
        });
    }

    $(linkId).collapse("hide");
   
}


// When the padding top is 40px, means is full screen and the links should work
// when it is not 40px, is mobile screen and the link should not go
$(".menu_has_children a").click(function() {
    console.log($(this).parent().attr('class'))

    return "menu_has_children" === $(this).parent().attr('class')?
        "40px" === $(this).css('padding-top'):
        true;
});

