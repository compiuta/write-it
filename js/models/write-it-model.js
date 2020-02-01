(function(window){
    let writeItModel = {
        allNotes: {},
        noteCount: 0,
        months: ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"],
        getData: function() {
            let data = JSON.parse(localStorage.getItem('allNotes'));
            let notesCreated = JSON.parse(localStorage.getItem('noteCount'));
        
            this.allNotes = data;
            this.noteCount = notesCreated;
        },
        setData: function(noteObject) {
            let data = JSON.parse(localStorage.getItem('allNotes'));
            let notesCreated = JSON.parse(localStorage.getItem('noteCount'));
           
            data['note' + notesCreated] = noteObject;
            notesCreated++;

            localStorage.setItem('allNotes', JSON.stringify(data));
            localStorage.setItem('noteCount', JSON.stringify(notesCreated));

            this.getData();
        },
        deleteData: function(noteToDelete) {
            let data = JSON.parse(localStorage.getItem('allNotes'));
           
            delete data[noteToDelete];
            localStorage.setItem('allNotes', JSON.stringify(data));

            this.getData();
        },
        init: function() {
            if(!(JSON.parse(localStorage.getItem('allNotes')))){
                localStorage.setItem('allNotes', JSON.stringify({}));
                localStorage.setItem('noteCount', JSON.stringify(0));
            }

            this.getData();
        }
    }

    window.app = window.app || {};
    window.app.writeItModel = writeItModel;
})(window)