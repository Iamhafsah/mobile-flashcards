import React from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'

const NewDeck = () => {
    return (
        <View style={styles.wrapper} >
            <Text style={styles.heading} >
                Give your new deck a title
            </Text>
            <TextInput style={styles.input} placeholder='enter deck title' />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewDeck

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading:{
        fontSize: 25,
        fontFamily: 'sans-serif',
    },
    input:{
        backgroundColor: '#CBC3E3',
        width: '70%',
        marginBottom: 15,
        marginTop: 15,
        padding: 10,
        borderRadius: 3
    },
    button:{
        padding: 12,
        backgroundColor: 'purple',
        borderRadius: 3
    },
    buttonText:{
        color: 'white',
        fontSize: 19,
    }
})
