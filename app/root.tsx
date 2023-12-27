import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration as ScrollRestorationRemix,
} from '@remix-run/react';
import {getInitialRootClassName} from '@gravity-ui/uikit';

import globalStyles from '~/styles/globals.css';
import gravityFonts from '@gravity-ui/uikit/styles/fonts.css';
import gravityStyles from '@gravity-ui/uikit/styles/styles.css';

export const links: LinksFunction = () => [
    {rel: 'stylesheet', href: globalStyles},
    {rel: 'stylesheet', href: gravityFonts},
    {rel: 'stylesheet', href: gravityStyles},
];

export const meta: MetaFunction = () => [
    {
        charset: 'utf-8',
        title: 'Gravity UI – Remix App Example',
        viewport: 'width=device-width,initial-scale=1',
        description: 'Web site created using Remix',
    },
];

const theme = 'dark';
const rootClassName = getInitialRootClassName({theme});

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className={rootClassName}>
                <Outlet />
                <ScrollRestorationRemix />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
};

export default App;
