import React from 'react'
import styled, {withTheme} from "styled-components"
import { Page } from "../common/Page"
import SprintCeremonies from "../../layouts/SprintCeremonies"


const Title = styled.div`
    font-size: 2rem;
    color: ${p => p.theme.colors.primaryBlue}; 
`

const Heading = styled.h2`
    color: ${p => p.theme.colors.primaryRed};
`;

const ScrumInfo = () => {
    
    return <Page>
        <Title>Scrum Hints & Tips</Title>
        <Heading>What is a sprint?</Heading>
        <Heading>Who is on a scrum team?</Heading>
        <SprintCeremonies />
    </Page>
}

export default withTheme(ScrumInfo)