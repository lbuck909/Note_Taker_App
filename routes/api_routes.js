const util = require('util');
const fs = require('fs');
//Node.js NPM uuid used to generate indiv ids
const { v4: uuidv4 } = require('uuid');
const { error } = require('console');

// Use readFileAsync and writeFileAsync to generate actual notes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf-8');
  }
  write(note){
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }
  addNotes(note) {
    const { title, text } = note

    if ( !title || !text) {
      throw new Error('title and text cannot be empty')
    }

    const userNote = { title, text, id: uuidv4() }

    return this.newNote()
    .then(notes => [...notes, newNote])
    .then(currentNotes => this.write(currentNotes))
    .then(() => this newNote)

  }
  newNote() {
    return this.read()
    .then(notes => {

    })
  }
}

