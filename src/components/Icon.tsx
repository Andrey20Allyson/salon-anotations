import { FontAwesome } from '@expo/vector-icons';

export interface IconProps {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  size?: number;
  onPress?: () => void;
}

export default function Icon(props: IconProps) {
  return (
    <FontAwesome size={40} color="#fff" {...props}></FontAwesome>
  );
};