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

//this needs to be reworked to used createElement and appendChild --> that way i can pass in the ID to the buttons and their function that will delete and edit the specific card

// const buildEntry = {
//   makeEntryComponent(journalEntry) {
//     return `<div class="card one" id="${journalEntry.id}">
//           <header class="header">
//           <h2>${journalEntry.date}</h2>
//           </header>
//           <main>
//           <h3>${journalEntry.concept}</h3>
//           <p>${journalEntry.entry}</p>
//           <h4>mood: ${journalEntry.mood}</h4>
//           </main>
//           </div>`
//   }
// }

const buildEntry = {
  makeEntryComponent(journalEntry) {

    //creates initial div for the card and adds the necessary identifiers for CSS
    let journalCard = document.createElement("div");
    setAttributes(journalCard, {
      id: `entry_${journalEntry.id}`,
      class: "card one"
    });

    //creates header and appends h2 with date to header --> then appends to card
    let cardHeader = document.createElement("header");
    setAttributes(cardHeader, {
      class: "header"
    })
    let cardDate = document.createElement("h2");
    setAttributes(cardDate, {
      id: `cardDate_${journalEntry.id}`
    })
    cardDate.textContent = `${journalEntry.date}`;
    cardHeader.appendChild(cardDate);
    journalCard.appendChild(cardHeader);

    //creates main body of card
    let cardBody = document.createElement("main");

    //creates content and appends proper data to that content --> then appends everything to card
    let cardConcept = document.createElement("h3");
    setAttributes(cardConcept, {
      id: `cardConcept_${journalEntry.id}`
    })
    cardConcept.textContent = `${journalEntry.concept}`;
    cardBody.appendChild(cardConcept);

    let cardEntry = document.createElement("p");
    setAttributes(cardEntry, {
      id: `cardEntry_${journalEntry.id}`
    })
    cardEntry.textContent = `${journalEntry.entry}`;
    cardBody.appendChild(cardEntry);

    let cardMood = document.createElement("h4");
    cardMood.textContent = `mood: ${journalEntry.mood}`;
    setAttributes(cardMood, {
      id: `cardMood_${journalEntry.id}`
    })
    cardBody.appendChild(cardMood);
    journalCard.appendChild(cardBody);

    //creates card button div and sets attributes
    let cardButtonDiv = document.createElement("div");
    setAttributes(cardButtonDiv, {
      id: "card_button_div",
      class: "card_button_div"
    })

    //creates card buttons w/ id's and adds event listeners with functions to be written to delete and edit the specific card
    let editButton = document.createElement("button");
    setAttributes(editButton, {
      id: `edit_button_${journalEntry.id}`,
      class: "edit_button"
    })
    editButton.textContent = "edit entry";
    editButton.addEventListener("click", () => {

      // i think the edit entry function has to exist on this page
      editEntry(journalEntry.id);
    })

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete entry";
    setAttributes(deleteButton, {
      class: "delete_button"
    })
    deleteButton.addEventListener("click", () => {
      //not sure if i should remove this card from the DOM here, or make the delete entry function reset/update the DOM on push?
      API.deleteEntry(journalEntry.id)
        .then(update);
    })

    //appends buttons to button div
    cardButtonDiv.appendChild(editButton);
    cardButtonDiv.appendChild(deleteButton);

    //appends div to card
    journalCard.appendChild(cardButtonDiv);

    //return card to original ask
    return journalCard;
  }
}

//edit entry function
function editEntry(id) {

  //grab card by id/number
  let editCard = document.getElementById(`entry_${id}`);
  let editDate = document.getElementById(`cardDate_${id}`);
  let editConcept = document.getElementById(`cardConcept_${id}`);
  let editBody = document.getElementById(`cardEntry_${id}`);
  let editMood = document.getElementById(`cardMood_${id}`);

  //build form components and then replace entry components
  let formConcept = document.createElement("input");
  setAttributes(formConcept, {
    type: "text",
    id: `edit_concept_${id}`,
    class: "edit_concept",
    value: editConcept.textContent
  })
  editConcept.replaceWith(formConcept);

  let formBody = document.createElement("textarea");
  setAttributes(formBody, {
    id: `edit_body_${id}`,
    class: "edit_body"
  })
  formBody.textContent = editBody.textContent
  editBody.replaceWith(formBody);

  let formMood = document.createElement("select");
  setAttributes(formMood, {
    id: `edit_mood_${id}`,
    class: "edit_mood"
  })
  formMood.innerHTML = `
          <option>!choose from the following moods!</option>
					<option value="stoked">pretty stoked</option>
					<option value="alright">man, i'm alright</option>
					<option value="life">that's life tho, amiright?</option>
					<option value="meh">meh</option>
					<option value="bummer">friggin' bummerwave</option>
					<option value="idk">i don't know, man. like a hundred?</option>
  `
  editMood.replaceWith(formMood);


  //changes edit button to a save button with new event listener
  let editButton = document.getElementById(`edit_button_${id}`);
  let saveButton = document.createElement("button");
  setAttributes(saveButton, {
    id: `save_button_${id}`
  })
  saveButton.textContent = "save me";
  saveButton.addEventListener("click", () => {

    //grab value of all the inputs
    let newDate = editDate.textContent;
    let newConcept = document.getElementById(`edit_concept_${id}`).value;
    let newEntry = document.getElementById(`edit_body_${id}`).value;
    let newMood = document.getElementById(`edit_mood_${id}`).value;

    if (validateForm(newDate, newConcept, newEntry, newMood)) {

      //create a new object to send
      const newJournalEntry = entryFactory(newDate, newConcept, newEntry, newMood);


      //replace object to entries.json
      API.editEntry(id, newJournalEntry).then(update)
    }
  })

  //replace edit button with seperate save button
  editButton.replaceWith(saveButton)
}

//sets attributes on created elements inside of my buildEntry/editEntry component
function setAttributes(element, attributes) {
  for (var key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}