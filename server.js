const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input, 'data' should be an array." });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));

    let highestLowercase = [];
    if (lowercaseAlphabets.length > 0) {
        highestLowercase = [lowercaseAlphabets.sort().reverse()[0]];
    }

    res.json({
        is_success: true,
        user_id: "sujan_doe_17091999",
        email: "sujan@vit.edu",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
