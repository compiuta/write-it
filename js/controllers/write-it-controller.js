(function(window) {
    let writeItController = {
        addNote: function(e) {
            e.preventDefault();
            let currentDate = new Date();
            let noteObject = {
                noteTitle: app.writeItView.createNoteTitle.value,
                noteBody: app.writeItView.createNoteTextArea.value,
                noteCreatedDate: app.writeItModel.months[currentDate.getMonth()] + ' ' + currentDate.getDay() + ', ' + currentDate.getFullYear()
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

                app.writeItView.noteListContainer.setAttribute('data-note', 'note' + i);
                app.writeItView.noteListContainer.appendChild(app.writeItView.noteTitle);
                app.writeItView.noteListContainer.appendChild(app.writeItView.noteCreatedDate);
                app.writeItView.noteListContainer.addEventListener('click', this.populateNoteArea);
                noteListFragment.appendChild(app.writeItView.noteListContainer);
            }
            
            app.writeItView.notesContainer.appendChild(noteListFragment);
        },
        populateNoteArea: function() {
            app.writeItView.setActiveListNote(this);

            let selectedNote = this.dataset.note;
            app.writeItView.notesViewerTitle.innerText = app.writeItModel.allNotes[selectedNote].noteTitle;
            app.writeItView.notesViewerBody.innerText = app.writeItModel.allNotes[selectedNote].noteBody;
            app.writeItView.notesViewerDate.innerText = app.writeItModel.allNotes[selectedNote].noteCreatedDate;

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