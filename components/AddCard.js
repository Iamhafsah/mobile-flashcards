import React, { Component } from 'react'
import { Text, View , TextInput, TouchableOpacity, Alert} from 'react-native'
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
        const {dispatch, route} = this.props
        const { title } = route.params;
        const card = {question, answer}
     

        if(question != '' && answer != ''){
            dispatch(addCard(card, title))
            saveCard(title, card)
            //    console.log(title, card);
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
        const {navigation, route} = this.props
        const { title } = route.params;
        const {question, answer} = this.state

        
        return (
            <View>
                <Text> Add a new card to your {title} deck</Text>

                <View>
                   <Text>Enter a question {question}{answer} </Text>
                   <TextInput
                   value={question}
                   onChangeText={this.onInputQuestion}
                   />

                   <Text>Enter correct answer</Text>
                   <TextInput
                   value={answer}
                   onChangeText={this.onInputAnswer}
                   />

                   <TouchableOpacity onPress={this.onSubmitCard} >
                       <Text>Add Card</Text>
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(AddCard)
