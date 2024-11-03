Card Distribution Application
Total Time Taken for this task: 3 hrs (Created react setup ,documentation and test cases)

Description:
This application randomly distributes a standard deck of playing cards among a specified number of players. It is built using PHP for the backend and JavaScript for the frontend.

Features:
- Distributes a total of 52 playing cards (A to K) across four suits: Spades (S), Hearts (H), Diamonds (D), and Clubs (C).
- Handles user input to determine the number of players.
- Validates input to ensure it falls within acceptable ranges (1-52).
- Provides clear error messages for invalid inputs.
- Displays the distributed cards in a user-friendly format.

Tech Stack:
- React
- JavaScript (ES6+)
- HTML5
- CSS (inline styles)

Requirements:
- PHP 7.x or higher
- Laravel 8.x or higher
- Laravel built-in server
- Browser (for testing)

Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/Jeena-kj/card-shuffle-webui.git
2. cd card-shuffle-webui
3. npm install
4. npm start

Usage:
1. Open your web browser and redirect to
   http://localhost:3000
2. Enter the desired number of players (between 1 and 52) and click "Distribute Cards".
3. The distributed cards will be displayed in a comma-separated format, with each player's cards on a new line.

Error Handling:
- If the input value is invalid (less than 1 or greater than 52), an error message will be displayed.
- If the card distribution fails for any reason, an appropriate error message will be returned.



Author:
Jeena K J
