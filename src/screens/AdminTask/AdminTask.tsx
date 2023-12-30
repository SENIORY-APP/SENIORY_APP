import { View, Text } from 'react-native';
import { ScreenWrapper } from '@components/common/ScreenWrapper';
import { Scales } from '@constants/style/Scales';

/**
 * 관리자 로그인 시 맨 처음 보여지는 메인 Screen 컴포넌트
 */
const AdminTask = () => {
  return (
    <ScreenWrapper>
      <View style={{ padding: Scales._50 }}>
        <Text>나와라나와라</Text>
      </View>
    </ScreenWrapper>
  );
};

export default AdminTask;
