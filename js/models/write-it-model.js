(function(window){
    let writeItModel = {
        allNotes: {},
        months: ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"],
        getData: function() {
            for(let i = 0; i < Object.keys(localStorage).length; i++) {
                this.allNotes['note' + i] = JSON.parse(localStorage.getItem('note' + i));
            }
        },
        setData: function(noteObject) {
            localStorage.setItem('note' + (Object.keys(this.allNotes).length), JSON.stringify(noteObject));

            this.getData();
        },
        init: function() {
            this.getData();
        }
    }

    window.app = window.app || {};
    window.app.writeItModel = writeItModel;
})(window);