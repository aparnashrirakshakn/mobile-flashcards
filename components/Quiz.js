import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { blue, white, purple, red, green } from '../utils/colors'
import { SubmitButton } from './SubmitButton'
import { connect } from 'react-redux'
import ActionButton from './ActionButton'
import ShowAnswerButton from './ShowAnswerButton'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'

class Quiz extends Component {

    state= {
        questionNumber: 0,
        showAnswer: false,
        correct: 0,
        incorrect: 0
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification);
    }

    resetQuiz = () => (
        this.setState({
            questionNumber: 0,
            showAnswer: false,
            correct: 0,
            incorrect: 0
        })
    )

    showAnswer = () => (
        !this.state.showAnswer ? this.setState({showAnswer: true}) : this.setState({showAnswer: false})
    )

    submitAnswer = (answer) => {
        // check for right answer
        const { questionNumber } = this.state
        const deck = this.props.route.params.entryId
        const decks = this.props.decks
        const correct = decks[deck].questions[questionNumber].correctAnswer.toLowerCase()

        if(answer === correct) {
            this.setState({ correct: this.state.correct + 1})
        }
        else {
            this.setState({ incorrect: this.state.incorrect + 1})
        }

        // go to next question
        this.setState({questionNumber: this.state.questionNumber + 1, showAnswer: false})
    }

    render() {
        const questionNumber = this.state.questionNumber
        const decks = this.props.decks
        const deck = this.props.route.params.entryId
        const number = this.state.questionNumber + 1

        if(questionNumber === decks[deck].questions.length) {
            return(
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.mainText}>You got {this.state.correct} out of {decks[deck].questions.length} !</Text>
                        <ActionButton style={styles} text={'Restart'} color={red} onPress={this.resetQuiz}/>
                        <ActionButton style={styles} text={'Back'} color={green} onPress={() => this.props.navigation.navigate('Deck View', {entryId: deck})}/>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.questionNumberIndicator}>{number} / {decks[deck].questions.length}</Text>

                    {!this.state.showAnswer ? <Text style={styles.mainText}>{decks[deck].questions[questionNumber].question}</Text> :
                    <Text style={styles.mainText}>{decks[deck].questions[questionNumber].answer}</Text>}

                    {!this.state.showAnswer? <ShowAnswerButton text={'Show Answer'} style={styles.ShowAnswerBtn} onPress={this.showAnswer}/> :
                    <ShowAnswerButton text={'Show Question'} style={styles.ShowAnswerBtn} onPress={this.showAnswer}/>}

                    <ActionButton color={green} style={styles} text={'Correct'} onPress={() => {this.submitAnswer('true')}}/>
                    <ActionButton color={red} style={styles} text={'Incorrect'} onPress={() => {this.submitAnswer('false')}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
    ShowAnswerBtn: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    },
    iosBtn: {
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 5,
        width: 170
    },
    submitBtnText: {
        color: white,
        fontSize: 26,
        textAlign: 'center'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: blue,
        alignSelf: 'stretch',
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1
    },
    questionNumberIndicator: {
        top: 0,
        alignSelf: 'flex-start',
        left: 0,
        color: white,
        fontSize: 20,
        margin: 5,
        position: 'absolute'
    },
    mainText: {
        fontSize: 40,
        color: white,
        marginTop: 40,
        textAlign: 'center'
    }
  });

function mapStateToProps(decks) {
    decks = { decks }
    return decks 
}
export default connect(mapStateToProps)(Quiz)