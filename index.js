const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const path = require('path');



app.use(cors({
  origin: 'https://portfolio-phi-three-x0kf900wyo.vercel.app', 
}));

app.use('/images', express.static(path.join(__dirname, 'public/images')));


const projectRoutes = require('./routes/projects');
const skillsRoutes = require('./routes/skills')

app.use('/projects', projectRoutes);
app.use('/skills', skillsRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
