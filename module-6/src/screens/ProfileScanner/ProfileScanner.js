/**
 * @flow
 */

import * as React from 'react';
import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Button from '../../components/Button/Button';

import {color, sizes, fonts, getFontSizeStyle} from '../../styles';
import {dimensions} from '../../config';

const PROFILE_HEADER_HEIGHT = 175;

const defaultProfileImage =
  'https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png';

const ProfileScanner = ({navigation}) => {
  const [profile, setProfile] = React.useState(null);
  const [isLookingProfile, setAsLookingProfile] = React.useState(false);

  const closeScanner = () => navigation.goBack();

  const onScanProfile = ({data}) => setProfile(JSON.parse(data));

  const clearScannedProfile = () => setProfile(null);

  const confirmToLookProfile = () => setAsLookingProfile(true);

  const closeLookingProfile = () =>
    clearScannedProfile() || setAsLookingProfile(false);

  const openProfileLinkedIn = () =>
    Linking.canOpenURL(profile.linkedin).then(
      isSupported => isSupported && Linking.openURL(profile.linkedin),
    );

  const openProfileGitHub = () =>
    Linking.canOpenURL(profile.github).then(
      isSupported => isSupported && Linking.openURL(profile.github),
    );

  if (isLookingProfile && profile) {
    return (
      <Content>
        <Header />
        <View style={styles.profileContent}>
          <Button
            buttonStyle={styles.scannerProfileClear}
            onPress={closeLookingProfile}>
            x FECHAR
          </Button>
          <View style={styles.profileContentHeader}>
            <Image
              style={styles.profileImage}
              source={{uri: profile.picture || defaultProfileImage}}
            />
            <Title style={styles.profileName} color={color.dark}>
              {profile.name}
            </Title>
            <Subtitle style={styles.profileUsername} color={color.primary}>
              @{profile.codenation}
            </Subtitle>
          </View>
          <View style={styles.profileContentDetails}>
            <Button
              color={color.blue}
              style={styles.profileDetail}
              onPress={openProfileLinkedIn}>
              LinkedIn
            </Button>
            <Button
              color={color.dark}
              style={styles.profileDetail}
              disabled={!profile.github}
              onPress={openProfileGitHub}>
              GitHub
            </Button>
          </View>
        </View>
      </Content>
    );
  }

  return (
    <Content style={styles.scannerContent}>
      <QRCodeScanner
        showMarker={true}
        reactivate={true}
        reactivateTimeout={3000}
        onRead={onScanProfile}
        flashMode={RNCamera.Constants.FlashMode.off}
        containerStyle={styles.scannerContent}
        topViewStyle={styles.scannerHeader}
        cameraStyle={styles.scannerCamera}
        bottomViewStyle={styles.scannerBottom}
        bottomContent={
          <View style={styles.scannerActions}>
            {profile ? (
              <React.Fragment>
                <View style={styles.scannerProfile}>
                  <Button
                    buttonStyle={styles.scannerProfileClear}
                    onPress={clearScannedProfile}>
                    x LIMPAR
                  </Button>
                  <View style={styles.scannerProfileContent}>
                    <Image
                      style={styles.scannerProfileImage}
                      source={{uri: profile.picture || defaultProfileImage}}
                    />
                    <Text style={styles.scannerProfileText}>
                      {profile.name}
                    </Text>
                  </View>
                </View>
                <Button
                  style={styles.buttonText}
                  color={color.primary}
                  onPress={confirmToLookProfile}>
                  CONFIRMAR
                </Button>
              </React.Fragment>
            ) : (
              <Button
                style={styles.buttonText}
                color={color.dark}
                onPress={closeScanner}>
                FECHAR
              </Button>
            )}
          </View>
        }
      />
    </Content>
  );
};

const styles = {
  buttonText: StyleSheet.compose(getFontSizeStyle(sizes.medium)),
  profileContent: {
    flex: 1,
    minHeight: dimensions.height - PROFILE_HEADER_HEIGHT,
    marginTop: 25,
    padding: 25,
    flexFlow: 'column wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileContentHeader: {
    flex: 1,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileName: {
    marginVertical: 25,
    textAlign: 'center',
  },
  profileContentDetails: {
    flex: 1,
    width: '75%',
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileDetail: StyleSheet.compose(
    getFontSizeStyle(sizes.small),
    {
      background: 'transparent',
    },
  ),
  scannerContent: {
    flex: 1,
  },
  scannerHeader: {
    display: 'none',
  },
  scannerCamera: {
    height: dimensions.height * 0.75,
  },
  scannerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  scannerActions: {
    width: dimensions.width,
    height: dimensions.height * 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scannerProfile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerProfileClear: {
    alignSelf: 'flex-start',
    padding: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  scannerProfileContent: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  scannerProfileImage: {
    width: 60,
    height: 60,
    marginVertical: 15,
    alignSelf: 'center',
    borderRadius: 50,
  },
  scannerProfileText: StyleSheet.compose(
    fonts.fontWeightBold,
    {
      alignSelf: 'center',
    },
  ),
};

export default ProfileScanner;
