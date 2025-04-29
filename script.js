body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
  transition: background-color 0.5s, color 0.5s;
}

header {
  text-align: center;
  padding: 2rem;
  background-color: #f8bbd0;
  color: #e91e63;
  transition: background-color 0.5s, color 0.5s;
}

section {
  margin: 2rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: background-color 0.5s, color 0.5s;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

button {
  margin: 1rem;
  padding: 10px 20px;
  cursor: pointer;
}

/* Dark Mode Styles */
body.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark-mode header {
  background-color: #1e1e1e;
  color: #90caf9;
}

body.dark-mode section {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

body.dark-mode a {
  color: #64b5f6;
}
