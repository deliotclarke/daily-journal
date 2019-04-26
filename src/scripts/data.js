// fetch("http://localhost:3000/entries")
//   .then(entries => entries.json())
//   .then(parsedEntries => {
//     parsedEntries.forEach(entry => {
//       const journalEntry = makeJournalEntryComponent(entry)
//       renderJournalEntries(journalEntry)
//     })
//   })

const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries")
      .then(response => response.json())
  }
}