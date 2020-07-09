(function(window){
    let writeItModel = {
        allNotes: {},
        noteCount: 0,
        months: ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"],
        getData: function() {
            this.allNotes = JSON.parse(localStorage.getItem('allNotes'));
            this.noteCount = JSON.parse(localStorage.getItem('noteCount'));
        },
        editData: function(noteObject) {
            let data = JSON.parse(localStorage.getItem('allNotes'));

            data[noteObject.noteID].noteBody = noteObject.newMesage;

            localStorage.setItem('allNotes', JSON.stringify(data));

            this.getData();
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
                this.newUserData();
            }

            this.getData();
        },
        deleteData: function(noteToDelete) {
            let data = JSON.parse(localStorage.getItem('allNotes'));
           
            delete data[noteToDelete];
            localStorage.setItem('allNotes', JSON.stringify(data));

            this.getData();
        },
        newUserData: function() {
            if(!localStorage.getItem('newUser')) {
                let currentDate = new Date();

                const newUserNote = {
                    note0: {
                        noteTitle: 'Welcome 😀',
                        noteBody: 'Start creating your own notes by clicking on the create note button',
                        noteCreatedDate: this.months[currentDate.getMonth()] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear()
                    }
                }

                localStorage.setItem('allNotes', JSON.stringify(newUserNote));
                localStorage.setItem('newUser', JSON.stringify(0));
                localStorage.setItem('noteCount', JSON.stringify(1));
            } else {
                localStorage.setItem('noteCount', JSON.stringify(0));
            }
        }
        ,
        init: function() {
            
            this.setData();
        }
    }

    window.app = window.app || {};
    window.app.writeItModel = writeItModel;
})(window)