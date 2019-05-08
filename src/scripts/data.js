// fetch("http://localhost:3000/entries")
//   .then(entries => entries.json())
//   .then(parsedEntries => {
//     parsedEntries.forEach(entry => {
//       const journalEntry = makeJournalEntryComponent(entry)
//       renderJournalEntries(journalEntry)
//     })
//   })

const APIurl = "http://localhost:8088/entries";

const API =
{
  getJournalEntries() {
    return fetch(`${APIurl}`)
      .then(response => response.json())
  },
  getSingleEntry(entryID) {
    return fetch(`${APIurl}/${entryID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
  },
  filterEntriesByMood(entryMood) {
    return fetch(`${APIurl}`)
      .then(response => response.json())
      .then(entries => {
        return entries.filter((entry) => {
          let isMood = false;
          if (entry.mood === entryMood) {
            isMood = true;
            return isMood;
          }
        })
        // return newEntries;
      })
  },
  saveJournalEntry(entry) {
    return fetch(`${APIurl}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(entry)
    }).then(response => response.json())
  },
  editEntry(id, entryObj) {
    return fetch(`${APIurl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObj)
    }).then(response => response.json());
  },
  deleteEntry(id) {
    return fetch(`${APIurl}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    }).then(response => response.json())
  }
}

//for the edit button, i'd like to turn the card being edited into a form, then submit that to change the card itself. Example below:
    // `<div class="card one">
    //       <header class="header">
    //       <h2>${journalEntry.date}</h2> ----> h2 turns into date input
    //       </header>
    //       <main>
    //       <h3>${journalEntry.concept}</h3> ----> h3 turns into text input
    //       <p>${journalEntry.entry}</p> -----> p turn into text area input
    //       <h4>mood: ${journalEntry.mood}</h4> -----> h4 turns into drop down menu
    //       </main>
    //       </div>`