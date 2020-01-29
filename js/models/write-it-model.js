(function(window){
    let writeItModel = {
        allNotes: {},
        getData: function() {

        },
        setData: function(noteObject) {
            localStorage.setItem(Object.keys(allNotes).length + 1, noteObject);
        },
        init: function() {

        }
    }

    window.app = window.app || {};
    window.app.writeItModel = writeItModel;
})(window);