import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, Easing } from 'react-native'
import { connect } from 'react-redux'
import ActionButton from './ActionButton'
import { purple, white, red, blue } from '../utils/colors'

class DeckView extends Component {

    componentWillMount() {
        this.animatedValue = new Animated.Value(0.3)
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 3000
        }).start()     
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        const deck = this.props.route.params.entryId
        const { decks } = this.props

        return(
            <View style={styles.container}>
                <Animated.View style={[styles.card, animatedStyle]}>
                    <Text style={styles.mainText}>{decks[deck].title}</Text>
                    <Text style={styles.subText}>{decks[deck].questions.length}</Text>

                    <ActionButton style={styles} text={'Add Card'} 
                                color={purple} 
                                onPress={() => this.props.navigation.navigate('Add Card', {entryId: deck})}/>
                    
                    {decks[deck].questions.length > 0 && <ActionButton style={styles} text={'Start Quiz'} 
                                color={red} 
                                onPress={() => this.props.navigation.navigate('Quiz', {entryId: deck})}/>}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        padding: 10
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
        fontSize: 22,
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
    mainText: {
        fontSize: 40,
        color: white
    },
    subText: {
        fontSize: 30,
        color: white,
        marginBottom: 160
    }
})

function mapStateToProps( decks ) {
    decks = { decks }
    return decks
}

export default connect(mapStateToProps)(DeckView)