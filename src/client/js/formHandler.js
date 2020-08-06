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
            body: JSON.stringify({name: formText}), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then((res) => {
        document.getElementById('results').innerHTML = res.subjectivity
    })
}
    /*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */

export { handleSubmit }
