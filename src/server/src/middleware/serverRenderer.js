import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

// Import the main App component
import App from '../../../client/src/App';

import path from 'path';
import fs from 'fs';

export default (req, res, next) => {

    // Point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', '..', 'client/build', 'index.html');

    // This context object contains the results of the render
    const context = {};

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
    
        // Render the app as a string
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
    
        // Inject the rendered app into our html
        return res.send(
            htmlData.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
            )
        );
    });
}