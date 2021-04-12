import React, {Component} from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native'
import {connect} from 'react-redux'
import {saveDeck} from '../utils/api'
import {addDeck} from '../actions'

class NewDeck extends Component{
    state= {
        deckTitle: ''
    }

    onTextChange = (value)=> {
        this.setState({
            deckTitle: value
        })
    }
    
    onSubmit = ()=> {
        const {deckTitle} = this.state
        const {dispatch, navigation, deckList} = this.props
        const alreadyExists = deckList.includes(deckTitle)

        
        if(alreadyExists){
            Alert.alert(
                'Hi there,',
                'This Title already exists',
                [
                    {text: 'OK'}
                ]
            )
        }
        else{
            dispatch(addDeck(deckTitle));
            saveDeck(deckTitle);
            navigation.navigate('Deck', { title: deckTitle })
            this.setState(prev=>({
                ...prev,
                deckTitle: ''
            }))
        }

    }

    render(){
        const {deckTitle} = this.state
    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>
                Give your new deck a title
            </Text>
            <TextInput style={deckTitle === ''? styles.empty : styles.input} placeholder='enter deck title'
            onChangeText={value => this.onTextChange(value)}
            />
            <TouchableOpacity style={styles.button} onPress={()=>this.onSubmit()} disabled={deckTitle === ''}>
                <Text style={styles.buttonText}>Add Deck</Text>
            </TouchableOpacity>
        </View>
    )
    }
}

function mapStateToProps(decks) {
    const deckList = Object.keys(decks);
    return {
      deckList
    };
  }

export default connect(mapStateToProps)(NewDeck)

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading:{
        fontSize: 25,
        fontFamily: 'sans-serif',
        color: 'purple'
    },
    input:{
        width: '70%',
        marginBottom: 15,
        marginTop: 15,
        padding: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'green'
    },
    empty:{
        width: '70%',
        marginBottom: 15,
        marginTop: 15,
        padding: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'purple'
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
