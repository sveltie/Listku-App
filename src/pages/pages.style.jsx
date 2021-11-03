import styled from "styled-components";

export const HomeWrapper = styled.div`
  .container {
    display: grid;
    align-items: center;
    margin-top: -6rem;
    color: var(--white);
  }

  .home-img {
    display: flex;
    justify-content: center;
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
        .info {
          margin-top: -5vw;
        }

        p {
            font-size: 0.9rem;
        }

        h1 {
          font-size: 2.3rem;
        }
    }

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }

  h1 {
    font-weight: 700;
  }

  .main-img{
    display: none;
  }

  .other-img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }

    .main-img {
      display: block;
    }

    .mobile-img {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .mobile-img {
      display: block;
      margin-top: -20vw;
      margin-bottom: 20vw;
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      max-width: 400px;
    }
  }

  @media screen and (max-width: 320px) {
    .mobile-img {
      display: none;
    }

    .info {
      margin-top: 40vw;
      margin-bottom: 10vw;
    }
  }
`;

export const Container = styled.section`
  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  select {
      color: var(--white);
  }

  .form h4 {
    text-align: center;
  }
  
  .form > p {
    text-align: center;
    color: var(--green-light);
    letter-spacing: var(--letterSpacing);
    margin-top: 0;
  }

  .status {
    background: var(--grey-900);
    border-radius: var(--borderRadius);
    border-color: transparent;
    padding: 0.25rem;
  }
`

export const ErrorContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);

  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 767px) {
    img {
      max-width: 300px;
    }
  }
`