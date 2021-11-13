const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Something good is headed your way",
					 "Fortune favors the brave",
					 "Plan for many pleasures ahead",
           "Your persistence will pay off",
           "One ending is another beginning",
           "Exploration will nourish your soul",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/joke", (req, res) => {
  const jokes = ["What do you call a fish wearing a bowtie? Sofishticated.",
					 "If April showers bring May flowers, what do May flowers bring? Colonizers",
					 "What did the ocean say to the beach? Nothing it just waved.",
           "What has more letters than the alphabet? The post office",
  ];

  // choose random joke
  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomIndex];

  res.status(200).send(randomJoke);
  
});

app.get("/api/quote", (req, res) => {
  const quotes = ["It is our choices that show who we truly are, far more than our abilities.",
					 "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
					 "Someday this pain will be useful to you.",
           "The press of my foot to the earth springs a hundred affections",
  ];

  // choose random quote
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  res.status(200).send(randomQuote);
  
});

app.get("/api/valid", (req, res) => {
  const validations = ["You are not too much",
					 "You are enough",
					 "You contain multitudes",
           "You are loved",
           "Your feelings are valid"
  ];

  // choose random quote
  let randomIndex = Math.floor(Math.random() * validations.length);
  let randomValid = validations[randomIndex];

  res.status(200).send(randomValid);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
