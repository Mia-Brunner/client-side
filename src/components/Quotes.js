import React from 'react'
import Quote from './Quote'
import {useGlobalState} from '../config/store'
import {StyledWrapper, StyledHeader, StyledTitle, StyleHeaderContainer, StyleFooterCopyright, StyledSideNavList, StyledSideNavListItem, StyledSideNav, StyledMainHeader, StyledMainHeaderHeading, StyledMainHeaderUpdates, StyledMainOverview, StyledMainOverviewCard, StyledMainOverviewCardIcon, StyledMainCards, StyledCards} from '../styled/StyledDash'



const Quotes = () => {
  const {store} = useGlobalState()
  const {quotes} = store
  return (
    <>
    <StyleHeaderContainer>
      <div>Dashboard</div>
    </StyleHeaderContainer>

    <StyledMainHeader>
      <StyledMainHeaderHeading>Hello, Paul</StyledMainHeaderHeading>
      <StyledMainHeaderUpdates>
        Recent Items
      </StyledMainHeaderUpdates>
    </StyledMainHeader>

    <StyledMainOverview>
      <StyledMainOverviewCard>
        <StyledMainOverviewCardIcon>New Messages</StyledMainOverviewCardIcon>
       
      </StyledMainOverviewCard>
    </StyledMainOverview>

    <StyledMainCards>
      
      
      {quotes.map(quote => (<Quote key={quote._id} quote={quote} /> ))}
  
      <StyledTitle>New Reviews</StyledTitle> 
      
      
    </StyledMainCards>





    <StyleHeaderContainer>
      <StyleFooterCopyright>&copy; PID Electrical Services 2020</StyleFooterCopyright>
    </StyleHeaderContainer>
    </>
  )
}

export default Quotes