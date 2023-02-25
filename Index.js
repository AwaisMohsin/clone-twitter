const formTweet = document.querySelector('form');
const listTweet = document.querySelector('#tweet-list');

// addEventListener is for Event
formTweet.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputTweet = document.querySelector('#tweet-text');
    const textTweet = inputTweet.value.trim();
    // If tweet box is empty then do nothing on clicking tweet button
    if (textTweet !== '') {
        const itemTweet = document.createElement('li');
        itemTweet.classList.add('tweet-item');

        const contentTweet = document.createElement('p');
        contentTweet.textContent = textTweet;

        //The toISOString() method returns a string in simplified extended ISO 
        //format(ISO 8601), which is always 24 or 27 characters
        // long(YYYY - MM - DDTHH: mm: ss.sssZ or ±YYYYYY - MM - DDTHH: mm: ss.sssZ, respectively).

        const tweetTime = document.createElement('small');
        tweetTime.textContent = new Date().toLocaleString();

        itemTweet.appendChild(contentTweet);
        itemTweet.appendChild(tweetTime);

        listTweet.appendChild(itemTweet);

        inputTweet.value = '';
        inputTweet.focus();
    }
});
