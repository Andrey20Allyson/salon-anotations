import { StyleSheet, View, ViewProps } from 'react-native';

export default function RowView(props: ViewProps) {
  return (
    <View {...props} style={[rowStyle, props.style]} />
  )
}

export const {
  rowStyle
} = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
  }
});