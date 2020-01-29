(function(window) {
    let writeItController = {
        addNote: function(e) {
            e.preventDefault();
            let noteObject = {
                noteTitle: app.writeItView.createNoteTitle.value,
                noteBody: app.writeItView.createNoteTextArea.value,
                noteCreatedDate: new Date()
            }

            if(app.writeItView.createNoteTitle.value.replace(/ /g, '') !== '' && app.writeItView.createNoteTextArea.value.replace(/ /g, '') !== '') {
                app.writeItModel.setData(noteObject);

                app.writeItView.createNoteTitle.value = '';
                app.writeItView.createNoteTextArea.value = '';

                app.writeItView.showNoteAlert('Message Saved Successfully!');
            } else {
                if(app.writeItView.createNoteTitle.value.replace(/ /g, '') === '') {
                    app.writeItView.createNoteTitle.value = '';
                }

                if(app.writeItView.createNoteTextArea.value.replace(/ /g, '') === '') {
                    app.writeItView.createNoteTextArea.value = '';
                }

                app.writeItView.showNoteAlert('Please Fill Out All Fields');
            }
        },
        init: function() {
            app.writeItView.init();
            app.writeItModel.init();

            app.writeItView.createNoteSubmit.addEventListener('click', this.addNote);
        }
    }
    
    window.app = window.app || {};
    window.app.writeItController = writeItController;
})(window);