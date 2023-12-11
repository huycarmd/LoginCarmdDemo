import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.carmd.demo',
  appName: 'LoginCarmdDemo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
