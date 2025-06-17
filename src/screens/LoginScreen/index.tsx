import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '@src/navigation/types';
import DefaultActionBar from '@src/components/DefaultActionBar';
import {h, w} from '@src/common/sizes';
import LogoSvg from '@src/assets/svgs/LogoSvg';
import {Formik, FormikProps} from 'formik';
import {HelperText, TextInput} from 'react-native-paper';
import {text_style} from '@src/common/sizes/nativewind';
import {RectButton} from 'react-native-gesture-handler';
import * as yup from 'yup';
import {ROUTER_BOTTOM, ROUTER_ROOT, ROUTER_TOP} from '@src/navigation/routers';

const DATA_THIRD_PARTY = [
  require('@src/assets/images/login/4g.png'),
  require('@src/assets/images/login/google.png'),
  require('@src/assets/images/login/fb.png'),
  require('@src/assets/images/login/apple.png'),
];

interface LoginFormValues {
  username: string;
  password: string;
}
const initial = {
  username: 'ngnm1009@gmail.com',
  password: '10091994',
};
const schemal = yup.object().shape({
  username: yup
    .string()
    .required('Email không được bỏ trống')
    .email('Email không đúng định dạng'),
  password: yup.string().required('Mật khẩu không được bỏ trống'),
});

export interface LoginScreenProps
  extends RootStackScreenProps<'LOGIN_SCREEN'> {}
export type LoginScreenRef = {};

const LoginScreen = React.forwardRef<LoginScreenRef, LoginScreenProps>(
  (props, _ref) => {
    const {navigation} = props;
    // REF
    const formikRef = React.useRef<FormikProps<LoginFormValues>>(null);
    //
    // STATE
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    //
    // EFFECT
    React.useEffect(() => {
      if (!navigation.isFocused) {
        formikRef?.current?.resetForm();
      }
    }, [navigation.isFocused]);
    //
    return (
      <View className="flex-1 bg-black pb-safe-or-[var(--h-10)]">
        <DefaultActionBar
          iconColor="#FFFFFF"
          bgColor="#000000"
          iconSize={w(24)}
        />
        <View className="self-center w-300 items-center mt-10">
          <LogoSvg />
          <Text className="font-bold color-white text-xl mt-10">Đăng nhập</Text>
          <Text className="font-bold color-white text-xl text-center">
            Watchify và trải nghiệm
          </Text>
        </View>
        <View className="items-center flex-1">
          <Formik
            ref={formikRef}
            initialValues={initial}
            validationSchema={schemal}
            onSubmit={() => {
              navigation.navigate(ROUTER_ROOT.BOTTOM_STACK, {
                screen: ROUTER_BOTTOM.HOME_SCREEN,
                params: {
                  screen: ROUTER_TOP.SUGGEST_SCREEN,
                },
              });
            }}>
            {({values, handleChange, errors, handleSubmit}) => {
              const err = Object.values(errors).find(e => Boolean(e));
              return (
                <View className="w-300 mt-40 flex-1">
                  <TextInput
                    mode="outlined"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    error={Boolean(errors.username)}
                    label="Tài khoản"
                    placeholder="Tài khoản"
                    style={styles.text_input}
                    outlineStyle={styles.outline_text_input}
                    textColor="#FFFFFF"
                    activeOutlineColor="#FFFFFF"
                    placeholderTextColor="#8A8B93"
                  />
                  <View className="h-16" />
                  <TextInput
                    mode="outlined"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    error={Boolean(errors.password)}
                    label="Mật khẩu"
                    placeholder="Mật khẩu"
                    secureTextEntry={secureTextEntry}
                    style={styles.text_input}
                    outlineStyle={styles.outline_text_input}
                    textColor="#FFFFFF"
                    activeOutlineColor="#FFFFFF"
                    placeholderTextColor="#8A8B93"
                    right={
                      <TextInput.Icon
                        icon={secureTextEntry ? 'eye-slash' : 'eye'}
                        size={w(16)}
                        color="#8A8B93"
                        onPressIn={() => setSecureTextEntry(false)}
                        onPressOut={() => setSecureTextEntry(true)}
                      />
                    }
                  />
                  {err ? (
                    <View className="items-center py-8">
                      <HelperText visible={Boolean(err)} type="error">
                        {err}
                      </HelperText>
                    </View>
                  ) : (
                    <View className="h-16" />
                  )}
                  <RectButton
                    onPress={() => handleSubmit()}
                    style={styles.btn}
                    underlayColor="#FFFFFF"
                    activeOpacity={0.1}
                    rippleColor="#FFFFFF1A"
                    foreground>
                    <Text className="text-base font-bold color-white text-center">
                      Đăng nhập
                    </Text>
                  </RectButton>
                  <Text
                    className="my-24 text-sm font-normal color-[#B0B0B8] text-center"
                    onPress={() => {}}>
                    hoặc đăng nhập bằng
                  </Text>
                  <View className="flex-row items-center justify-around px-40">
                    {DATA_THIRD_PARTY.map((e, i) => (
                      <RectButton
                        key={i}
                        underlayColor="#FFFFFF"
                        activeOpacity={0.1}
                        rippleColor="#FFFFFF1A"
                        foreground
                        style={styles.round}>
                        <Image source={e} className="w-40 h-w-40" />
                      </RectButton>
                    ))}
                  </View>

                  <View className="flex-1 items-center justify-center">
                    <Text
                      className=" color-[#D21F3C] text-sm font-bold"
                      onPress={() => {}}>
                      Đăng ký / Quên mật khẩu
                    </Text>
                  </View>
                  <Text className="color-[#656874] text-sm text-center">
                    Bằng việc đăng nhập, bạn đã đồng ý với
                  </Text>
                  <Text
                    className="color-[#FFD130] text-sm text-center"
                    onPress={() => {}}>
                    Điều khoản sử dụng của Watchify
                  </Text>
                </View>
              );
            }}
          </Formik>
        </View>
      </View>
    );
  }
);

export default React.memo(LoginScreen);

const styles = StyleSheet.create({
  text_input: {
    backgroundColor: '#141414',
    height: h(40),
    fontSize: text_style.base.fontSize,
  },
  outline_text_input: {
    borderRadius: 8,
  },
  btn: {
    height: h(40),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#D21F3C',
  },
  round: {
    borderRadius: 100,
  },
});
