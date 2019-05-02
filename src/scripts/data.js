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


