// const makeJournalEntryComponent = (journalEntry) => {
//   return `<div class="card one">
//           <header class="header">
//           <h2>${journalEntry.date}</h2>
//           </header>
//           <main>
//           <h3>${journalEntry.concept}</h3>
//           <p>${journalEntry.entry}</p>
//           <h4>Mood: ${journalEntry.mood}</h4>
//           </main>
//           </div>`
// }

const buildEntry = {
  makeEntryComponent(journalEntry) {
    return `<div class="card one">
          <header class="header">
          <h2>${journalEntry.date}</h2>
          </header>
          <main>
          <h3>${journalEntry.concept}</h3>
          <p>${journalEntry.entry}</p>
          <h4>mood: ${journalEntry.mood}</h4>
          </main>
          </div>`
  }
}