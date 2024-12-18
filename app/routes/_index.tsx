import {Ghost} from '@gravity-ui/icons';
import {AsideHeader} from '@gravity-ui/navigation';

import {InfoButtons} from '../components/InfoButtons';
import {Wrapper} from '../components/Wrapper';

const Index = () => {
    return (
        <AsideHeader
            logo={{icon: Ghost, text: 'remix-example'}}
            compact={true}
            hideCollapseButton={true}
            renderContent={() => (
                <Wrapper>
                    <InfoButtons />
                </Wrapper>
            )}
        />
    );
};

export default Index;
