// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`).then(data => {
    const tabs = data.data.topics;
    tabs.forEach(tabItem => {
    const el = createTab(tabItem)
    topics.appendChild(el);
    })
})
.catch(error => {
    console.log('The Lambda API is currently unavailable', error)
  })
    function createTab(tabName){
      const tab = document.createElement('div');
      tab.classList.add('tab')
      tab.textContent = tabName;
      return tab;
  }