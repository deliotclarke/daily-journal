const allEntries = [];

const journalValue1 = {
  date: '2019-04-08',
  workingTopic: 'group project',
  jEntry: "we're slowly learning how to work in groups. it's been fun.",
  mood: 'pretty tight'
}

const journalValue2 = {
  date: '2019-04-10',
  workingTopic: 'javascript',
  jEntry: 'started javascript. really happy to get going on that. stoked to get real confused.',
  mood: 'sick sick sick'
}

const journalValue3 = {
  date: '2019-04-11',
  workingTopic: 'javascript objects',
  jEntry: 'started objects today. remembered I need to make sure I pay really close attention to small details and not get too tripped up when I don\'t get it the first time',
  mood: 'meh'
}

function addEntry(entry) {
  allEntries.push(entry);
  console.log(allEntries);
}

addEntry(journalValue1);
addEntry(journalValue2);
addEntry(journalValue3);

// for...in loop - used to iterate over an object. must have square bracket notation to run it. essentially iterates over the object and can be used to grab the value of each key.

for (const prop in journalValue3) {
  console.log(`${prop} is ${journalValue3[prop]}`);
}