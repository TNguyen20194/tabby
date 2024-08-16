/* eslint-disable no-unused-vars */
// Start writing JavaScript here!

const tabby = document.querySelector('.tabby');
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab-content'));
const tabsList = document.querySelector('.tabs')

// tabs.forEach(tab => {
//     tab.addEventListener('click', event => {
//         const target = tab.dataset.target;
//         const tabContent = tabby.querySelector('#' + target);

//         tabs.forEach(t => t.classList.remove('is-selected'));
//         tab.classList.add('is-selected');

//         tabContents.forEach(c => c.classList.remove('is-selected'));
//         tabContent.classList.add('is-selected');
//     })
// })


tabsList.addEventListener('click', event => {
    const tab = event.target
    const target = tab.dataset.target
    const tabContent = tabby.querySelector('#' + target)

    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')

    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
})

