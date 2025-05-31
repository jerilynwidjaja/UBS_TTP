const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/run', async (req, res) => {
  const { source_code, language_id, stdin } = req.body;

  try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true',
      {
        source_code,
        language_id,
        stdin,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.JUDGE0_KEY,
        },
      }
    );

    const { stdout, stderr, compile_output } = response.data;

    if (stderr) return res.json({ output: `Runtime Error:\n${stderr}` });
    if (compile_output)
      return res.json({ output: `Compile Error:\n${compile_output}` });

    res.json({ output: stdout });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
