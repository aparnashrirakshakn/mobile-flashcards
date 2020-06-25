import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function ShowAnswerButton({ onPress, style, text }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={style}>{text}</Text>
        </TouchableOpacity>
    )
}