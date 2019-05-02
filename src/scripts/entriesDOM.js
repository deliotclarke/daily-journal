// const renderJournalEntries = (entry) => {
//   wrapper.innerHTML += entry;
// }

const wrapper = document.querySelector('#wrapper');

const entriesToDOM = {
  renderEntries(entry) {
    wrapper.innerHTML += entry;
  }
}