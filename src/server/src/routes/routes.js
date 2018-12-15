import express from 'express';
import path from 'path';
import cors from 'cors';
import serverRenderer from '../middleware/serverRenderer';
import { Child, Guardian } from '../Models/Form';

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
    // Point to cliient build directory
    const build = path.join(__dirname, '..', '..', 'client', 'build');
    console.log(`BUILD DEVELOPMENT:  ${build}`);
    renderBuild(build);
}

// Serve rendered page at root (/)
router.use('^/$', serverRenderer);

// Uncomment to enable config for CORS if front-end and 
// back-end code will be on different servers

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//     method: 'POST'
// };

/* ***********************ROUTES*********************** */

// route:  POST @ /form
// descript:  process the form data, validate data and save it in db
// access:  PRIVATE
// misc:  enable cors

/* ********Uncomment code if CORS is NOT being used********/
router.post('/form', (req, res) => {

    // Store form data in variables
    const guard_name = req.body.guard_name;
    const guard_email = req.body.guard_email;
    const guard_phone = req.body.guard_phone;
    const children = [...req.body.children];
    const childDocs = [];

    // Create guardian document
    const newGuardian = new Guardian({
        guardian_name: guard_name,
        guardian_email: guard_email,
        guardian_phone: guard_phone
    });

    // Loop thru array and create a doc for each child
    // store docs into childDocs array 
    // (insert array in guardian doc)
    children.map(function (child) {
        // Create child document
        const newChild = new Child({
            child_name: child.child_name,
            child_age: child.age,
            shirt_size: child.shirt_size,
            guardian_id: newGuardian._id
        });
        childDocs.push(newChild);
    });

    // Create guardian document
    newGuardian.children = [...childDocs];
    
    // save guardian(and children) to db
    newGuardian.save(function (err) {
        if (err) {
            res.json({error: "database error"})
        } else {
            res.json({success: "Thanks, data was saved!"});
        }
    });
});
/* *******************END OF ROUTES************************/

/* **********Uncomment code if CORS is being used**********/
// router.post('/form', cors(corsOptions), (req, res) => {

//     // Store form data in variables
//     const guard_name = req.body.guard_name;
//     const guard_email = req.body.guard_email;
//     const guard_phone = req.body.guard_phone;
//     const children = [...req.body.children];
//     const childDocs = [];

//     // Create guardian document
//     const newGuardian = new Guardian({
//         guardian_name: guard_name,
//         guardian_email: guard_email,
//         guardian_phone: guard_phone
//     });

//     // Loop thru array and create a doc for each child
//     // store docs into childDocs array 
//     // (insert array in guardian doc)
//     children.map(function (child) {
//         // Create child document
//         const newChild = new Child({
//             child_name: child.child_name,
//             child_age: child.age,
//             shirt_size: child.shirt_size,
//             guardian_id: newGuardian._id
//         });
//         childDocs.push(newChild);
//     });

//     // Create guardian document
//     newGuardian.children = [...childDocs];
    
//     // save guardian(and children) to db
//     newGuardian.save(function (err) {
//         if (err) {
//             res.json({error: "database error"})
//         } else {
//             res.json({success: "Thanks, data was saved!"});
//         }
//     });
// });
/* *******************END OF ROUTES************************/

export default router;