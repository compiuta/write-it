(function(window){
    let writeItModel = {
        allNotes: {},
        noteCount: 0,
        months: ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"],
        getData: function() {
            this.allNotes = JSON.parse(localStorage.getItem('allNotes'));;
            this.noteCount = JSON.parse(localStorage.getItem('noteCount'));;
        },
        setData: function(noteObject) {
            if(JSON.parse(localStorage.getItem('allNotes')) && noteObject){
                let data = JSON.parse(localStorage.getItem('allNotes'));
                let notesCreated = JSON.parse(localStorage.getItem('noteCount'));
            
                data['note' + notesCreated] = noteObject;
                notesCreated++;

                localStorage.setItem('allNotes', JSON.stringify(data));
                localStorage.setItem('noteCount', JSON.stringify(notesCreated));
            } else if(!(JSON.parse(localStorage.getItem('allNotes')))) {
                localStorage.setItem('allNotes', JSON.stringify({}));
                localStorage.setItem('noteCount', JSON.stringify(0));
            }

            this.getData();
        },
        deleteData: function(noteToDelete) {
            let data = JSON.parse(localStorage.getItem('allNotes'));
           
            delete data[noteToDelete];
            localStorage.setItem('allNotes', JSON.stringify(data));

            this.getData();
        },
        init: function() {
            this.setData();
        }
    }

    window.app = window.app || {};
    window.app.writeItModel = writeItModel;
})(window)