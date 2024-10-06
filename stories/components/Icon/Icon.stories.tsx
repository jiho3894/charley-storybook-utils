import { Meta } from '@storybook/react';
import { Fragment } from 'react';
import Icon from '.';
import { TIconColor, TIconSize } from '../../token/types';

const meta: Meta<typeof Icon> = {
  title: 'TTDS/Basic/Icon',
};

export default meta;

export const Variant = () => {
  const sizes = ['24px', '16px'] as TIconSize[];
  const colors = ['BGray', 'Black', 'WGray', 'White', 'Primary'] as TIconColor[];
  const colorsPlus = [...colors, 'Error'] as TIconColor[];
  return (
    <>
      {sizes.map((size) => {
        return (
          <div key={size}>
            {colors.map((color) => {
              return (
                <Fragment key={color}>
                  <Icon icon="Close_Line" size={size} color={color} />
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
