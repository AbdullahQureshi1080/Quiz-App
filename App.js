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
import { selected } from "./constants/QuestionBank";
import { LinearGradient } from "expo-linear-gradient";

class App extends Component {
  state = {
    start: false,
    questionBank: selected,
    quizScore: 0,
    index: 0,
    disable: false,
    nextQuestion:false,
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
      this.setState({ quizScore: this.state.quizScore + 1, disable: true ,nextQuestion:true});
    } else {
      console.log("Wrong");
      this.setState({ disable: true,nextQuestion:true});
    }
  };

  nextQuestion = () => {
    this.setState({ index: this.state.index + 1, disable: false,nextQuestion:false});
    console.log(this.state.index);
  };

  render() {
    const startView = (
      <View style={styles.startButtonContainer}>
        <Text style={styles.startContainerText}>
          Hi, Welcome to my Quiz App
        </Text>
        <StartEndButton text="Start" onPress={this.componentChange} />
      </View>
    );

    const questionsView =
      ((indexView = this.state.index + 1),
      (currentQuestion = this.state.questionBank[this.state.index]),
      (score = this.state.quizScore),
      (
        <View style={styles.questionViewContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreTextContainer}>Score : {score}</Text>
            <Text style={styles.scoreTextContainer}>
              Question : {indexView} / 5
            </Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionContainerText}>
              {currentQuestion.question}
            </Text>
            {currentQuestion.options.map((options, index) => (
              <TouchableOpacity
                disabled={this.state.disable}
                // key={currentQuestion.id}
                onPress={() => this.checkAnswer(options, currentQuestion)}
              >
                <View
                  style={{
                    ...styles.optionContainer /*,backgroundColor:cover*/,
                  }}
                >
                  <Text style={styles.questionContainerText}>{options}</Text>
                  {console.log(options)}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.nextButtonContainer}>
            <StartEndButton  disabled = {this.state.nextQuestion==0}text="Next" onPress={this.nextQuestion} />
          </View>
        </View>
      ));

    return (
      <View style={styles.mainContainer}>
        {this.state.start === false ? startView : questionsView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#446d8b",
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: "90%",
    borderRadius: 10,
    // paddingBottom:30,
  },
  optionContainerText: {
    fontSize: 18,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  questionContainer: {
    paddingTop: 20,
    alignItems: "center",
    paddingBottom: 30,
  },
  questionContainerText: {
    color: "white",
    fontSize: 22,
  },
  nextButtonContainer: {
    alignItems: "flex-end",
  },
  questionViewContainer: {
    // Kerna hai kuch tou
    paddingTop: 50,
    justifyContent: "center",
    backgroundColor: "black",
    width: "90%",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
  },
  scoreTextContainer: {
    fontSize: 20,
    paddingBottom: 20,
    color: "white",
  },
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
});

export default App;
