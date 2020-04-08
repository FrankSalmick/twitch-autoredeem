setTimeout(function() { 
    setInterval(autoclickCode, 5000);
}, 500);

var autoclickCode = function() {
    // We keep this inside the interval in case the user switches channels (we will have to re-add the text).
    var streamChatLabel = document.querySelector("h5[data-test-selector='chat-room-header-label']");
    if (streamChatLabel == null) return;
    // The label gets reset on channel switch, so it will be null even though we may have added this attribute already earlier.
    if (streamChatLabel.getAttribute("data-autoAppended") === null) {
        streamChatLabel.append(" (Auto ✅)");
        streamChatLabel.setAttribute("data-autoAppended", "true");
    }
    var claimButton = document.getElementsByClassName("claimable-bonus__icon")[0];
    if (claimButton != null) {
        // claimButton.click();
        console.log("Will click!");
    }
}