import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Divider from '.';

const meta: Meta<typeof Divider> = {
  title: 'TTDS/Basic/Divider',
  component: Divider,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Container>
        <Divider type="Thin" />
      </Container>
      <Container>
        <Divider type="Thickest" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
`;
