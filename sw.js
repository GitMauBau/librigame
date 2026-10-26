/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-f0c192c2'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "index.html",
    "revision": "cd2b776d15875f8109f6f369caf18226"
  }, {
    "url": "icon.svg",
    "revision": "05ff98e706e586c24aedd8ce0ac989fe"
  }, {
    "url": "stories/index.json",
    "revision": "c0cb6e0bd18f4028cce9147681c1ea53"
  }, {
    "url": "stories/tre-citta/story.json",
    "revision": "659c42ae748a9a872827f7be7df67bfe"
  }, {
    "url": "stories/tre-citta/story.en.json",
    "revision": "b6866659a798a0c818815e9342f92a32"
  }, {
    "url": "stories/tre-citta/img/yanaka.svg",
    "revision": "aacc654bc841aafa47747c529302e0bc"
  }, {
    "url": "stories/tre-citta/img/yamanote.svg",
    "revision": "40cfcf143e8d8dc484ac228a21d57d3e"
  }, {
    "url": "stories/tre-citta/img/winder.svg",
    "revision": "979e576d13c93804ddc3af0ef00a5483"
  }, {
    "url": "stories/tre-citta/img/walkman.svg",
    "revision": "8f1d0a634801ac7708e054a5d10b00c6"
  }, {
    "url": "stories/tre-citta/img/torrone.svg",
    "revision": "1fbb840d387968081126e5d38ae1d5dc"
  }, {
    "url": "stories/tre-citta/img/tickets-2.svg",
    "revision": "e6a2ba8fdb881d74dc587f8af5ca12b5"
  }, {
    "url": "stories/tre-citta/img/tickets-1.svg",
    "revision": "5f08a54e54ced841e8574ac4f35e78aa"
  }, {
    "url": "stories/tre-citta/img/tickets-0.svg",
    "revision": "89f01b51e47578b90545dc9a2a0c4beb"
  }, {
    "url": "stories/tre-citta/img/tape-after.svg",
    "revision": "8ba5c02feffce37c4aa844a5fa15452b"
  }, {
    "url": "stories/tre-citta/img/shibuya.svg",
    "revision": "99c51f3415babf23860108f10dc2a5aa"
  }, {
    "url": "stories/tre-citta/img/ring.svg",
    "revision": "0fe587fbcc84308a941980ec0c93a3bd"
  }, {
    "url": "stories/tre-citta/img/poetto.svg",
    "revision": "770faf5707dd1bb5e7a7120603423527"
  }, {
    "url": "stories/tre-citta/img/photo.svg",
    "revision": "249201fa0615254cfc2ae1491263c52a"
  }, {
    "url": "stories/tre-citta/img/phone.svg",
    "revision": "3733f2f9afdb1a59ca65d75194b20ae4"
  }, {
    "url": "stories/tre-citta/img/omikuji.svg",
    "revision": "ef2c5849486418c0eb0f6122d2f3d6ab"
  }, {
    "url": "stories/tre-citta/img/mercato.svg",
    "revision": "24b5862b3f3c7a095440773ab54af0e5"
  }, {
    "url": "stories/tre-citta/img/mauerpark.svg",
    "revision": "571bfa4bb9884953c8020386decb8794"
  }, {
    "url": "stories/tre-citta/img/marina.svg",
    "revision": "521d8b39a72a80f59c80391aea9e9130"
  }, {
    "url": "stories/tre-citta/img/letter.svg",
    "revision": "54d0994a6f7be26144738e7967a40625"
  }, {
    "url": "stories/tre-citta/img/kreuzberg.svg",
    "revision": "0204d294e62e34a6ff6d2ee96c3d5e3c"
  }, {
    "url": "stories/tre-citta/img/eastside.svg",
    "revision": "200b5cb4e3595a70fb233c82557638d5"
  }, {
    "url": "stories/tre-citta/img/casa.svg",
    "revision": "cdd2a660fa217963612d0d68db85e2b3"
  }, {
    "url": "stories/tre-citta/img/casa-hiroko.svg",
    "revision": "933d41ee252dc2cdc695186ebe1897fe"
  }, {
    "url": "stories/tre-citta/img/carillon-playing.svg",
    "revision": "3a42fcd487175bba45ff9c06015f4bab"
  }, {
    "url": "stories/tre-citta/img/carillon-open.svg",
    "revision": "0f86c4ac24fc2ffcb32e8c0ace1b3c7d"
  }, {
    "url": "stories/tre-citta/img/carillon-jammed.svg",
    "revision": "dae0ab5776dca8962f5204db68703e65"
  }, {
    "url": "stories/tre-citta/img/carillon-closed.svg",
    "revision": "079917c5c0f24a28955f59722b1bd2bc"
  }, {
    "url": "stories/tre-citta/img/brandenburger.svg",
    "revision": "d916150311160616b9f9ccd47fcb3c1f"
  }, {
    "url": "stories/tre-citta/img/bastione.svg",
    "revision": "7af6a688b0342696cf2c443370b11bf4"
  }, {
    "url": "stories/tre-citta/img/asakusa.svg",
    "revision": "4e478e7385c04c38c314b014b8a5a63d"
  }, {
    "url": "stories/tre-citta/img/alexanderplatz.svg",
    "revision": "4c972469f38e250dc31550ab93d644c8"
  }, {
    "url": "stories/cagliari-1889/story.json",
    "revision": "64678fa7e10ce21856fe8cb0790f23cc"
  }, {
    "url": "stories/cagliari-1889/img/villanova.png",
    "revision": "c075954ceea6757cccced477d39d3f45"
  }, {
    "url": "stories/cagliari-1889/img/torre.png",
    "revision": "86920b04f0c32cc6e615f5f68e589fca"
  }, {
    "url": "stories/cagliari-1889/img/testamento87.png",
    "revision": "7fd142ef661cac1e73110759ebba0d8a"
  }, {
    "url": "stories/cagliari-1889/img/tessera.png",
    "revision": "3a26af6527ed9118343dda4350457b45"
  }, {
    "url": "stories/cagliari-1889/img/taccuino-2.png",
    "revision": "a814af5e6607df5564d754ca5d0e4086"
  }, {
    "url": "stories/cagliari-1889/img/taccuino-1.png",
    "revision": "83fb95cebc6495dfa29efa7ee98995ee"
  }, {
    "url": "stories/cagliari-1889/img/taccuino-0.png",
    "revision": "3278316e9ab53d774e01b5d4bd5031ff"
  }, {
    "url": "stories/cagliari-1889/img/studio.png",
    "revision": "55c30de238ffee4eebdef54ebc2b618f"
  }, {
    "url": "stories/cagliari-1889/img/stazione.png",
    "revision": "308a25326ebb4aaf06735ce9540e11b8"
  }, {
    "url": "stories/cagliari-1889/img/stanza-1.png",
    "revision": "5700a529942e0beff0759fd05c359d5c"
  }, {
    "url": "stories/cagliari-1889/img/stanza-0.png",
    "revision": "8ff51aa93520c61c20833e4e7a92f3ec"
  }, {
    "url": "stories/cagliari-1889/img/stampa-1.png",
    "revision": "576e4a284bf23bc37d40c7de4d5eb61d"
  }, {
    "url": "stories/cagliari-1889/img/stampa-0.png",
    "revision": "474860400612eb5a00ccd550669fc7a3"
  }, {
    "url": "stories/cagliari-1889/img/sigaro.png",
    "revision": "63a6a48a4944fc1060e504a2764515ce"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-vittorio.png",
    "revision": "9181d8db7460567d4aaee65f37028724"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-vinelli.png",
    "revision": "4a9560a0d0b3ac46c8a2c370a2342b5d"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-vecchia.png",
    "revision": "e7d3170967d2a26089c16fdc7f70096f"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-usai.png",
    "revision": "30cdf08b63b74924667b8465094b146a"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-teresa.png",
    "revision": "2b8f36e7d87a28d908080ab40103feac"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-suora.png",
    "revision": "cd45584ec50e457305e9e7504f3ed90e"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-scrivano.png",
    "revision": "c99241608389a482732e10052b63a485"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-picciocu.png",
    "revision": "18fc9cc8903933fa2630dc6cd9ec9f30"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-peppino.png",
    "revision": "40ec37c5922119d77057b215fd47e47c"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-oste.png",
    "revision": "0bf08d8282ef2bdbdbf0213b3c0702a8"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-mallena.png",
    "revision": "eecf5053df13aa4b6bf5fc4bc71f9cec"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-lustrascarpe.png",
    "revision": "566ebaa1b47d21ed2e2576afca94e183"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-ledda.png",
    "revision": "fac3656b9cb28bb8b86480ee7ec3768e"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-guardia.png",
    "revision": "a7f308165e15b123d5d0faa95967d115"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-gavino-1.png",
    "revision": "9a12ad6f41e45b23a9528ceb1f3cc8c5"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-gavino-0.png",
    "revision": "75895576747e0512ddd139fb8890245f"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-facchino.png",
    "revision": "183ca767975b940eec762647ad0ade0f"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-doganiere.png",
    "revision": "f9063ddc0aa1a4dff19deeccef786a43"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-custode.png",
    "revision": "cc1f772be733fd783123183572c1b1f8"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-confratelli.png",
    "revision": "4241a661fb086867962830869512eb01"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-cadoni.png",
    "revision": "06f627bc6894336b992ac05e1e29cf96"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-brigadiere.png",
    "revision": "bf224d7d97c41ca2d4ad91de4eafed7e"
  }, {
    "url": "stories/cagliari-1889/img/ritratto-bachis.png",
    "revision": "bcd69221b4cfffb9a6b6cf3acb2153a9"
  }, {
    "url": "stories/cagliari-1889/img/ricevuta.png",
    "revision": "38aa2c40f50896df331531acf3ad5c6c"
  }, {
    "url": "stories/cagliari-1889/img/redazione.png",
    "revision": "f989025dfb2f6d77a395ebd2c1d3bea8"
  }, {
    "url": "stories/cagliari-1889/img/polizza.png",
    "revision": "cd5832621081cebfc71dfe3a2cb4537b"
  }, {
    "url": "stories/cagliari-1889/img/piazza.png",
    "revision": "fdd146a82adaca7dd31a420ce69927e0"
  }, {
    "url": "stories/cagliari-1889/img/ospedale.png",
    "revision": "0c0ec983b16385674da1c393543d7bf0"
  }, {
    "url": "stories/cagliari-1889/img/notaio.png",
    "revision": "29a9843dc673c30f6cecfa9fadb5dd0f"
  }, {
    "url": "stories/cagliari-1889/img/molo.png",
    "revision": "e7408a2dacb27abc05b1694b8cbb78de"
  }, {
    "url": "stories/cagliari-1889/img/mercato.png",
    "revision": "db0b34519a33489a1d679ece57bb6657"
  }, {
    "url": "stories/cagliari-1889/img/mattatoio.png",
    "revision": "d26a66e868e87bba3217a79a96b32d75"
  }, {
    "url": "stories/cagliari-1889/img/magazzino-1.png",
    "revision": "b26b0bd4d8e34f5ebb38174d2afaecd0"
  }, {
    "url": "stories/cagliari-1889/img/magazzino-0.png",
    "revision": "54e67a3764b755b3e5cc973ba8d85481"
  }, {
    "url": "stories/cagliari-1889/img/locanda.png",
    "revision": "808dab882ccade7e5b34a95f0e34c194"
  }, {
    "url": "stories/cagliari-1889/img/lettera.png",
    "revision": "5a4ac227e3cbf14b95263869b25669b0"
  }, {
    "url": "stories/cagliari-1889/img/lente.png",
    "revision": "1a30aae1f2efab79235f87553110fc94"
  }, {
    "url": "stories/cagliari-1889/img/lastra.png",
    "revision": "a569e995696ada1b773411be93e13d0d"
  }, {
    "url": "stories/cagliari-1889/img/inventario.png",
    "revision": "25ff0d6ef073a175613bda7b2ff45228"
  }, {
    "url": "stories/cagliari-1889/img/giornale.png",
    "revision": "099ba204136908289a7e9fe1b84e9a63"
  }, {
    "url": "stories/cagliari-1889/img/frammento.png",
    "revision": "64309a341fa124672b9878b0e4fcf3f7"
  }, {
    "url": "stories/cagliari-1889/img/dogana.png",
    "revision": "66a3e7888779d65d05b6bad4bf41d424"
  }, {
    "url": "stories/cagliari-1889/img/corsia.png",
    "revision": "cc658d9a3c727f1722f8b493dcde197b"
  }, {
    "url": "stories/cagliari-1889/img/chiave.png",
    "revision": "943d2f7a3809ab25187f69ae82e8bf5e"
  }, {
    "url": "stories/cagliari-1889/img/cambiale.png",
    "revision": "11dea9e3c43f6a20e4399c15f72339d9"
  }, {
    "url": "stories/cagliari-1889/img/buoncammino.png",
    "revision": "6fbb211c8fbf318a23199827018e16e5"
  }, {
    "url": "stories/cagliari-1889/img/borsellino.png",
    "revision": "f1b0b6c6d943f6292b63662032e3b147"
  }, {
    "url": "stories/cagliari-1889/img/biglietto.png",
    "revision": "acc4413c4919b228c5165ef288f897ae"
  }, {
    "url": "stories/cagliari-1889/img/attestazione.png",
    "revision": "55067f22406f8779ea6278059c59fcea"
  }, {
    "url": "assets/workbox-window.prod.es5-BqEJf4Xk.js",
    "revision": null
  }, {
    "url": "assets/web-NSK8Yy90.js",
    "revision": null
  }, {
    "url": "assets/index-DaiUEEnN.js",
    "revision": null
  }, {
    "url": "assets/index-C83RCDkN.css",
    "revision": null
  }, {
    "url": "icon.svg",
    "revision": "05ff98e706e586c24aedd8ce0ac989fe"
  }, {
    "url": "manifest.webmanifest",
    "revision": "c831acb69fa843be6100ab0abab0fe85"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
