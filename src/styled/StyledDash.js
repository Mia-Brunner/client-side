import styled, {css} from "styled-components";


// header and footer of dash
export const StyleHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #3D99E6;
  height: 50px;
  color: white;
`

export const StyleFooterCopyright = styled.div`

`
// side nav of dash
export const StyledSideNav = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sidenav;
  background-color: #394263;
`
export const StyledSideNavList = styled.ul`
  padding: 0;
   margin-top: 85px;
  list-style-type: none;
  
`
export const StyledSideNavListItem = styled.li`
  padding: 20px 20px 20px 40px;
  color: #ddd;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`
// box for recent items not sure what to add here 
export const StyledMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  height: 150px; 
  background-color: #e3e4e6;
  color: slategray;
`
export const StyledMainHeaderHeading = styled.h1`
  font-size: 0.8rem;

`
export const StyledMainHeaderUpdates = styled.h1`
  font-size: 0.6rem;
`

// main overview boxes - main points for dashboard
export const StyledMainOverview = styled.div`
  display: grid;
  grid-gap: 200px;
   margin: 20px;
`
export const StyledMainOverviewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: #3D99E6;

`
export const StyledMainOverviewCardIcon = styled.div`
color: white;

`

// main card boxes 
export const StyledMainCards = styled.div`
 column-count: 2;
    column-gap: 20px;
    margin: 20px;
    
`
export const StyledCards = styled.div`
  display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-bottom: 20px;
    -webkit-column-break-inside: avoid;
    padding: 24px;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    /* &:first-child {
      height: 485px;
    }
    &:nth-child(2) {
      height: 200px;
    }
    &:nth-child(3) {
      height: 265px;
    } */
`


export const StyledDeleteBtn = styled.button`
  background-color: #EA7172;
  color: #fff;
  font-size: 0.7rem;
  border-radius: 2.5px;
  border: 0;
  padding: 5px;
  cursor: pointer;
`



 


export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  height: 10vh;
  padding: 0 50px;
`;

export const StyledHeader = styled.h1`
  font-size: 28px;
  color:  #121212;
  display: block;
`

export const StyledTitle = styled.h1`
  font-size: 14px;
  color: white;
  background: -webkit-linear-gradient(to top, #56ccf2, #2f80ed);
  background: #3D99E6;
  border-radius: 5px;
  height: 20px;
  padding: 20px;
`
export const StyledQuoteBox = styled.div`

`