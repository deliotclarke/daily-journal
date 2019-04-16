function addEntry(entry) {
  journalEntries.push(entry);
  console.log(journalEntries);
}

// for...in loop - used to iterate over an object. must have square bracket notation to run it. essentially iterates over the object and can be used to grab the value of each key.

// for (const prop in journalValue3) {
//   console.log(`${prop} is ${journalValue3[prop]}`);
// }

const wrapper = document.querySelector('.wrapper')

const makeJournalEntryComponent = (journalEntry) => {
  return `<div class="card one">
          <header class="header">
          <h2>${journalEntry.date}</h2>
          </header>
          <main>
          <h3>${journalEntry.concept}</h3>
          <p>${journalEntry.entry}</p>
          <h4>Mood: ${journalEntry.mood}</h4>
          </main>
          </div>`
}

const renderJournalEntries = (entry) => {
  wrapper.innerHTML += entry;
}

fetch("http://localhost:3000/entries")
  .then(entries => entries.json())
  .then(parsedEntries => {
    parsedEntries.forEach(entry => {
      const journalEntry = makeJournalEntryComponent(entry)
      renderJournalEntries(journalEntry)
    })
  })