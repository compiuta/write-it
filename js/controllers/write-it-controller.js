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

                app.writeItView.render();
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
        populateNoteList: function() {
            let noteListFragment = document.createDocumentFragment();

            for(let i = 0; i < Object.keys(app.writeItModel.allNotes).length; i++) {
                app.writeItView.createNoteElement();
                app.writeItView.noteTitle.innerText = app.writeItModel.allNotes['note' + i].noteTitle;
                app.writeItView.noteCreatedDate.innerText = app.writeItModel.allNotes['note' + i].noteCreatedDate;

                app.writeItView.noteListContainer.appendChild(app.writeItView.noteTitle);
                app.writeItView.noteListContainer.appendChild(app.writeItView.noteCreatedDate);
                noteListFragment.appendChild(app.writeItView.noteListContainer);
            }
            
            app.writeItView.notesContainer.appendChild(noteListFragment);
        },
        populateNoteArea: function() {

        },
        init: function() {
            app.writeItView.init();
            app.writeItModel.init();
            this.populateNoteList();
            app.writeItView.createNoteSubmit.addEventListener('click', this.addNote);
        }
    }
    
    window.app = window.app || {};
    window.app.writeItController = writeItController;
})(window);