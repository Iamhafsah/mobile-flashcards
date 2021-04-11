import React, { Component } from 'react'
import { Text, View , TextInput, TouchableOpacity} from 'react-native'
import {addCard} from '../actions'
import {addCard as addNewCard} from '../utils/api'

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
        console.log(card);

        // dispatch(addCard(title, card))
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

export default AddCard
