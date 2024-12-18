const listItems = document.querySelectorAll('#nav_head li');
listItems.forEach((item) => {
    item.addEventListener('click', function () {
        listItems.forEach((li) => li.classList.remove('active'));
        this.classList.add('active');
    });
});


const menuToggle = document.getElementById('menu-toggle');
const navHead = document.getElementById('nav_head');


menuToggle.addEventListener('click', () => {
    navHead.classList.toggle('open'); // Add or remove the "open" class
});

// Get elements
const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

// Show the modal when the button is clicked
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close the modal when the close button is clicked
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
function CloseModal(){
    modal.style.display = 'none';
}

function applyFilters() {
    // Get selected filter values
    const petType = document.getElementById('pet-type').value;
    const breed = document.getElementById('breed').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;

    // Get all pet images
    const pets = document.querySelectorAll('.pets img');

    // Loop through all images and apply filters
    pets.forEach((pet) => {
        const matchesType = petType === 'all' || pet.dataset.type === petType;
        const matchesBreed = breed === 'all' || pet.dataset.breed === breed;
        const matchesGender = gender === 'all' || pet.dataset.gender === gender;
        const matchesAge = age === 'all' || pet.dataset.age === age;

        if (matchesType && matchesBreed && matchesGender && matchesAge) {
            pet.style.display = 'block';
        } else {
            pet.style.display = 'none';
        }
    });
}

function clearFilters() {
    // Reset all filter dropdowns
    document.getElementById('pet-type').value = 'all';
    document.getElementById('breed').value = 'all';
    document.getElementById('gender').value = 'all';
    document.getElementById('age').value = 'all';

    // Show all pets
    const pets = document.querySelectorAll('.pets img');
    pets.forEach((pet) => {
        pet.style.display = 'block';
    });
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission

    const formData = new FormData(this);

    // Create an object to hold form data
    const data = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
    };

    // Send the form data to your backend API using fetch
    fetch('http://192.168.1.6:8000/email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Send as JSON
        },
        body: JSON.stringify(data), // Convert object to JSON
    })
        .then(response => {
            if (!response.ok) {
                // Check if the response is not OK
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response body as JSON
        })
        .then(data => {
            console.log('Success:', data);
            alert('Your request has been sent successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error. Please try again later.');
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const petsContainer = document.querySelector(".pets");
  
    fetch("http://192.168.1.6:8000/pets/") // Replace with your API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch pet data");
        }
        return response.json();
      })
      .then((pets) => {
        pets.forEach((pet) => {
          const petImg = document.createElement("img");
          petImg.src = `http://192.168.1.6:8000${pet.image}`;
          petImg.alt = pet.type;
          petImg.setAttribute("data-type", pet.type);
          petImg.setAttribute("data-breed", pet.breed);
          petImg.setAttribute("data-gender", pet.gender);
          petImg.setAttribute("data-age", pet.age);
  
          petsContainer.appendChild(petImg);
        });
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  });

  async function fetchFilterOptions() {
    try {
        const response = await fetch('http://192.168.1.6:8000/filter-options/');
        const data = await response.json();

        // Populate the Pet Type dropdown
        const petTypeDropdown = document.getElementById('pet-type');
        data.pet_types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            petTypeDropdown.appendChild(option);
        });

        // Populate the Breed dropdown
        const breedDropdown = document.getElementById('breed');
        data.breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
            breedDropdown.appendChild(option);
        });

        // Populate the Gender dropdown
        const genderDropdown = document.getElementById('gender');
        data.genders.forEach(gender => {
            const option = document.createElement('option');
            option.value = gender;
            option.textContent = gender.charAt(0).toUpperCase() + gender.slice(1);
            genderDropdown.appendChild(option);
        });

        // Populate the Age dropdown
        const ageDropdown = document.getElementById('age');
        data.ages.forEach(age => {
            const option = document.createElement('option');
            option.value = age;
            option.textContent = age.charAt(0).toUpperCase() + age.slice(1);
            ageDropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching filter options:', error);
    }
}

// Call the function to fetch options when the page loads
window.onload = fetchFilterOptions;
