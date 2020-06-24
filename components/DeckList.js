import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData, getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/index'

class DeckList extends Component {

    componentDidMount() {
        getDecks()
            .then(decks => this.props.receiveAllDecks(decks))
    }
    render() {
        const { decks } = this.props

        return(
            <View style={styles.container}>
                {Object.keys(decks).map((deck) => {
                    const { title, questions } = decks[deck]
                    return(
                        <View key={deck}> 
                            <Text>{title}</Text>
                            <Text>{questions.length} Questions</Text>
                            <Button title='View Deck'
                                    onPress={() => this.props.navigation.navigate('Deck View', {entryId: deck})}></Button>
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapDispatchToProps(dispatch) {
    return {
        receiveAllDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

function mapStateToProps( decks ) {
    decks = { decks }
    return decks
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
