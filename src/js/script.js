"use strict";

document.addEventListener('DOMContentLoaded', () => {

/* Forms ---------------------------------------------------------------------- */

const forms = document.querySelectorAll('form');

forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        function toJSON(data) {
            return JSON.stringify(Object.fromEntries(data.entries()));
        }
        // console.log(formData.entries());
        // console.log(Object.fromEntries(formData.entries()));
        const json = toJSON(formData);
        console.log(json);

        postData('http://localhost:3000/requests', json)
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        })
        .finally(() => {
            form.reset();
        });

    });
}

/* Hide/show pass ------------------------------------------------------ */

const input = document.getElementById('password'),
      inputCheckbox = document.querySelector('.pass-checkbox');

inputCheckbox.addEventListener('click', (event) => {
    if (event.target.checked) {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
});







});