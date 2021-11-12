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

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * jokes.length);
  let randomJoke = jokes[randomIndex];

  res.status(200).send(randomJoke);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
