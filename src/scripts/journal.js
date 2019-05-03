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
const alert = document.querySelector("#alert_p");


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

  //validate values
  if (validateForm(newDate, newConcept, newEntry, newMood)) {

    //create a new object to send
    const newJournalEntry = entryFactory(newDate, newConcept, newEntry, newMood);

    //save the object to entries.json
    API.saveJournalEntry(newJournalEntry).then(update)
  }
})

// function to check validation of form inputs

const validateForm = (date, concept, entry, mood) => {
  let isValid = false;
  if (date !== "" && concept !== undefined && entry !== undefined && mood !== "!choose from the following moods!") {
    if (concept.length >= 5 && concept.length <= 23) {
      if (entry.length >= 5 && entry.length <= 425) {
        alert.innerHTML = ""
        document.querySelector(".alert_wrapper").style.display = "none";
        isValid = true;
        return isValid;
      } else {
        document.querySelector(".alert_wrapper").style.display = "block";
        alert.innerHTML = "Sorry, dude, your entry length isn't cutting it, make it longer or shorter to submit!"
        return isValid;
      }
    } else {
      document.querySelector(".alert_wrapper").style.display = "block";
      alert.innerHTML = "Sorry, topic length is not up to snuff! Make it longer or shorter, my dude."
      return isValid;
    }
  } else {
    document.querySelector(".alert_wrapper").style.display = "block";
    alert.innerHTML = "Looks like you missed an entry field, try again!"
    isValid = false;
    return isValid;
  }
}