setTimeout(function() { 
    // reduced from 5000 to 3000 b/c sometimes it would take a while to add the (Auto ✅) and look broken
    setInterval(autoclickCode, 3000);
}, 500);

var autoclickCode = function() {
    try {
        // We keep this inside the interval in case the user switches channels (we will have to re-add the text).
        var streamChatLabel = document.getElementById("chat-room-header-label")
        if (streamChatLabel == null) return;
        // The label gets reset on channel switch, so it will be null even though we may have added this attribute already earlier.
        if (streamChatLabel.getAttribute("data-autoAppended") === null) {
            streamChatLabel.append(" (Auto ✅)");
            streamChatLabel.setAttribute("data-autoAppended", "true");
        }
        var claimButton = document.getElementsByClassName("claimable-bonus__icon")[0];
        if (claimButton != null) {
            claimButton.click();
        }
    } catch(e) {
        console.log("content_idle happened before twitch finished loading!");
    }
}