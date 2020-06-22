import { AsyncStorage } from "react-native"

const initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question:'How is the flow of data in React?',
                answer:'In React, data flows in only one direction, from parent to child.',
                correctAnswer:'true'
            },
            {
                question:'What is a React Router?',
                answer:'React Router is a collection of navigational components that compose declaratively with your application.',
                correctAnswer:'true'
            }
        ]
    },
    Redux: {
        title: 'Redux',
        questions: [
            {
                question:'How can you extend Redux with custom functionality?',
                answer:'Middleware is the suggested way to extend Redux with custom functionality.',
                correctAnswer:'true'
            },
            {
                question:'What are the 3 ways of interacting with the state?',
                answer:'The three ways are: 1. getting the state 2. listening for changes to the state and 3. updating the state.',
                correctAnswer:'true'
            }
        ]
    },
    ReactNative: {
        title: 'ReactNative',
        questions: [
            {
                question:'What is the Tab Navigator in React Native?',
                answer:'Tab Navigator is an API that allows for navigation between different screens via individual tabs.',
                correctAnswer:'true'
            },
            {
                question:'Name the library in React Native that is used to add thoughtful animations.',
                answer:'Animated',
                correctAnswer:'true'
            }
        ]
    }
}

export const getData = () => {
    return initialData
}

export function getDecks(deck) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
            .then(results => {
                if (results === null) {
                    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
                    return initialData
                }
                else {
                    return JSON.parse(results)
                }
            })
}

export function saveDeckTitle() {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title] : {
            title: title,
            questions: []
        }
    }))
}