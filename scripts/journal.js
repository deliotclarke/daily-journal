const journalEntries = [
  {
    date: '2019-04-08',
    workingTopic: 'group project',
    jEntry: "we're slowly learning how to work in groups. it's been fun.",
    mood: 'pretty tight'
  },
  {
    date: '2019-04-10',
    workingTopic: 'javascript',
    jEntry: 'started javascript. really happy to get going on that. stoked to get real confused.',
    mood: 'sick sick sick'
  },
  {
    date: '2019-04-11',
    workingTopic: 'javascript objects',
    jEntry: 'started objects today. remembered I need to make sure I pay really close attention to small details and not get too tripped up when I don\'t get it the first time',
    mood: 'meh'
  }
];

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
          <h3>${journalEntry.workingTopic}</h3>
          <p>${journalEntry.jEntry}</p>
          <h4>Mood: ${journalEntry.mood}</h4>
          </main>
          </div>`
}

const renderJournalEntries = (entries) => {
  for (let i = 0; i < entries.length; i++) {
    let entry = makeJournalEntryComponent(entries[i]);
    wrapper.innerHTML += entry;
    console.log(entry);
  }
}

renderJournalEntries(journalEntries);