import styled from 'styled-components';

export const CollectionPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  grid-gap: 30px;
`;
