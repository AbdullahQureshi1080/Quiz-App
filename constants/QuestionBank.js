 const QuestionBank = [
    {
      id: 1,
      question: " What is the Capital Of India ?",
      options: ["Mumbai", "New Delhi", "Kolkatta","UP"],
      answer: "New Delhi"
    },
    {
      id: 2,
      question: "Who is the CEO of Tesla Motors?",
      options: ["Bill Gates", "Steve Jobs", "Elon Musk","Warren Buffet"],
      answer: "Elon Musk"
    },
    {
      id: 3,
      question: "Name World's Richest Man?",
      options: ["Jeff Bezo", "Bill Gates", "Mark Zuckerberg","Warren Buffet"],
      answer: "Jeff Bezo"
    },
    {
      id: 4,
      question: "World's Longest River?",
      options: ["River Nile", "River Amazon", "River Godavari","River Congo"],
      answer: "River Nile"
    },
    {
      id: 5,
      question: "Who plays IronMan in Avengers?",
      options: ["Robert Downey Jr", "Chris Evans", "Mark Rufallo","Chris Hemsworth"],
      answer: "Robert Downey Jr"
    },
    {
      question: "What do the letters of the fast food chain KFC stand for?",
      options: [
        "Kentucky Fried Chicken",
        "Kentucky Fresh Cheese",
        "Kibbled Freaky Cow",
        "Kiwi Food Cut"
      ],
      answer: "Kentucky Fried Chicken",
      id: 6,
    },
    {
      question: "Which restaurant's mascot is a clown?",
      options: ["McDonald's", "Whataburger", "Burger King", "Sonic"],
      answer: "McDonald's",
      id: 7,
    },
    {
      question: 'What color is the "Ex" in FedEx Ground?',
      options: ["Green", "Red", "Light Blue", "Orange"],
      answer: "Green",
      id: 8,
    },
    {
      question: "How tall is the Burj Khalifa?",
      options: ["2,722 ft", "2,717 ft", "2,546 ft", "3,024 ft"],
      answer: "2,722 ft",
      id: 9,
    },
    {
      question:
        "Which of the following card games revolves around numbers and basic math?",
      options: ["Uno", "Go Fish", "Twister", "Munchkin"],
      answer: "Uno",
      id:10,
    },
    {
      question: "Area 51 is located in which US state?",
      options: ["Nevada", "Arizona", "New Mexico", "Utah"],
      answer: "Nevada",
      id: 11,
    },
    {
      question: "How would one say goodbye in Spanish?",
      options: ["Adiós", " Hola", "Au Revoir", "Salir"],
      answer: "Adiós",
      id: 12,
    },
    {
      question: "What is the largest organ of the human body?",
      options: ["Skin", "Heart", "large Intestine", "Liver"],
      answer: "Skin",
      id: 13,
    },
    {
      question: "Which sign of the zodiac is represented by the Crab?",
      options: ["Cancer", "Libra", "Virgo", "Sagittarius"],
      answer: "Cancer",
      id: 14,
    },
    {
      question: "On a dartboard, what number is directly opposite No. 1?",
      options: ["19", "20", "12", "15"],
      answer: "19",
      id: 15,
    },
];
n=5
var shuffled = QuestionBank.sort(function(){return .5 - Math.random()});
export var selected=shuffled.slice(0,n);