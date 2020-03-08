(function(window) {
    let writeItView = {
        toggleCreateNote: function() {
            writeItView.createNoteModal.classList.toggle('hide');
            writeItView.createNoteButton.classList.toggle('hide');
        },
        showNoteAlert: function(message) {
            this.createNoteAlert.innerText = message;
            this.createNoteAlert.classList.remove('hide');
            setTimeout(() => {
                this.createNoteAlert.classList.add('hide');
            }, 3000);
        },
        createNoteElement: function() {
            this.noteListContainer = document.createElement('div');
            this.noteTitle = document.createElement('h3');
            this.noteDeleteButton = document.createElement('span');
            this.noteCreatedDate = document.createElement('div');

            this.noteListContainer.classList.add('note-list-container');
            this.noteTitle.classList.add('note-list-title');
            this.noteDeleteButton.classList.add('note-delete-button');
            this.noteDeleteButton.setAttribute('data-js', 'note-delete-button');
            this.noteCreatedDate.classList.add('note-list-date');

            this.noteDeleteButton.innerText = 'x';
            
            return this.noteCreatedDate, this.noteDeleteButton,  this.noteTitle, this.noteListContainer;
        },
        setActiveListNote: function(noteSelected) {
            let currenSelectedNote = document.querySelectorAll('.selected-note');

            currenSelectedNote.forEach(function(el){
                el.classList.remove('selected-note');
            });

            noteSelected.classList.add('selected-note');
        },
        clearNoteArea: function() {
            console.log('clearing note area');
            app.writeItView.notesViewerTitle.innerText = '';
            app.writeItView.notesViewerBody.innerText = '';
            app.writeItView.notesViewerArea.removeAttribute('data-current-note');
            app.writeItView.notesViewerDate.innerText = '';
        },
        getDomElements: function() {
            this.createNoteButton = document.querySelector('[data-js="create-note-button"]');
            this.notesContainer = document.querySelector('[data-js="notes-list-container"]');
            this.notesTitle = document.querySelector('[data-js="notes-title"]');
            this.notesBody = document.querySelector('[data-js="notes-body"]');
            this.createNoteModal = document.querySelector('[data-js="create-note-modal"]');
            this.createNoteTextArea = document.querySelector('[data-js="create-note-text-area"]');
            this.createNoteSubmit = document.querySelector('[data-js="create-note-submit"]');
            this.createNoteTitle = document.querySelector('[data-js="create-note-title"]');
            this.createNoteAlert = document.querySelector('[data-js="create-note-alert"]');
            this.notesViewerArea = document.querySelector('[data-js="note-viewer-area"]');
            this.notesViewerTitle = document.querySelector('[data-js="notes-viewer-title"]');
            this.notesViewerDate = document.querySelector('[data-js="notes-viewer-date"]');
            this.notesViewerBody = document.querySelector('[data-js="notes-viewer-body"]');
            this.closeNoteModal = document.querySelector('[data-js="close-note-modal"]');
        },
        init: function() {
            this.getDomElements();
            this.closeNoteModal.addEventListener('click', this.toggleCreateNote);
            this.createNoteButton.addEventListener('click', writeItView.toggleCreateNote);
            this.render();
        },
        render: function() {
            this.notesContainer.innerHTML = '';
            app.writeItController.populateNoteList();
        }
    }

    window.app = window.app || {};
    window.app.writeItView = writeItView;
})(window);