import {LinksFunction} from '@remix-run/node';
import {InfoButtons, links as infoButtonsLinks} from '~/components/InfoButtons';
import {Wrapper, links as wrapperLinks} from '~/components/Wrapper';

//styles for components from @gravity-ui/uikit
import buttonStyles from '@gravity-ui/uikit/build/esm/components/Button/Button.css';
import iconStyles from '@gravity-ui/uikit/build/esm/components/Icon/Icon.css';

export const links: LinksFunction = () => [
    ...infoButtonsLinks(),
    ...wrapperLinks(),
    {rel: 'stylesheet', href: iconStyles},
    {rel: 'stylesheet', href: buttonStyles},
];

export default function Index() {
    return (
        <Wrapper>
            <InfoButtons />
        </Wrapper>
    );
}
