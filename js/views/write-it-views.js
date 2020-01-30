(function(window) {
    let writeItView = {
        toggleCreateNote: function() {
            writeItView.createNoteModal.classList.toggle('hide');
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
            this.noteTitle = document.createElement('div');
            this.noteCreatedDate = document.createElement('div');

            this.noteListContainer.classList.add('note-list-container');
            this.noteTitle.classList.add('note-list-title');
            this.noteCreatedDate.classList.add('note-list-date');
            
            return this.noteCreatedDate, this.noteTitle, this.noteListContainer;

        },
        init: function() {
            this.createNoteButton = document.querySelector('[data-js="create-note-button"]');
            this.notesContainer = document.querySelector('[data-js="notes-container"]');
            this.notesTitle = document.querySelector('[data-js="notes-title"]');
            this.notesBody = document.querySelector('[data-js="notes-body"]');
            this.createNoteModal = document.querySelector('[data-js="create-note-modal"]');
            this.createNoteTextArea = document.querySelector('[data-js="create-note-text-area"]');
            this.createNoteSubmit = document.querySelector('[data-js="create-note-submit"]');
            this.createNoteTitle = document.querySelector('[data-js="create-note-title"]');
            this.createNoteAlert = document.querySelector('[data-js="create-note-alert"]');
            this.notesViewerTitle = document.querySelector('[data-js="notes-viewer-title"]');
            this.notesViewerDate = document.querySelector('[data-js="notes-viewer-date"]');
            this.notesViewerBody = document.querySelector('[data-js="notes-viewer-body"]');

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