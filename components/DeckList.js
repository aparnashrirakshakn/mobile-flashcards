import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { getData } from '../utils/api'

export default class DeckList extends Component {
    render() {
        const decks = getData()

        return(
            <View style={styles.container}>
                {Object.keys(decks).map((deck) => {
                    const { title, questions } = decks[deck]
                    return(
                        <View key={deck}> 
                            <Text>{title}</Text>
                            <Text>{questions.length} Questions</Text>
                            <Button title='View Deck'
                                    onPress={() => this.props.navigation.navigate('DeckView', {entryId: deck})}></Button>
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