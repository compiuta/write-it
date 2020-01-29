(function(window) {
    let writeItController = {
        init: function() {
            window.app.writeItView.init();
        }
    }
    
    window.app = window.app || {};
    window.app.writeItController = writeItController;
})(window);