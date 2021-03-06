  const Notepad = function Notepad(notes = []) {
    getNotes() {
      
    },
    findNoteById(id) {
      
    },
    saveNote(note) {
      
    },
    deleteNote(id) {
      
    },
    updateNoteContent(id, updatedContent) {
      
    },
    updateNotePriority(id, priority) {
      
    },
    filterNotesByQuery(query) {
      
    },
    filterNotesByPriority(priority) {
      
    },
  };


  notepad.saveNote({
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
  });
  
  notepad.saveNote({
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
  });
  
  console.log('Все текущие заметки: ', notepad.getNotes());
