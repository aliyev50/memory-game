# Higher Memory Game 

Higher Memory is a simple and engaging memory card game where the objective is to match pairs of cards within a limited number of wrong guesses and a time limit. The game features various travel-related symbols and provides a fun challenge for players of all ages. [Here](https://aliyev50.github.io/memory-game/)

# 1. Technologies used:

**HTML Structure**
The game is structured with the following key HTML elements:
 
 * gameBoard
 * message
 * timer
 * wrongGuesses

 **JavaScript Logic**

 The JavaScript code handles the game logic, including shuffling cards, managing game states and handling user interactions

 **1. Initialization:** The game is initialized by calling the _`startingTheGame`_ function when the window loads. This function shuffles the cards, creates the game board, and starts the timer.

 **2. Card Shuffling:** The _`mixCards`_ function shuffles the array of card symbols to ensure a random distribution of cards.

**3. Creating Cards:** The _`makeCards`_ function creates the card elements dynamically and adds them to the game board.

**4. Flipping Cards:** The _`flipCard`_ function handles the flipping of cards and checks for matches.

**5. Checking Matches:** The _`checkMatch`_ function compares the symbols of the flipped cards and handles matched and unmatched cases accordingly.

**6. Timer Management:** The _`startTimer`_ function starts the countdown timer, and the _`endGame`_ function clears the timer when the game ends.

**7. Updating Wrong Guesses:** The _`updateWrongGuesses`_ function updates the UI to reflect the number of wrong guesses.

**8. Ending the Game:** The _`endGame`_ function displays the game result message and prevents further interactions with the cards.

# Screenshot of the Game _[Here](https://github.com/aliyev50/memory-game/issues/1#issue-2351729976)_

# 2. Next Steps:

* Add difficulty levels with different time limits and maximum wrong guesses.
* Implement different themes for the card symbols.
* Add sound effects for card flips and matches.
* Track and display high scores or best times.


# Conclusion
Higher Memory is a fun and challenging game that tests your memory and concentration skills. Enjoy matching the cards and try to beat the clock!
Feel free to reach out if you have any questions or need further assistance with the game. Happy gaming!