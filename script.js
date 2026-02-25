// AUTO LOGIN
window.onload = function() {
    let role = getCookie("active_role");
    if(role && window.location.pathname.includes("index.html")){
        window.location.replace("dashboard.html");
    }
}

// PASSWORD CHECKER
let passwordInput = document.getElementById("password");
let strengthMessage = document.getElementById("strengthMessage");

if(passwordInput){
    passwordInput.addEventListener("input", function(){
        let value = passwordInput.value;
        let rules = 0;

        if(value.length >= 8) rules++;
        if(/[0-9]/.test(value)) rules++;
        if(/[!@#$%^&*]/.test(value)) rules++;

        if(rules <= 1){
            strengthMessage.innerText = "Weak";
            strengthMessage.style.color = "red";
        }
        else if(rules == 2){
            strengthMessage.innerText = "Medium";
            strengthMessage.style.color = "orange";
        }
        else{
            strengthMessage.innerText = "Strong";
            strengthMessage.style.color = "green";
        }
    });
}

// LOGIN
let form = document.getElementById("loginForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        let role = document.getElementById("role").value;
        document.cookie = "active_role=" + role + "; path=/";
        window.location.href = "dashboard.html";
    });
}

// TOGGLE PASSWORD
function togglePassword(){
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// GET COOKIE
function getCookie(name){
    let cookies = document.cookie.split("; ");
    for(let c of cookies){
        let parts = c.split("=");
        if(parts[0] === name) return parts[1];
    }
    return null;
}

// LOGOUT
function logout(){
    document.cookie = "active_role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "index.html";
}