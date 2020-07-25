import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from './MediaQueries';

export const StyledNav = styled.nav`
    display: flex;
    padding: 20px;
    align-items: center;
    /* margin-bottom: 40px; */

    @media ${devices.tablet} {
        flex-direction: column;
    }
`;

export const NavItems = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;
`;

export const NavBrand = styled(Link)`
    flex-grow: 1;
    font-size: 16px;
    font-weight: 700;
    color: #122227;
    text-decoration: none;
`;

export const NavItem = styled(Link)`
    margin-right: 20px;
    cursor: pointer;
    transition: 250ms;
    cursor: pointer;
    color: #122227;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
    }
`;

export const NavItemButton = styled(NavItem)`
    padding: 5px 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    /* border: 1px solid #663399; */
    /* add additional styled if primary*/
    ${(props) =>
        props.primary &&
        css`
            background-color: #663399;
            color: white;
        `}
`;
