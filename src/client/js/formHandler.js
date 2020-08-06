const updateUI = (data) => {
    document.getElementById('score').innerHTML = 'Score: ' + data.score_tag
    document.getElementById('agreement').innerHTML = 'Agreement: ' + data.agreement
    document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + data.subjectivity
    document.getElementById('confidence').innerHTML = 'Confidence: ' + data.confidence
    document.getElementById('irony').innerHTML = 'Irony: ' + data.irony
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log(formText);

    // POST request to express server.
    fetch('http://localhost:3000/analyzeTxt', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: formText}),
    })
    .then(res => res.json())
    .then((res) => {
        updateUI(res);
    })
}

export { handleSubmit }