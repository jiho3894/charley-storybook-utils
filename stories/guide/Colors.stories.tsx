import { Meta } from '@storybook/react';
import Colors from './Colors';

const meta: Meta<typeof Colors> = {
  title: 'TTDS/Guide/Colors',
  component: Colors,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <Colors />
    </>
  );
};
