const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post("/webhook", async (req, res) => {
  try {
    const response = await axios.post(
      'https://bots.dialogflow.com/line/8a0ac95f-d7fa-4001-a511-58b860d75008/webhook',
      req.body
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
