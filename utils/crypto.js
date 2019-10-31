import forge from 'node-forge';

const encodeURL = text => text.replace(/\+/g, '-').replace(/\//g, '_');
const decodeURL = text => text.replace(/-/g, '+').replace(/_/g, '/');

export const encrypt = (plainText, key) => {
  const publicKey = forge.pki.publicKeyFromPem(key);
  return encodeURL(
    forge.util.encode64(
      publicKey.encrypt(plainText, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
      }),
    ),
  );
};

export const decrypt = (cipherText, key) => {
  const privateKey = forge.pki.privateKeyFromPem(key);
  return privateKey.decrypt(
    forge.util.decode64(decodeURL(cipherText)),
    'RSA-OAEP',
    {
      md: forge.md.sha256.create(),
    },
  );
};
