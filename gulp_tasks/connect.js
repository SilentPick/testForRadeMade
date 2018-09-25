//import plugins
import { gulp } from 'gulp';
import bs from 'browser-sync';

export const browserSync = () => {

  return bs.init({
    server: {
      baseDir: "./www"
    },
    port: 3000,
  });

};
