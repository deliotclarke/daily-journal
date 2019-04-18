const wrapper = document.querySelector('.wrapper')

const renderJournalEntries = (entry) => {
  wrapper.innerHTML += entry;
}