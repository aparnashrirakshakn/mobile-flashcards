import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class DeckView extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Hi form DECK VIEW</Text>
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