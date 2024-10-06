import { Meta } from '@storybook/react';
import Skeleton from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'TTDS/Basic/SkeletonUI',
  component: Skeleton,
};

export default meta;

export const Variant = () => {
  return <Skeleton width="100%" height="80px" />;
};
