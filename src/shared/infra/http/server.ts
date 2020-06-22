import express from 'express';

import cors from 'cors'


const app = express();

app.use(cors())

app.use(express.json)

app.get('/',(request,response)=> response.json({msg:'ok'}))

export default app;
