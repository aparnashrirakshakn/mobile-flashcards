import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { blue, white } from '../utils/colors'
import { addCardToDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { StyleSheet, View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import SubmitButton from '../components/SubmitButton'

class AddCard extends Component {

    state= {
        question: '',
        answer: '',
        correctAnswer: ''
    }

    submitCard = (deck) => {
        const { question, answer, correctAnswer } = this.state

        this.props.dispatch(addCard({ question, answer, correctAnswer, deck }))
        addCardToDeck(deck, { question, answer, correctAnswer })
        this.setState({ question: '', answer: '', correctAnswer: '' })
        this.props.navigation.goBack()
    }

    render() {

        const deckName = this.props.route.params.entryId

        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>What is your question?</Text>
                    <TextInput style={styles.input} onChangeText={(question) => this.setState({question})} value={this.state.question}></TextInput>

                    <Text style={styles.title}>What is the answer?</Text>
                    <TextInput style={styles.input} onChangeText={(answer) => this.setState({answer})} value={this.state.answer}></TextInput>

                    <Text style={styles.title}>Is this true or false?</Text>
                    <TextInput style={styles.input} onChangeText={(correctAnswer) => this.setState({correctAnswer})} value={this.state.correctAnswer}></TextInput>

                    <SubmitButton style={styles.submitBtn} onPress={() => this.submitCard(deckName)} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        color: '#333'
    },
    submitBtn: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 10,
        backgroundColor: blue,
        borderRadius: 7,
        overflow: 'hidden',
        height: 45,
        margin: 5,
        width: 170,
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    input: {
        width: 350,
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 20,
        borderRadius: 7
    }
})

export default connect()(AddCard)