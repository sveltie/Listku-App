import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.nav`
  background: var(--primary-600);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  margin-bottom: 20px;

  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links h5 {
    margin: 0;
    margin-right: 2rem;
  }
   h5 {
       color: white;
       font-size: 0.9rem;
   }
`;

export const NavLogo = styled(LinkRouter)`
    color: var(--white);
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: 5px;
    font-weight: bold;
`

export const EmptyContainer = styled.section`
  text-align: center;
  h5 {
    text-transform: none;
  }
`
export const Container = styled.section`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 5rem;

  .task {
    background: var(--grey-50);
    border-radius: var(--borderRadius);
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }

  .task:hover {
      box-shadow: var(--shadow-3);
      background: var(--grey-100);
  }

  .task h5 {
    margin-bottom: 0;
    text-transform: capitalize;
    letter-spacing: 0;
  }

  .task-date {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: var(--smallText);
    padding: 0.15rem 0.5rem;
    border-top-right-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    background: var(--primary-100);
    color: var(--primary-500);
  }

  .task-links {
    display: flex;
    align-items: center;
    margin-top: auto;
    font-size: 0.85rem;
  }

  .task-status {
    margin-left: auto;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 0.85rem;
  }
  
  .task-link {
    background: transparent;
    border: transparent;
    text-transform: capitalize;
    color: var(--green-dark);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--borderRadius);
    line-height: 1;
  }

  .task-link:hover {
    color: var(--primary-500);
  }

  .task-delete {
    margin-left: 1rem;
    color: var(--red-dark);
  }

  .task-status {
    color: var(--primary-500);
    text-transform: uppercase;
  }

  .task-status-declined {
    color: var(--red-dark);
  }

  .task-status-interview {
    color: var(--green-dark);
  }
`