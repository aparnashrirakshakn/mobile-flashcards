import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions/index'
import { blue, white } from '../utils/colors'
import { ScrollView } from 'react-native-gesture-handler'

class DeckList extends Component {

    componentDidMount() {
        getDecks()
            .then(decks => this.props.receiveAllDecks(decks))
    }
    render() {
        const { decks } = this.props

        return(
            <ScrollView>
                {Object.keys(decks).map((deck) => {
                    const { title, questions } = decks[deck]
                    return(
                        <View key={deck} style={styles.card}> 
                            <Text style={styles.cardText}>{title}</Text>
                            <Text style={styles.cardText}>{questions.length} Questions</Text>
                            <Button style={styles.cardBtn} title='View Deck'
                                    onPress={() => this.props.navigation.navigate('Deck View', {entryId: deck})}>
                            </Button>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexGrow: 1,
        overflow: 'scroll',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: blue,
        margin: 8,
        height: 200,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 1
    },
    cardText: {
        fontSize: 30,
        color: white
    },
    cardBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
