
// Fetch user data from the server
fetch('/users')
  .then(response => response.json())
  .then(users => {
    // Handle user data
    console.log(users);
  })
  .catch(error => console.error('Error fetching data:', error));

