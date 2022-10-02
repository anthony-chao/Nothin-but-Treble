# :musical_score: Nothin' but Treble
Link to the live site: https://anthony-chao.github.io/Nothin-but-Treble/

## Background
Nothin' but Treble is a music sheet app where users are able to drag quarter notes onto a music sheet. Once notes are placed onto the music sheet, users will have the ability to select between different instruments to play the notes. Users can clear the music sheet and create another masterpiece. This is an interactive demo for users to not only learn the basics of writing music, but also to actually hear what they are writing.

## Functionality & MVPs
In Treble Sheet, users will be able to:
* Drag and drop notes on to the music sheet
![](https://github.com/anthony-chao/Nothin-but-Treble/blob/main/src/images/notes.gif)
* Select which instrument they want to play the music
* Play the music sheet depending on which instrument the user selected and where each note is placed
* Reset the music sheet
![](https://github.com/anthony-chao/Nothin-but-Treble/blob/main/src/images/music.gif)

## Code Snippets
To play the notes that are placed onto the music sheet, all the possible note containers are iterated through to determine if there is a note in a beat. If there is a note placed on the music sheet (appended to a note container), that specific note would be pushed into an array. The note that is pushed onto the array depends on which note container the note is in and which instrument is selected. Once all the notes are in the array, the notes are iterated and played using the setTimeout function so that each note is equally spaced.
```
const notesToBePlayed = [];

for (const container of this.containers) {
    if (container.children.length !== 0) {
        notesToBePlayed.push(container.dataset.row);
    }
}


for (let i = 0; i < notesToBePlayed.length; i++) {
    (function(i) {
        setTimeout(function() {
            rowToNote[notesToBePlayed[i]].play();
            console.log(rowToNote[notesToBePlayed[i]]);
        }, 800 * i);
    })(i);
}
```

## Technologies, Libraries, APIs
This project was implemented with the following technologies:
* Vanilla JavaScript through DOM Manipulation
* HTML5 and CSS3
* Webpack and Babel

## Implementation Timeline

* Friday Afternoon & Weekend - create the music sheet and associate each row on the music sheet with a different note. Design the type of notes (quarter note) and implement the drag and drop functionality on the music sheet. Add/associate audio files for each type of note.
* Monday - add play music and reset music bars buttons. Add rename song button.
* Tuesday - add different instruments and have the ability to change instruments. 
* Wednesday - start CSS styling and testing to ensure all essentially functionality implemented is properly working
* Thursday Morning - continue polishing up CSS and functionality, and push to production.