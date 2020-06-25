# UdaciCards: Mobile Flash Cards
A mobile application that allows users to study collections of flashcards. 
The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## To get started
1. Install all project dependencies with npm install
2. Start the development server with npm start

## How does this app function?
1. The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.
2. Pressing on a deck in the list generates an animation, and the app routes to an individual deck view.
3. The individual deck view includes: The deck title, Number of cards in the deck, Option to start a quiz for that deck, Option to add a new question to the deck
4. Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.
5. The New Question view includes a form with fields for a question and answer, and a submit button.
6. Submitting the form correctly adds the question to the deck.
7. The new deck view includes a form for creating a new deck - which is an input for the title and a 'Create Deck' button. Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
8. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.

## How does the Quiz function?
1. The Quiz view starts with a question from the selected deck.
2. The question is displayed, along with a button to show the answer.
3. Pressing the 'Show Answer' button displays the answer.
4. Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
5. The view displays the number of questions remaining.
6. When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
7. When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
8. Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
