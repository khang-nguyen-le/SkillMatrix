import styled from 'styled-components';

export const PageWrapper = styled.main`
  background-color: var(--color-primary--5);
`;

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PageTitleWrapper = styled.section`
  padding: 1.6rem 0 4.8rem;
`;

export const Main = styled.section`
  background-color: #fff;
  height: 100vh;
  border-radius: 32px 32px 0 0;
`;

export const PageTitle = styled.h2`
  color: var(--color-gray--1);
  font-size: 28px;
  text-transform: capitalize;
`;
