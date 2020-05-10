import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import StartEndButton from "./components/ButtonComponent";
import { QuestionBank } from "./constants/QuestionBank";
import { LinearGradient } from "expo-linear-gradient";

class App extends Component {
  state = {
    start: false,
    questionBank: QuestionBank,
    // colorChange : {
    //     color: "#446d8b",
    //     stateColor:undefined,
    // }
  };

  componentChange = () => {
    if (this.state.start === false) {
      this.setState({ start: true });
    } else {
      this.setState({ start: false });
    }
  };

  checkAnswer = (option, question) => {
    console.log(question.answer);
    console.log(option);
    if (question.answer == option) {
      console.log("yes");
      this.setState({colorChange:true})
      return true;
    } else {
      console.log("Wrong");
      this.setState({colorChange: false})
      console.log(this.state.colorChange)
      return false;
    }
  };

  render() {
  //  var cover = this.state.colorChange.stateColor === false ? "red":"green";
    const startView = (
      <View style={styles.startButtonContainer}>
        <Text style={styles.startContainerText}>
          Hi, Welcome to my Quiz App
        </Text>
        <StartEndButton text="Start" onPress={this.componentChange} />
      </View>
    );

    const questionsView = (
       cover = this.state.colorChange == false ? "red":"green",
      <View style={styles.questionsViewContainer}>
        {/* <Text style={styles.questionsViewContainerText}>
        </Text> */}
        <View style={scoreView}></View>
        <ScrollView style={styles.scrollViewContainer}>
          {this.state.questionBank.map((question, indexQ) => (
            <View>
              <Text style={styles.scrollviewText}>{question.question}</Text>
              {this.state.questionBank[indexQ].options.map(
                (options, indexO) => (
                  <TouchableOpacity
                    onPress={() => this.checkAnswer(options, question)} 
                    >
                      <View style={{...styles.scrollViewItem,backgroundColor:cover}}> 
                        <Text style={styles.scrollviewItemText}>{options}</Text>

                      </View>
                  </TouchableOpacity>
                )
              )}
            </View>
          ))}
        </ScrollView>
        <StartEndButton text="End" onPress={this.componentChange} />
      </View>
    );

    return (
      <View style={styles.mainContainer}>
        {this.state.start === false ? startView : questionsView}
        {/* <ScrollView style={styles.scrollViewContainer}>
             {this.state.questionBank.map((question,index)=>(
               <View>
                  <Text style = {styles.scrollviewText}>{question.question}</Text>
                  {this.state.questionBank[index].options.map((options,index)=>(
                    <TouchableOpacity>
                    <View style={styles.scrollViewItem}>
                       <Text>{options}</Text>
                   </View>
                 </TouchableOpacity>
                  ))}
               </View>
             ))}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  startButtonContainer: {
    alignItems: "center",
    paddingTop: 50,
  },
  startContainerText: {
    fontSize: 20,
    paddingBottom: 20,
    color: "white",
  },
  questionsViewContainer: {
    // Kerna hai kuch tou
    paddingTop: 50,
    alignItems: "center",
  },
  questionsViewContainerText: {
    fontSize: 20,
    paddingBottom: 20,
    color: "white",
  },
  scrollViewContainer: {
    // backgroundColor:"grey",
    width: "90%",
    // height:"50%",
    paddingTop: 40,
    // justifyContent:"center",
    // alignItems:"center",
  },
  scrollViewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#446d8b",
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: "90%",
    borderRadius: 10,
    paddingBottom:50,
  },
  scrollViewQuestion: {
    // flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "darkgrey",
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: "90%",
    borderRadius: 10,
  },
  scrollviewQuestionText: {
    fontSize: 15,
    color: "white",
    paddingLeft: 15,
  },
  scrollviewText: {
    fontSize: 22,
    color: "#dbe1e7",
    paddingLeft: 15,
  },
  scrollviewItemText: {
    fontSize: 18,
    color: "black",
    // paddingLeft: 15,
  },
  redStyle:{
    backgroundColor:"red"
  },
  greenStyle:{
    backgroundColor:"green"
  },
});

export default App;
