const validate = (user, pass) => new Promise((resolve, reject) => {
    setTimeout(() => {
        let err
        if (user == 'enigma1' && pass == '12345') {
            result = 'Welcome enigma1'
            resolve(result)
        } else {
            err = 'user salah'
            reject(err)
        }
    }, 1000);
})

const login = async function (username, pass) {
    const getLogin = await validate(username, pass)
    return getLogin
}

function testLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    login(username, password)
        .then(() => window.location = "biodata.html")
        .catch(() => alert("Login Failed! Check username and password"))
}

function forgotPassword() {
    alert("Sorry, menu under maintenance");
}

// masih error tidak mau kepanggil
function logout() {
    window.location = "login.html"
}