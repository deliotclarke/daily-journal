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
  }
}


