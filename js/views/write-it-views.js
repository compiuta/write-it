(function(window) {
    let writeItView = {
        toggleCreateNote: function() {
            writeItView.createNoteModal.classList.toggle('hide');
        },
        populateNotes: function(data) {
            
        },
        init: function() {
            this.createNoteButton = document.querySelector('[data-js="create-note-button"]');
            this.notesContainer = document.querySelector('[data-js="notes-container"]');
            this.notesTitle = document.querySelector('[data-js="notes-title"]');
            this.notesBody = document.querySelector('[data-js="notes-body"]');
            this.createNoteModal = document.querySelector('[data-js="create-note-modal"]');
            this.createNoteTextArea = document.querySelector('[data-js="create-note-text-area"]');
            this.createNoteSubmit = document.querySelector('[data-js="create-note-submit"]');

            writeItView.createNoteButton.addEventListener('click', writeItView.toggleCreateNote);
        },
        render: function() {

        }
    }

    window.app = window.app || {};
    window.app.writeItView = writeItView;
})(window);