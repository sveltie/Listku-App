import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Wrapper = styled.nav`
  background: var(--grey-900);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  margin-bottom: 20px;

  @media screen and (max-width: 532px) {
    h5 {
      display: none;
    }
  }

  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .btn-container {
    position: relative;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    border-radius: var(--borderRadius);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-500);
    padding: 0;
    text-align: center;
    visibility: hidden;
    transition: var(--transition-3);
    border-radius: var(--borderRadius);
  }

  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    padding: 0.375rem 0.75rem;
    width: 100%;
    border-radius: var(--borderRadius);
  }

  .dropdown-btn:hover {
    background: var(--primary-600);
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
    color: var(--white);
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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 532px) {
    grid-template-columns: 1fr;
  }

  .task {
    background: var(--grey-700);
    border-radius: var(--borderRadius);
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: var(--shadow-5);
    transition: var(--transition-2);
    color: var(--white);
  }

  .task:hover {
      box-shadow: var(--shadow-6);
  }

  .task h5 {
    margin-bottom: 0;
    text-transform: capitalize;
    letter-spacing: 0;
    padding: 0.15rem;
  }

  .task-date {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-size: var(--smallText);
    padding: 0.15rem 0.5rem;
    border-radius: var(--borderRadius);
    background: var(--grey-900);
    color: var(--white);
  }

  .task-label span {
    background: var(--grey-900);
    padding: 0.15rem 0.5rem;
    margin-top: 0.2rem;
    display:inline-block;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    font-size: 0.9rem;
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
`

export const RegisterWrapper = styled.section`
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }

  .form {
    max-width: 400;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .btn {
    margin-top: 1rem;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
  }
`;