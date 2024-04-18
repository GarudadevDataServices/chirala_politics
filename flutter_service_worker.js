'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "869d4547ceb53d0533b3a3180b5b63bb",
"assets/AssetManifest.bin.json": "b98364b4cff8ddc4bfa2654a71344dc0",
"assets/AssetManifest.json": "2e97f563939de827f1fb915bb56a2a21",
"assets/assets/imgs/cm.png": "37ff33716bfb8c405bd09e21a52974a3",
"assets/assets/imgs/main_leader.png": "61bb95b3079f8a258e19bd8d405f5cfc",
"assets/assets/imgs/mla.png": "0d15e221048718e6d36dbc2e50770ca8",
"assets/assets/name_clouds/1.png": "fd6fe38c9f25f5b92a9e842f867baa20",
"assets/assets/name_clouds/10.png": "cadca06ae18ecb7f4a01ed8b91ac4739",
"assets/assets/name_clouds/100.png": "eae5896f8cc01bfe4aa22eafb6d30116",
"assets/assets/name_clouds/101.png": "6e4bded5ae6e02af73d27dc86ffa0c0f",
"assets/assets/name_clouds/102.png": "497f6e1b0b02001c4099416772bf8f08",
"assets/assets/name_clouds/103.png": "f62773a1f8c1c51d525de5f8986cbac1",
"assets/assets/name_clouds/104.png": "dd192eb8e102f132347261412c1e653b",
"assets/assets/name_clouds/105.png": "25307832bce7882700c510335c104b64",
"assets/assets/name_clouds/106.png": "cbf36de0bb17ba6c16f03bc9f23927f2",
"assets/assets/name_clouds/107.png": "9d88da1b561ae49e0f3d27a384425856",
"assets/assets/name_clouds/108.png": "b8bf2260b303d3f223700e6432305d50",
"assets/assets/name_clouds/109.png": "e5b6bc6de2afe173671c76f314a6cb49",
"assets/assets/name_clouds/11.png": "968c4c0f0864d1f419cf6573064d205e",
"assets/assets/name_clouds/110.png": "0d4daa1bf435f83654f497b46e9e62fb",
"assets/assets/name_clouds/111.png": "b371d55326f982727a0dd785f72cfd52",
"assets/assets/name_clouds/112.png": "1e5e72612e75c0274c0e5b63dc8b6be9",
"assets/assets/name_clouds/113.png": "212150d3091d04f33fe6a51fe24ab13c",
"assets/assets/name_clouds/114.png": "34c016d46a611f85cf81a4a0c482a96a",
"assets/assets/name_clouds/115.png": "7e454508514120aa365b92a3fd0f205b",
"assets/assets/name_clouds/116.png": "d1819d54bba6588229a370f272879aff",
"assets/assets/name_clouds/117.png": "401f18e6ffcafa518adcb12e384eb88e",
"assets/assets/name_clouds/118.png": "9b8aa2bfebb1afe881a06777131364cd",
"assets/assets/name_clouds/119.png": "473e7f1fe56583c4ec16aedbc3ec5db1",
"assets/assets/name_clouds/12.png": "d76360a0ab97ccf1151e5c4cae286a4b",
"assets/assets/name_clouds/120.png": "26a5a981024b519df897a0f89db1e9e4",
"assets/assets/name_clouds/121.png": "c1825b6464b3a479ec1bd5cd9ce4bfe3",
"assets/assets/name_clouds/122.png": "73513a720883c9197c34d34e1535286f",
"assets/assets/name_clouds/123.png": "2e704fe2139f1a0422cb36c43fa60a60",
"assets/assets/name_clouds/124.png": "2c607a18bd3a4a77efdeb2a5512c0673",
"assets/assets/name_clouds/125.png": "c66ba63d04b6ac53021eaca2ab4ec629",
"assets/assets/name_clouds/126.png": "0208f9171ac42caadd9ac3dfc2ccaa20",
"assets/assets/name_clouds/127.png": "84a403c02f5063174ec98dc28ec7449d",
"assets/assets/name_clouds/128.png": "660e92136ad7ec928e6e458d2b1dcc38",
"assets/assets/name_clouds/129.png": "8afa5c0ec5837ce253a0e927e8784cee",
"assets/assets/name_clouds/13.png": "24c6c6045cc9fbe9be29a73a73a986ed",
"assets/assets/name_clouds/130.png": "8740980a791d4f33c1a31e0d066a8c57",
"assets/assets/name_clouds/131.png": "f95f066167dce03d57a22d5aeea4d62e",
"assets/assets/name_clouds/132.png": "cee430de87870582febb34f08f34fa08",
"assets/assets/name_clouds/133.png": "725162b99f24f39bbc443a1d1c140b47",
"assets/assets/name_clouds/134.png": "6093c650181dd7acf5b55dc9cfb48643",
"assets/assets/name_clouds/135.png": "5e9da89977db01904f05fd7df642c245",
"assets/assets/name_clouds/136.png": "01e829a2bb2ad7ced7096bb960cdeab5",
"assets/assets/name_clouds/137.png": "87c1d8c0df32778d9f23c11b88cfd551",
"assets/assets/name_clouds/138.png": "10d9bfc048b8a120d9afb2ef3d497115",
"assets/assets/name_clouds/139.png": "9470bac021846ba364697905d3613a3c",
"assets/assets/name_clouds/14.png": "74915f2e9f1168e41c778157d5384558",
"assets/assets/name_clouds/140.png": "4396195bd6fe74c03a46a0c54809f474",
"assets/assets/name_clouds/141.png": "bbd88be27edcb13e969d8e63b681281d",
"assets/assets/name_clouds/142.png": "0b43d34a24a7504068eb09de8d3db73a",
"assets/assets/name_clouds/143.png": "46c1631b17c2b9ec46098b9d8fd148e0",
"assets/assets/name_clouds/144.png": "0b7bcc54dd73069d770e71bfd25050a6",
"assets/assets/name_clouds/145.png": "af3d2da8466ddc3a01eb9b11d62c519b",
"assets/assets/name_clouds/146.png": "4027aa10a4824847e45ef55a022d0cb6",
"assets/assets/name_clouds/147.png": "6bf8d6048afdd622b54f6921a8d8245d",
"assets/assets/name_clouds/148.png": "aee959ba7ae00079aaa8b0166b4a7592",
"assets/assets/name_clouds/149.png": "9a7212798cda6ddb18a17cbafb859446",
"assets/assets/name_clouds/15.png": "5a1ebfd7a521c78e12aafe587e0240b2",
"assets/assets/name_clouds/150.png": "f3fcb5f838fc0e688a28e83f67ff6dd8",
"assets/assets/name_clouds/151.png": "e917255b78f9c0e2979572e9739612a6",
"assets/assets/name_clouds/152.png": "736624428b1ccfa7ffdd8f1fc515811d",
"assets/assets/name_clouds/153.png": "50d26adc94bd4947e45ae69f60a7149c",
"assets/assets/name_clouds/154.png": "35237c1f431faa32bfc6cd6e5d48d3d0",
"assets/assets/name_clouds/155.png": "82e5b81f3acebe067c70b653df08e1dd",
"assets/assets/name_clouds/156.png": "d80d9c740871e047b4f372024fdcd551",
"assets/assets/name_clouds/157.png": "ba7c738a2da5e4059cc714c38c90fcf9",
"assets/assets/name_clouds/158.png": "e31fe638002f5e58c5cdeb3e5e26f219",
"assets/assets/name_clouds/159.png": "344d68305b632c528ddec07303ad43cc",
"assets/assets/name_clouds/16.png": "3f9d34b1ff53221268e84914f9a224d8",
"assets/assets/name_clouds/160.png": "3d08950d700c4c1ee65f81db1cf3d1da",
"assets/assets/name_clouds/161.png": "119e43912f5a03aacf20ad6e8981a065",
"assets/assets/name_clouds/162.png": "f83a2bdea9ca6c5f12970b19fb2b27f4",
"assets/assets/name_clouds/163.png": "863f0f5a4a0e0a4a22f72efe3a436ccd",
"assets/assets/name_clouds/164.png": "2a172c80675da1ce4f701da7ec06aedc",
"assets/assets/name_clouds/165.png": "31855512b90497013cdf65c0b2d32242",
"assets/assets/name_clouds/166.png": "80d9ddb73962273d19b5c46dfc9ac80d",
"assets/assets/name_clouds/167.png": "624aecb4f94a5d274e0c287c7a9845d1",
"assets/assets/name_clouds/168.png": "6ceb9bca747d9249ba61ba111dc4cd10",
"assets/assets/name_clouds/169.png": "c9f1eaefb399b4058af778b191ed7e48",
"assets/assets/name_clouds/17.png": "b878c833b68a80d0fba835240d64eeae",
"assets/assets/name_clouds/170.png": "5fd45630247e9914ad99a04a2b29bb50",
"assets/assets/name_clouds/171.png": "3016822e1a82aa9029795e63ebd31199",
"assets/assets/name_clouds/172.png": "8b880f785186570657d160b2dec650e8",
"assets/assets/name_clouds/173.png": "1a5f194740b29331df357a264a505ee9",
"assets/assets/name_clouds/174.png": "493ab1439d9d1ac6d7ada316d1c00c72",
"assets/assets/name_clouds/175.png": "683fbf4c8c75caa9d04c684b483cda35",
"assets/assets/name_clouds/176.png": "319c61bcd5b5642e9badd219f8ce1bcb",
"assets/assets/name_clouds/177.png": "e5a1e8cb50422b6df1b8fd56ec2e3941",
"assets/assets/name_clouds/178.png": "daeed27bd8209c89533f6cf2c2e0a9e6",
"assets/assets/name_clouds/179.png": "658e5e50b8efb28c8698f006bc202ce9",
"assets/assets/name_clouds/18.png": "e675c25d9110b973a2c9db8b0af6be55",
"assets/assets/name_clouds/180.png": "aa6ef18fe2f5946d57b86d5699f2b37f",
"assets/assets/name_clouds/181.png": "61c682b42903e8177f6fbb5f2aad5552",
"assets/assets/name_clouds/182.png": "0258f9d043eb4de11afe94e7309795f5",
"assets/assets/name_clouds/183.png": "d4460521bc4a8df842a2830f0a3dcb03",
"assets/assets/name_clouds/184.png": "bc2c58a4b8690d6c93aa539d58dc3f42",
"assets/assets/name_clouds/185.png": "3c3a762998d3daa2354d7fa43b45b626",
"assets/assets/name_clouds/186.png": "ef5f22b8d4a707679547d73da121f04a",
"assets/assets/name_clouds/187.png": "943c5ed17002808075b6cfe438cf2d37",
"assets/assets/name_clouds/188.png": "233d904ca6425e36cc76bf0517ee0c3a",
"assets/assets/name_clouds/189.png": "4afd0d52242878a1c0cba4feda4c6506",
"assets/assets/name_clouds/19.png": "ef3ea3caa17f84905b36f7a494ff7c0a",
"assets/assets/name_clouds/190.png": "edfddbf74443d12c51dad601e20859ee",
"assets/assets/name_clouds/191.png": "2e1191a3dcd217dbc300a76a5cbd893c",
"assets/assets/name_clouds/192.png": "93d2160c9c3bcce54b15bb3286c4c812",
"assets/assets/name_clouds/193.png": "810644772f9761d9c3b8da7e95e8ba6b",
"assets/assets/name_clouds/194.png": "ffb477b3c76973c8788e7c26dc4a265b",
"assets/assets/name_clouds/195.png": "f09afa2b7858d056ec35c91172078a14",
"assets/assets/name_clouds/196.png": "f6e1d8005873395fd2197b4a67d6a4fb",
"assets/assets/name_clouds/197.png": "3fcd983bd1c78ebb175c664c225f2042",
"assets/assets/name_clouds/198.png": "e4f88845f0691876c94249de571554dc",
"assets/assets/name_clouds/199.png": "1df6b4c2441b1fbdab5968db8c0c3e75",
"assets/assets/name_clouds/2.png": "6838c150766a3b38ce623f30bd4d7a37",
"assets/assets/name_clouds/20.png": "be02acbb6caf968e65b8d91395cbc0a1",
"assets/assets/name_clouds/200.png": "822efdaee6ea633af9281e82f4662f40",
"assets/assets/name_clouds/201.png": "2aa2c13d129c5ee0dd69bf33aef5861c",
"assets/assets/name_clouds/202.png": "8eb06f7837a2d7143ee561ad23d26cf2",
"assets/assets/name_clouds/203.png": "d74022c671aec4701d2e64fd71e47bfb",
"assets/assets/name_clouds/204.png": "f4d315b16f8be863fc9d7c24bc41958d",
"assets/assets/name_clouds/205.png": "0d99babcd45d0fa7347619ca37e89e08",
"assets/assets/name_clouds/206.png": "e006ace3215ab051be98b1327297abf9",
"assets/assets/name_clouds/207.png": "1a6e9afe41ba43e427e23b9ca5fdc7b0",
"assets/assets/name_clouds/208.png": "799f0351bea79641204775179673f84c",
"assets/assets/name_clouds/209.png": "c934355d7c16eeee52318ed245fbf155",
"assets/assets/name_clouds/21.png": "e5b891368f14c0db358914bdb50eb879",
"assets/assets/name_clouds/210.png": "9a11e57f7b78057d030987a6f0c0c424",
"assets/assets/name_clouds/211.png": "f443f174ed583f945c0fa8d169546a60",
"assets/assets/name_clouds/212.png": "c6b08cdeb3539dd4a5c783a53d619583",
"assets/assets/name_clouds/213.png": "2e9b2650f3fca60e88f37ec870c65077",
"assets/assets/name_clouds/214.png": "f9c7a4b6a70f34fd086c2bd9cc99a744",
"assets/assets/name_clouds/215.png": "b6c3940a71259127a15740950d0e8cfd",
"assets/assets/name_clouds/216.png": "a16baa089559be25241cc9b7a063d972",
"assets/assets/name_clouds/217.png": "d2d8cc748aa20a237073fbd32264af61",
"assets/assets/name_clouds/218.png": "237799baf176f48cbef0c4d75a04e123",
"assets/assets/name_clouds/22.png": "219720ab86d50f2a295843ecee782d60",
"assets/assets/name_clouds/23.png": "4666d5a14bf202623a031d58dfe98ce4",
"assets/assets/name_clouds/24.png": "01232122c18ee772ca9461e7635974b8",
"assets/assets/name_clouds/25.png": "40ef48db4356ae602cf86b7b883e7e4e",
"assets/assets/name_clouds/26.png": "330eacb8c604db2fd0c821487d53f03d",
"assets/assets/name_clouds/27.png": "6708e4a7fd0b77da2ae367d6e73dbdea",
"assets/assets/name_clouds/28.png": "dad84e172b2df4d79237022648191ee7",
"assets/assets/name_clouds/29.png": "ed6d5d18532e47f41fbeb6ad93f2bf23",
"assets/assets/name_clouds/3.png": "286ab40327ad0bd5ebcf9edad0991752",
"assets/assets/name_clouds/30.png": "4ba66b5948670f34e203e17022f0e986",
"assets/assets/name_clouds/31.png": "1a5b3c04862dae1ff983dbd353799171",
"assets/assets/name_clouds/32.png": "6ed4425bb92c54b7c2435dcf04c8b8fb",
"assets/assets/name_clouds/33.png": "20696bd3c68f3301455f877216d5c138",
"assets/assets/name_clouds/34.png": "a396d4dec525c5d7333c7064e6ac8d36",
"assets/assets/name_clouds/35.png": "3bf3c0089a3917e85fc971815665f96e",
"assets/assets/name_clouds/36.png": "83c117e6782bdbf3d06281ac59790e9d",
"assets/assets/name_clouds/37.png": "8b762d38ed90943226115dadbbfe5300",
"assets/assets/name_clouds/38.png": "e62545c1ec26f6c79ee1d2db5ba467ea",
"assets/assets/name_clouds/39.png": "b7689f419082b5001e6b6160e6fba63e",
"assets/assets/name_clouds/4.png": "c0dcdd9bab4b84d8d86980dc5b97104f",
"assets/assets/name_clouds/40.png": "1bd0e79f74a353685b0df1a65059674c",
"assets/assets/name_clouds/41.png": "35315554287fd3f9eebe0bc07c5ba752",
"assets/assets/name_clouds/42.png": "c74465f9e2b89319470af535eb47ef60",
"assets/assets/name_clouds/43.png": "fbae7415d2a848dccc96025cd58d5ae4",
"assets/assets/name_clouds/44.png": "b5b680d4bb88effdc4db340dffaa26b0",
"assets/assets/name_clouds/45.png": "3fff37433f4736e1fccbd4460a889626",
"assets/assets/name_clouds/46.png": "454e9ab9fb9779f65c4d20d224ff45bd",
"assets/assets/name_clouds/47.png": "cd76c9e42722191b2f7b4e6563e7227b",
"assets/assets/name_clouds/48.png": "a5ab4403ceb1d93f4b776f7c560984a6",
"assets/assets/name_clouds/49.png": "d6237bb4e6c5e8008dc95d1087dab3ff",
"assets/assets/name_clouds/5.png": "2aa6cf2dd669067fe39e8762f86ac3eb",
"assets/assets/name_clouds/50.png": "baa5eea569db065387cf05e7002f042d",
"assets/assets/name_clouds/51.png": "36188054cdfa2656dac4afc8531af34e",
"assets/assets/name_clouds/52.png": "71fe6afc5ac3b5fba197f9e1bbf34f0e",
"assets/assets/name_clouds/53.png": "f768718d60d556b6039b80a159692d05",
"assets/assets/name_clouds/54.png": "6034d607ac079541d1a44a9b88f1f9f0",
"assets/assets/name_clouds/55.png": "d0b995d7ac51aed2d40292c051695f58",
"assets/assets/name_clouds/56.png": "9c9fd56e8d375bf784ec7ba3eaebd593",
"assets/assets/name_clouds/57.png": "ed102c5a2854b4c35278ff29e7dc8cc8",
"assets/assets/name_clouds/58.png": "59413a7e9a96702d4378d02cdc427f3f",
"assets/assets/name_clouds/59.png": "6926770119d2b0b882ea1f4bd43dc7de",
"assets/assets/name_clouds/6.png": "aab36f0df1025db68eb2f314d8fd2ffa",
"assets/assets/name_clouds/60.png": "42268f394f698f0efa0835012dc213c6",
"assets/assets/name_clouds/61.png": "0356b11a181d94b682a08a66b12993a3",
"assets/assets/name_clouds/62.png": "35eef58aade0f8679ddf0759e7a10886",
"assets/assets/name_clouds/63.png": "e03e0ad2376a2c35bbc5ce1a22e29eed",
"assets/assets/name_clouds/64.png": "95d72056a2a59a116781cc33867e9060",
"assets/assets/name_clouds/65.png": "692ee0e2c29a21e9625b4c6f4c6b31ae",
"assets/assets/name_clouds/66.png": "d2c7037ac199ccc0e2688bf3ce600e21",
"assets/assets/name_clouds/67.png": "f4cc7dc11ce470555873ba0a295273bb",
"assets/assets/name_clouds/68.png": "65ff8021c6d92ee4a1564d8464425f1d",
"assets/assets/name_clouds/69.png": "56325a4ecd4497828c95e8f032cb42ea",
"assets/assets/name_clouds/7.png": "c1c36c2d7e06e4e4fb33099b11979c4f",
"assets/assets/name_clouds/70.png": "6a7e964c7474378c4959711f30f1616b",
"assets/assets/name_clouds/71.png": "6c170ab7e59763d4e0ac8884050eb5c0",
"assets/assets/name_clouds/72.png": "f978a8e4dac1fc6cb0622b5923788a36",
"assets/assets/name_clouds/73.png": "7359e81085d4edd8a525c38c70f00fb2",
"assets/assets/name_clouds/74.png": "447ee202c8b3de466caa6bb61272fc49",
"assets/assets/name_clouds/75.png": "bfca88cb93e1a6815a39e91ec006623b",
"assets/assets/name_clouds/76.png": "27b6b8da734a7cda35c6a69c6cd419df",
"assets/assets/name_clouds/77.png": "1e8852284a50329a02121787e25f3574",
"assets/assets/name_clouds/78.png": "c82c6c9633316da569603e4e7bb35892",
"assets/assets/name_clouds/79.png": "b6c001130f4851a7c513841c88be0bbf",
"assets/assets/name_clouds/8.png": "f248d083418b106015a978307eebc042",
"assets/assets/name_clouds/80.png": "4b1c9eb88a78bef60ba7f4a729e76980",
"assets/assets/name_clouds/81.png": "b7cdb8e2e5528db95b69ddb03ca3d609",
"assets/assets/name_clouds/82.png": "d0fd0cb60e6de09563d8ba1db0cdbe3f",
"assets/assets/name_clouds/83.png": "db733f4616216fff7c90dd472720328c",
"assets/assets/name_clouds/84.png": "d8f7b4a874b3c76c3e8dfc5d06887848",
"assets/assets/name_clouds/85.png": "b5ab6b3dac2871d65b09feb7e03209c8",
"assets/assets/name_clouds/86.png": "0d12466d1cd164a9ce82d52cb167f9ae",
"assets/assets/name_clouds/87.png": "628af7a28a1b94053b985ce8556dd0b2",
"assets/assets/name_clouds/88.png": "b55507214b4609e96921844559c1a130",
"assets/assets/name_clouds/89.png": "6aa67ff163e149ccecbfb279f3854c6f",
"assets/assets/name_clouds/9.png": "5c26aa319f3190835ab846735eac7c90",
"assets/assets/name_clouds/90.png": "cb3f95cbeb504315bfd02b40dad206c1",
"assets/assets/name_clouds/91.png": "d62a7a9a03c8e2e5962e12b17e8dab3f",
"assets/assets/name_clouds/92.png": "9cb60da7113a2bb4b891d30f1f064f05",
"assets/assets/name_clouds/93.png": "8582ac2fd3781861257a9cddec2227e8",
"assets/assets/name_clouds/94.png": "b767d714a97bfdeea82aadc89d0ce487",
"assets/assets/name_clouds/95.png": "68eedafc28ad663a9253f1c042b724b7",
"assets/assets/name_clouds/96.png": "0f32c75160f7e9403b2a4b128761382e",
"assets/assets/name_clouds/97.png": "eb5667b0bd0c254c935c05a5f440ad82",
"assets/assets/name_clouds/98.png": "2210dcc993c1e23349ad53069a938912",
"assets/assets/name_clouds/99.png": "6c7df3ba9ad07d76f1c49bfe187d03fb",
"assets/FontManifest.json": "74a3cf565c463b0908484103a9ce5bf4",
"assets/fonts/MaterialIcons-Regular.otf": "b90fafeeafa600c6220c5f1d994c0250",
"assets/NOTICES": "4a3877d223c791e2575b3ad06b5789c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d361b40c070bb27fce814ff1ff82fffb",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6010fa418ac4fc24cf060138826027e7",
"/": "6010fa418ac4fc24cf060138826027e7",
"main.dart.js": "76900c69a9d0c6a852a3b2dab49cb91c",
"manifest.json": "3918fdb458d7c1dd8d5d80b166ce1b81",
"version.json": "057bdcf994858f9613adbaf299ce65c3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
