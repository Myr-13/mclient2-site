const login = document.getElementById("login-text");
const password = document.getElementById("password-text");

function OnRegisterClick()
{
    const loginText = login.value;
    const passwordText = login.value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/my-endpoint");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = JSON.stringify({ input: inputValue });
    xhr.send(data);
}
