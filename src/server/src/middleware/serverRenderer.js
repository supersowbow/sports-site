import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

// Import the main App component
import App from '../../../client/src/App';

export default (req, res, next) => {

    // This context object contains the results of the render
    const context = {};

    const render = (error, data) => {
        // Send an error message
        if (error) {
            return res.status(500).send({ error: 'internal server error' });
        }
    
        // Render the App component as a string
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
    
        const replacedHTML = data.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
        );
        return res.send(replacedHTML);
    }
    
    // Render in PRODUCTION
    if (process.env.NODE_ENV === 'production') {
        // Point to the html file in production build directory
        const filePath = path.resolve(__dirname, 'build/index.html');

        fs.readFile(filePath, 'utf8', (err, htmlData) => {
            render(err, htmlData);
        });

    } else { 
    // Render in DEVELOPMENT
        console.log(`eyeeeeeeeeehhhh`);
        // Point to the html file created by CRA's build tool
        const filePath = path.resolve(__dirname, '..', '..', 'client/build/index.html');
        console.log(`FILEEEEE:  ${filePath}`)
        fs.readFile(filePath, 'utf8', (err, htmlData) => {
            render(err, htmlData);
        });
    } 
}