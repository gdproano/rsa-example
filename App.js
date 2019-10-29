/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {RSA} from 'react-native-rsa-native';

const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const publicKey =
    '-----BEGIN RSA PUBLIC KEY-----\nMIICCgKCAgEAumGfPuK3FH6If+8JBh0OoylfLpIdGlRFjgnl6uW8i9w5f7cIeDkN\nq+BQ3Id1kPwXCFh+S3mjVzvwdijgKePkPM8jpNXN2XGgoY4hW6pfcYFlrDd71tLS\nzDG0YducDYsDZ0DT0AuMfbqdoGVSbcvTdmuDnsprOmzUD/haABqNDjKBqOqL7HFL\nhiAtcTWDzck/NBLlweEBaXZHUgAaqAU34EsqfKoWPiJZ4QzDFTNXGfZZ/8+uTNMk\niOxUqRo47pOibNzWB1XvQHRCV+jIkMrhFWBQFYjrfoUE77ZoXco2HC3HGe8hBXQb\nGUZDZYankYe6wGmP2nP2MzFn4kZ+7fwJn3O/iDkuFmlcEFZQIC07MtqYRxVje6Kt\nR37C7SysZReCPaN9svsitzggJTZFDtNxhzcmlkzJTi6AKr3KMFUYVf9Mg8QKMe93\nJp2eLnXH/h9Lxqkm+ohpISUhst4TJXaF5LPCVvwySrF+VNe2TBqWRH6WHVDZOqqx\nnpxrR+VkGqVFS1zlU3WUIIziJyAWUbdrCuoITheRXIz8FOm8hnztkg3HPb7/i8f7\nB4490RW/Ob8HQIf8+98M78V3cvJFqhF54U6wp4T3rcU11X+5FF4vQnlH0k5Eb704\ngNv7AZnuJs2lmBNynSj6JWIBVd9SqqtYKztTEoYcSn9Kvc7pKPifbyMCAwEAAQ==\n-----END RSA PUBLIC KEY-----\n';

  RSA.encrypt(value, publicKey).then(encodedMessage => {
    console.log(`the encoded message is ${encodedMessage}`);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
