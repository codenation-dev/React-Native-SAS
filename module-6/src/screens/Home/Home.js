/**
 * @flow
 */

import * as React from 'react';
import {View, Text, StyleSheet, Share} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import {useAccelerationUser} from '../../hooks/domain/acceleration/useAccelerationUser';

import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Subtitle from '../../components/Subtitle/Subtitle';
import Button from '../../components/Button/Button';

import {ACCELERATION_PROFILE_SCANNER} from '../../router/routes';

import {color, sizes, getFontSizeStyle, colors} from '../../styles';
import {dimensions} from '../../config';

const Home = ({navigation}) => {
  const user = useAccelerationUser();

  const qrCode = React.useRef(null);

  const socialUser = user && {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    picture: user.picture || null,
    linkedin: user.linkedin || null,
    github: user.github || null,
    codenation: user.nickname,
  };

  const shareQRCode = () =>
    qrCode.current.toDataURL(dataURL =>
      Share.share({
        url: `data:image/png;base64,${dataURL}`,
      }),
    );

  const goToScanProfile = () =>
    navigation.navigate(ACCELERATION_PROFILE_SCANNER);

  return (
    <Content>
      <Header>
        <Subtitle>PARABÉNS</Subtitle>
      </Header>
      <View style={styles.home}>
        <View>
          <Title color={color.dark}>Você está oficialmente no programa</Title>
          <Text style={styles.text}>
            Parabéns, você concluiu com sucesso todos os passos inicias para
            entrar no programa #AceleraDev.
          </Text>
        </View>
        {socialUser && (
          <View style={styles.subscriber}>
            <Subtitle color={color.primary}>
              Compartilhe o código QR abaixo com um colega
            </Subtitle>
            <Text style={styles.text}>
              Para que ele acesse seus contatos pessoais
            </Text>
            <View style={styles.subscriberCode}>
              <QRCode
                size={dimensions.width / 2}
                value={JSON.stringify(socialUser)}
                getRef={qrCode}
              />
            </View>
            <View style={styles.subscriberActions}>
              <Button
                buttonStyle={styles.subscriberShare}
                onPress={shareQRCode}>
                COMPARTILHAR
              </Button>
              <Button primary={true} onPress={goToScanProfile}>
                LER CÓDIGO
              </Button>
            </View>
          </View>
        )}
      </View>
    </Content>
  );
};

const styles = {
  home: {
    padding: 25,
    backgroundColor: colors.white,
    minHeight: dimensions.height - 200,
  },
  text: StyleSheet.compose(
    getFontSizeStyle(sizes.small),
    {
      marginVertical: 25,
      alignSelf: 'flex-start',
    },
  ),
  subscriber: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subscriberCode: {
    flex: 2,
    alignSelf: 'center',
  },
  subscriberActions: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  subscriberShare: {
    padding: 12,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.dark,
  },
};

export default Home;
