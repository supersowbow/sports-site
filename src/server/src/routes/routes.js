import express from 'express';
import path from 'path';
// import cors from 'cors'; // Uncomment code if CORS is being used
import serverRenderer from '../middleware/serverRenderer';
import addToDB from '../middleware/addToDB';

const router = express.Router();

const renderBuild = (buildFile) => {
    return router.use(express.static(buildFile));
}

// Render static assets for PRODUCTION
if (process.env.NODE_ENV === 'production') {
    // Point to production build directory
    const build = path.join(__dirname, 'build');
    renderBuild(build);

} else { 
// Render static assets for DEVELOPMENT
    // Point to client build directory
    const build = path.join(__dirname, '..', '..', 'client', 'build');
    console.log(`BUILD DEVELOPMENT:  ${build}`);
    renderBuild(build);
}

// Serve rendered page at root (/)
router.use('^/$', serverRenderer);

// Uncomment code if CORS is being used

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//     method: 'POST'
// };

/* ***********************ROUTES*********************** */

// route:  POST @ /api
// descript:  process the form data, validate data and save it in db
// access:  PRIVATE
// misc:  enable cors

/* ********Uncomment code if CORS is NOT being used********/
router.post('/api', (req, res) => {
    addToDB(req, res);
});
/* *************END OF ROUTES WITHOUT CORS*****************/

/* **********Uncomment code if CORS is being used**********/
// router.post('/form', cors(corsOptions), (req, res) => {
//     addToDB(req, res);
// });
/* *************END OF ROUTES WITH CORS*****************/

export default router;