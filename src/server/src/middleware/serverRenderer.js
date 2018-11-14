// import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import path from "path";
// import fs from "fs";

// import App from '../../client/src/App'; // Import main App component

// export default (req, res, next) => {

//     // Point to the html file created by CRA's build tool
//     const filePath = path.resolve(__dirname, '..', '..', 'client/build', 'index.html');

//     fs.readFile(filePath, 'utf8', (err, htmlData) => {
//         if (err) {
//             console.error('err', err);
//             return res.status(404).end()
//         }

//         // Render the app as a string
//         const html = ReactDOMServer.renderToString(<App />);

//         // Inject the rendered app into our html and send it
//         return res.send(
//             htmlData.replace(
//                 '<div id="root"></div>',
//                 `<div id="root">${html}</div>`
//             )
//         );
//     });
// }