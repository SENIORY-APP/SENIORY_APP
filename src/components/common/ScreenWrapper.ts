import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { Colors } from '@constants/style/Colors';

export const ScreenWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Colors.gsFF};
`;
