import { Colors } from '../../token';
import styles from './Skeleton.module.scss';

interface ISkeletonUIProps extends React.HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
  backgroundColor?: string;
}

const Skeleton = ({ width, height, backgroundColor = Colors.Gray500, ...props }: ISkeletonUIProps) => {
  return (
    <div className={styles.skeleton} style={{ width: width, height: height, background: backgroundColor }} {...props} />
  );
};

export default Skeleton;
