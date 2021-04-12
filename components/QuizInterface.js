import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'


class QuizInterface extends Component {
    state={
        startNum: 0,
        showQuestion: true,
        correct: 0
    }


    toggleAnswer=()=> {
        this.setState(prev=> ({
            showQuestion: !prev.showQuestion
        }))
    }
    ifCorrect = ()=> {
        this.setState(prev=> ({
            startNum: prev.startNum + 1,
            correct: prev.correct + 1
        }))

    }
    ifWrong = ()=> {
        this.setState(prev=> ({
            startNum: prev.startNum + 1
        }))
    }
    restart = ()=> {
        this.setState({
            startNum: 0,
            showQuestion: true,
            correct: 0
        })
    }

    render() {
        const {cardNumber, deckName, deck, navigation} = this.props
        const {startNum, showQuestion, correct} = this.state
        const quizOver = startNum === cardNumber
        
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                {quizOver ? (
                    <View >                     
                        <Text style={styles.deckTitle}>You got {correct} out of {cardNumber} </Text>

                        <View style={styles.cardOptions}>
                            <TouchableOpacity onPress={this.restart}
                            style={[styles.button, styles.restart]}
                            ><Text style={styles.buttonText}>Restart</Text></TouchableOpacity>

                            <TouchableOpacity  
                            onPress={()=> navigation.goBack()}
                            style={[styles.button, styles.back]}
                            ><Text style={styles.buttonText}>Back to Deck</Text></TouchableOpacity>
                        </View>
                    </View>
                ):(
                    <View>
                        <View>
                            <Text style={styles.deckTitle}>The {deckName} deck</Text>
                            <Text style={styles.questionNumber}>Question {startNum + 1} of {cardNumber}</Text>
                        </View>

                        <View style={styles.questionBox}>
                            {showQuestion  ? (
                            <View>
                                <Text style={styles.questionBoxText}>{deck.questions[startNum].question}</Text>
                                <TouchableOpacity onPress={()=>this.toggleAnswer()} style={styles.toggle}>
                                    <Text style={styles.toggleText}>Show Answer</Text>
                                </TouchableOpacity>
                            </View>
                            ): (   
                            <View>
                                <Text style={styles.questionBoxText}>{deck.questions[startNum].answer}</Text>
                                <TouchableOpacity onPress={()=>this.toggleAnswer()} style={styles.toggle}>
                                    <Text style={styles.toggleText}>Show Question</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                        </View>
                
                        <View style={styles.cardOptions}>
                            <TouchableOpacity onPress={this.ifWrong} style={[styles.button, styles.buttonLeft]}>
                                <Text style={styles.buttonText}>Wrong</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.ifCorrect} style={[styles.button, styles.buttonRight]}>
                                <Text style={styles.buttonText}>Correct</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                )}
                </View>
            </View>
        )
    }
}

function mapStateToProps(decks, props) {
    const deckName = props.route.params.title
    const cardNumber = decks[deckName] ? decks[deckName].questions.length : 0;
  
    return {
      cardNumber,
      deck: decks ? decks[deckName] : null,
      deckName
    }
  }
  
  export default connect(mapStateToProps)(QuizInterface)
  
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
    cardOptions:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    deckTitle:{
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    questionNumber:{
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        fontSize: 18
    },
    questionBox:{
        backgroundColor: 'white',
        padding: 5,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 8
        
    },
    questionBoxText:{
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 15
    },
    button:{
        backgroundColor: 'white',
        padding: 17,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 8
    },
    buttonLeft:{
        marginRight: 15,
        marginLeft: 15,
        borderWidth: 2,
        borderColor: 'red',
    },
    buttonRight:{
        marginRight: 15,
        borderWidth: 2,
        borderColor: 'green',
    },
    buttonText:{
        fontSize: 17
    },
    toggle:{
        backgroundColor: 'white',
        padding: 5,
        marginTop: 30,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 8,
        alignSelf: 'center'
    },
    toggleText:{
        fontSize: 17
    },
    restart:{
        marginRight: 15,
    }
})