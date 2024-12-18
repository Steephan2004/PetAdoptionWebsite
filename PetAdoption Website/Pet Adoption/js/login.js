const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

registerBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

loginBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    // Collect form data
    const username = document.getElementById("username1").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    // Create data object
    const data = {
      username: username,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    // Send data to the backend
    fetch("http://192.168.1.6:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .then((data) => {
        alert("Registration successful!");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error. Please try again.");
      });
  });

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Create data object
  const data = {
    username: username,
    password: password,
  };

  // Send login request to backend
  fetch("http://192.168.1.6:8000/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        throw new Error("Invalid password.");
      } else if (response.status === 404) {
        throw new Error("User does not exist.");
      } else {
        throw new Error("An unexpected error occurred.");
      }
    })
    .then((data) => {
      alert("Login successful!");
      console.log("Success:", data);
      // Navigate to the next page
      window.location.href = "home.html"; // Replace with your actual page URL
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert(error.message);
    });
});
