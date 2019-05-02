/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

//selectors for form inputs
const date = document.querySelector("#date");
const concept = document.querySelector("#workingConcept");
const entry = document.querySelector("#jEntry");
const mood = document.querySelector("#mood");
const saveBtn = document.querySelector("#form_button");

//populate DOM on load
API.getJournalEntries().then(journalEntries => {
  journalEntries.forEach(entry => {
    const journalEntry = buildEntry.makeEntryComponent(entry)
    entriesToDOM.renderEntries(journalEntry)
  })
});

//entry grabber, builder and render-er
function update() {
  wrapper.innerHTML = "";
  API.getJournalEntries().then(journalEntries => {
    journalEntries.forEach(entry => {
      const journalEntry = buildEntry.makeEntryComponent(entry)
      entriesToDOM.renderEntries(journalEntry)
    })
  })
}

const entryFactory = (date, concept, entry, mood) => {
  return {
    "date": date,
    "concept": concept,
    "entry": entry,
    "mood": mood
  }
}

saveBtn.addEventListener("click", () => {
  event.preventDefault()

  //grab value of all the inputs
  let newDate = date.value;
  let newConcept = concept.value;
  let newEntry = entry.value;
  let newMood = mood.value;

  //create a new object to send
  const newJournalEntry = entryFactory(newDate, newConcept, newEntry, newMood);

  //save the object to entries.json
  API.saveJournalEntry(newJournalEntry).then(update)
})

// post.then(get).then(render)