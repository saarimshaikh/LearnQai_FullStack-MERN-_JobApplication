const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to send JSON payload
app.get('/send-payload', (req, res) => {
  // Example JSON payload
  const payload = {
    first_name: 'Saarim',
    last_name: 'Shaikh',
    email: 'saarimshaikh1234@gmail.com',
    phone_number: '+918689899725',
    platform_name: 'LinkedIn',
    cover_letter: "I am writing to express my interest in the FullStack MERN role at LearnQai, as advertised on your website. With a degree in Computer Science and Engineering from Lovely Professional University, I am eager to apply my skills and contribute to your innovative projects. My coursework and projects have equipped me with a strong foundation in MERN stack development. I am proficient in MongoDB, Express.js, React.js, and Node.js, and I am excited about the opportunity to leverage these skills to build dynamic web applications at LearnQai. I am particularly drawn to LearnQai's mission of revolutionizing online learning through cutting-edge technology. I am confident that my passion for coding and problem-solving, combined with my eagerness to learn and grow, make me a valuable addition to your team. Thank you for considering my application. I am looking forward to the possibility of discussing how I can contribute to LearnQai's success.",
    urls: [
      'https://drive.google.com/file/d/1cAT0Em_WQNzFvIeZerLf79bYk-DV3xvS/view?usp=sharing',
      'https://www.linkedin.com/in/saarim-shaikh/',
      'https://github.com/saarimshaikh',
      'https://saarimportfolio.netlify.app/',
    ]
  };

  // Send a POST request to the '/recruitment' endpoint with the payload
  fetch('http://localhost:3000/recruitment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(error => {
    console.error('Error:', error);
    res.status(500).send('Error sending payload');
  });
});

// Route to handle the recruitment endpoint
app.post('/recruitment', (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone_number,
    platform_name,
    cover_letter,
    urls
  } = req.body;

  console.log('Received data:');
  console.log('First Name:', first_name);
  console.log('Last Name:', last_name);
  console.log('Email:', email);
  console.log('Phone Number:', phone_number);
  console.log('Platform Name:', platform_name);
  console.log('Cover Letter:', cover_letter);
  console.log('URLs:', urls);

  res.status(200).json({
    message: 'Data received successfully!',
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
