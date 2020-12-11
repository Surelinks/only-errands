import React from 'react'
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-2.svg';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, 
    ServicesP,  ServicesWrapper } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP> We Help reduce your fees and increase revenue </ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtual Offices </ServicesH2>
                <ServicesP> Access our platform Online! </ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Prenuim benefits </ServicesH2>
                <ServicesP> Unlock Membership  </ServicesP>
                </ServicesCard>
            </ServicesWrapper> 
        </ServicesContainer>
    )
}

export default Services
