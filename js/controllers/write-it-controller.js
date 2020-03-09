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

                app.writeItView.showNoteAlert('Note Saved Successfully!');

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
        saveNoteBodyEdit: function() {
            let newObjectData = {
                noteID: app.writeItView.notesViewerArea.dataset.currentNote,
                newMesage: app.writeItView.notesViewerBody.value
            }

            app.writeItView.notesBodyToggleEditView();
            app.writeItModel.editData(newObjectData);
        },
        removeNote: function(e) {
            e.stopPropagation();
            let noteToDelete = this.parentNode.dataset.note;
            this.parentNode.classList.add('hide');
            app.writeItModel.deleteData(noteToDelete);
            
            if(app.writeItView.notesViewerArea.dataset.currentNote === noteToDelete) {
                app.writeItView.clearNoteArea();
            }

            if(app.writeItView.notesViewerBody.classList.contains('edit-mode')) {
                app.writeItView.notesBodyToggleEditView(true);
            }
        },
        populateNoteList: function() {
            let noteListFragment = document.createDocumentFragment();

            for(let key in app.writeItModel.allNotes) {
                app.writeItView.createNoteElement();
                app.writeItView.noteTitle.innerText = app.writeItModel.allNotes[key].noteTitle;
                app.writeItView.noteCreatedDate.innerText = app.writeItModel.allNotes[key].noteCreatedDate;
                app.writeItView.noteListContainer.setAttribute('data-note', key);
                app.writeItView.noteListContainer.appendChild(app.writeItView.noteTitle);
                app.writeItView.noteListContainer.appendChild(app.writeItView.noteCreatedDate);
                app.writeItView.noteDeleteButton.addEventListener('click', this.removeNote);
                app.writeItView.noteListContainer.appendChild(app.writeItView.noteDeleteButton);
                app.writeItView.noteListContainer.addEventListener('click', this.populateNoteArea);
                
                if(app.writeItView.notesViewerArea.dataset.currentNote === key) {
                    app.writeItView.noteListContainer.classList.add('selected-note');
                 }

                noteListFragment.prepend(app.writeItView.noteListContainer);
            }
            
            app.writeItView.notesContainer.appendChild(noteListFragment);
        },
        populateNoteArea: function() {

            if(app.writeItView.notesViewerBody.classList.contains('edit-mode')) {
                app.writeItView.notesBodyToggleEditView();
            }

            app.writeItView.setActiveListNote(this);

            let selectedNote = this.dataset.note;
            app.writeItView.notesViewerTitle.innerText = app.writeItModel.allNotes[selectedNote].noteTitle;
            app.writeItView.notesViewerBody.value = app.writeItModel.allNotes[selectedNote].noteBody;
            app.writeItView.notesViewerArea.setAttribute('data-current-note', selectedNote);
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