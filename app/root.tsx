import type {MetaFunction} from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration as ScrollRestorationRemix,
} from '@remix-run/react';
import {DEFAULT_BODY_CLASSNAME} from './components/Wrapper';

import './styles/globals.scss';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export const meta: MetaFunction = () => [
    {
        charset: 'utf-8',
        title: 'Gravity UI - Remix App Example',
    },
];

const App = () => {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Web site created using Remix" />
                <Meta />
                <Links />
            </head>
            <body className={DEFAULT_BODY_CLASSNAME}>
                <Outlet />
                <ScrollRestorationRemix />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
};

export default App;
