import React, { Component } from 'react'
import { Text, View , TextInput, TouchableOpacity, Alert, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { connect } from 'react-redux'
import {addCard} from '../actions'
import {saveCard} from '../utils/api'

class AddCard extends Component {
    state={
        deck: {},
        question: '',
        answer: ''
    }

    onInputQuestion = (value)=> {
        this.setState({
            question: value
        })
    }
    onInputAnswer = (value)=> {
        this.setState({
            answer: value
        })
    }
    onSubmitCard = () => {
        const {question, answer} = this.state
        const {dispatch, route, navigation} = this.props
        const { title } = route.params;
        const card = {question, answer}
     

        if(question != '' && answer != ''){
            dispatch(addCard(card, title))
            saveCard(title, card)
            navigation.navigate('Deck')
            this.setState(prev=>({
                ...prev,
                question: '',
                answer: ''
            }))
        }else{
            Alert.alert(
                'Hi there,',
                'Please make sure no field is empty',
                [
                    {text: 'OK'}
                ]
            )
        }
    }

    render() {
        const {route} = this.props
        const { title } = route.params;
        const {question, answer} = this.state

        
        return (
            <View style={styles.container}>
                <Text style={styles.pageIntro}> Add a new card to your {title} deck</Text>

                <KeyboardAvoidingView style={styles.innerContainer}>
                   <Text style={styles.cardNumber}>Enter a question </Text>
                   <TextInput
                   value={question}
                   onChangeText={this.onInputQuestion}
                   style={styles.input}
                   />

                   <Text style={styles.cardNumber}>Enter correct answer</Text>
                   <TextInput
                   value={answer}
                   onChangeText={this.onInputAnswer}
                   style={styles.input}
                   />

                   <TouchableOpacity onPress={this.onSubmitCard} style={styles.button} >
                       <Text style={styles.buttonText}>Add Card</Text>
                   </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default connect()(AddCard)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    innerContainer:{
        backgroundColor: 'purple',
        marginTop: 40,
        padding: 40,
        borderRadius: 8
    },
    pageIntro:{
        fontSize: 20,
        marginTop: 15,
        textAlign: 'center',
        color: 'purple'
    },
    cardNumber:{
        textAlign: 'left',
        color: 'white',
        marginTop: 10,
        fontSize: 18
    },
    button:{
        backgroundColor: 'white',
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        alignSelf: 'center'
    },
    buttonText:{
        fontSize: 17,
        textAlign: 'center'
    },
    input:{
        backgroundColor: 'white',
        marginTop: 7,
        marginBottom: 10,
        borderRadius: 2,
        padding: 5
    }
})