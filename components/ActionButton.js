import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function ActionButton({ onPress, style, text, color }) {
    return (
        <TouchableOpacity onPress={onPress} style={[style.iosBtn, {backgroundColor: color}]}>
            <Text style={style.submitBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}