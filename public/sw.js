if (!self.define) {
    let e,
        c = {}
    const s = (s, i) => (
        (s = new URL(s + '.js', i).href),
        c[s] ||
            new Promise(c => {
                if ('document' in self) {
                    const e = document.createElement('script')
                    ;(e.src = s), (e.onload = c), document.head.appendChild(e)
                } else (e = s), importScripts(s), c()
            }).then(() => {
                let e = c[s]
                if (!e)
                    throw new Error(`Module ${s} didn’t register its module`)
                return e
            })
    )
    self.define = (i, a) => {
        const p =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href
        if (c[p]) return
        let r = {}
        const o = e => s(e, p),
            b = { module: { uri: p }, exports: r, require: o }
        c[p] = Promise.all(i.map(e => b[e] || o(e))).then(e => (a(...e), r))
    }
}
define(['./workbox-0c61ecd6'], function (e) {
    'use strict'
    self.addEventListener('message', e => {
        e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting()
    }),
        e.precacheAndRoute(
            [
                {
                    url: 'jsconfig.json',
                    revision: '6b800035ebf99620ebb94704e61e24ea',
                },
                {
                    url: 'LICENSE.md',
                    revision: '22b655dbcecf588cfc97ed44c9ac0729',
                },
                {
                    url: 'package-lock.json',
                    revision: '08db44e90b3a662b90fa3223df0e32c8',
                },
                {
                    url: 'package.json',
                    revision: '96baf9dcb1cacbb04d591f63746a9f55',
                },
                {
                    url: 'postcss.config.js',
                    revision: '854b38759e7a8b4b82306ae2d9a3a833',
                },
                {
                    url: 'public/favicon.ico',
                    revision: '21b739d43fcb9bbb83d8541fe4fe88fa',
                },
                {
                    url: 'public/icons/apple-icon-180.png',
                    revision: '19757628abd42bc33f0fcc9dcfcc770a',
                },
                {
                    url: 'public/icons/apple-splash-1125-2436.jpg',
                    revision: 'e913769b792a26d9e2db237c5753aa77',
                },
                {
                    url: 'public/icons/apple-splash-1136-640.jpg',
                    revision: '397672bb1754f2aa55ee6e5e273dd6a1',
                },
                {
                    url: 'public/icons/apple-splash-1170-2532.jpg',
                    revision: '91751df2e0f66ded86de284d29be9276',
                },
                {
                    url: 'public/icons/apple-splash-1179-2556.jpg',
                    revision: '1d06b2f4281f6a1889cc978fb03305c4',
                },
                {
                    url: 'public/icons/apple-splash-1242-2208.jpg',
                    revision: '51049f12f646b412361be3197e641e5b',
                },
                {
                    url: 'public/icons/apple-splash-1242-2688.jpg',
                    revision: 'fb640e99a5a03e59373fca2533ce403c',
                },
                {
                    url: 'public/icons/apple-splash-1284-2778.jpg',
                    revision: '4450156f6988449dba216396933e107a',
                },
                {
                    url: 'public/icons/apple-splash-1290-2796.jpg',
                    revision: '9912f48b9074ba60edbe45214a493927',
                },
                {
                    url: 'public/icons/apple-splash-1334-750.jpg',
                    revision: '2f1d4cc3890c89910ed3b1b880673970',
                },
                {
                    url: 'public/icons/apple-splash-1536-2048.jpg',
                    revision: '277301256b098487c005aa6524c346ac',
                },
                {
                    url: 'public/icons/apple-splash-1620-2160.jpg',
                    revision: '169c55cb895377ee0c35fd5f2103caa4',
                },
                {
                    url: 'public/icons/apple-splash-1668-2224.jpg',
                    revision: 'af9cee63d4f55bfdf96d585c901850e5',
                },
                {
                    url: 'public/icons/apple-splash-1668-2388.jpg',
                    revision: '6e76de5c86e49997eb0d1560abe9da45',
                },
                {
                    url: 'public/icons/apple-splash-1792-828.jpg',
                    revision: 'e82c6226ed1d6c5c230520bcd6803402',
                },
                {
                    url: 'public/icons/apple-splash-2048-1536.jpg',
                    revision: '2e7f8590c28dd83d30b0cb28b6b28849',
                },
                {
                    url: 'public/icons/apple-splash-2048-2732.jpg',
                    revision: '55ca65ccc38e959f319844499b0148d4',
                },
                {
                    url: 'public/icons/apple-splash-2160-1620.jpg',
                    revision: 'cf58fcdb1c420ca69e588d0a0b6ebffb',
                },
                {
                    url: 'public/icons/apple-splash-2208-1242.jpg',
                    revision: '83cfdbd8cf8463b31b35c210d412f675',
                },
                {
                    url: 'public/icons/apple-splash-2224-1668.jpg',
                    revision: 'b301b85094e6c3e0e653f98dd30f97f9',
                },
                {
                    url: 'public/icons/apple-splash-2388-1668.jpg',
                    revision: '9736f777f91344646eb92f7bf9dcdac2',
                },
                {
                    url: 'public/icons/apple-splash-2436-1125.jpg',
                    revision: 'ff98abbff01d67cdf183820152d007d2',
                },
                {
                    url: 'public/icons/apple-splash-2532-1170.jpg',
                    revision: 'd42c7d42380ce398f33ada38506d85c7',
                },
                {
                    url: 'public/icons/apple-splash-2556-1179.jpg',
                    revision: '1b558ebc6bdf73e0cfe7fddfa8f922b8',
                },
                {
                    url: 'public/icons/apple-splash-2688-1242.jpg',
                    revision: '1d66b179cbf5633a3d9ca3db758db03d',
                },
                {
                    url: 'public/icons/apple-splash-2732-2048.jpg',
                    revision: 'a5cf96f2cd7e58190dcbf7025bf05d27',
                },
                {
                    url: 'public/icons/apple-splash-2778-1284.jpg',
                    revision: 'a4f41d154a3084ce60d5a899ec1cd7d1',
                },
                {
                    url: 'public/icons/apple-splash-2796-1290.jpg',
                    revision: 'ff29b9c901942f7ce61d450491dee6f1',
                },
                {
                    url: 'public/icons/apple-splash-640-1136.jpg',
                    revision: 'ffe78c43d258156cc3808338c00e387f',
                },
                {
                    url: 'public/icons/apple-splash-750-1334.jpg',
                    revision: '4ccec8dfd2b583aab96834d0ee74efd0',
                },
                {
                    url: 'public/icons/apple-splash-828-1792.jpg',
                    revision: 'aac0da90c4f5cb79c0ffa919801ae2b7',
                },
                {
                    url: 'public/icons/manifest-icon-192.maskable.png',
                    revision: '6e7e8b58295a143af6994149deade6fd',
                },
                {
                    url: 'public/icons/manifest-icon-512.maskable.png',
                    revision: '88d0edeeb32559f15abc725e54f0821d',
                },
                {
                    url: 'public/logo.jpeg',
                    revision: '74e40be1c794e126247fc81f8b05c7aa',
                },
                {
                    url: 'public/manifest.json',
                    revision: '8ae71b72843b1d15ebd47b6b8991a955',
                },
                {
                    url: 'public/vercel.svg',
                    revision: '4b4f1876502eb6721764637fe5c41702',
                },
                {
                    url: 'README.md',
                    revision: 'd6b1163c39b68adcfb7deda1c3f4a36d',
                },
                {
                    url: 'RELEASE.md',
                    revision: 'ff9d8373a8d402ebba5edab6876cd9d6',
                },
                {
                    url: 'src/components/ApplicationLogo.js',
                    revision: '5ba230b51b41db25e10d1ff7fbb498da',
                },
                {
                    url: 'src/components/AuthCard.js',
                    revision: '18229a0f101d93039f000139cda58b76',
                },
                {
                    url: 'src/components/AuthSessionStatus.js',
                    revision: '19c1d851ea47f96ea492f06fe2ceb034',
                },
                {
                    url: 'src/components/Button.js',
                    revision: 'ec79fc7cb2ec78e1c65f0870132872d1',
                },
                {
                    url: 'src/components/Dropdown.js',
                    revision: '2c72fb6a10905533a549bf77cec8d950',
                },
                {
                    url: 'src/components/DropdownLink.js',
                    revision: 'e1969358f6bce8804270a17bd8386118',
                },
                {
                    url: 'src/components/Input.js',
                    revision: 'be98d12e4c90bc09290fce14a2e2c66b',
                },
                {
                    url: 'src/components/InputError.js',
                    revision: 'b2e7b9295af659ff8607add192fde17c',
                },
                {
                    url: 'src/components/Label.js',
                    revision: '44d7b22d7dd225cb3665c3fbdb6cdba1',
                },
                {
                    url: 'src/components/Layouts/AppLayout.js',
                    revision: '0729af9025eea1a6de7cc260f7cf2bec',
                },
                {
                    url: 'src/components/Layouts/GuestLayout.js',
                    revision: '71e7fb90f07e08c563cf316aac3b0bc8',
                },
                {
                    url: 'src/components/Layouts/Navigation.js',
                    revision: '7f9b89f47c3532883f514c5b46a4803d',
                },
                {
                    url: 'src/components/NavLink.js',
                    revision: '753d5a7b14826d0a9e6d9457637a2725',
                },
                {
                    url: 'src/components/ResponsiveNavLink.js',
                    revision: 'e3fa32ba182e4bbbeca29d5a8812921f',
                },
                {
                    url: 'src/hooks/auth.js',
                    revision: 'b7a5cf5685911936a16d5fc75ab9e361',
                },
                {
                    url: 'src/lib/axios.js',
                    revision: '3ca3cb92c5356486610a9ad9e7886194',
                },
                {
                    url: 'src/pages/_app.js',
                    revision: 'eb6c0fefe0583be45379a8ee42c58244',
                },
                {
                    url: 'src/pages/_document.js',
                    revision: '8051d64725924857fd3e4bf538ad742a',
                },
                {
                    url: 'src/pages/404.js',
                    revision: 'c2c953db91f3e684c0ec5fa501f5e4b9',
                },
                {
                    url: 'src/pages/dashboard.js',
                    revision: 'd261e1c39ab22b59852c015593a1945b',
                },
                {
                    url: 'src/pages/forgot-password.js',
                    revision: '1e58df918e7457164e3e6c15673a8d3a',
                },
                {
                    url: 'src/pages/index.js',
                    revision: 'fcef96e42dd753ecb9e505ec3528a5ef',
                },
                {
                    url: 'src/pages/login.js',
                    revision: 'b603e67932ab538c97bece90b7ee3970',
                },
                {
                    url: 'src/pages/password-reset/[token].js',
                    revision: '1f26c2c1de095db4c0dc7ae5bdc293f0',
                },
                {
                    url: 'src/pages/register.js',
                    revision: 'bfed62ef324c08bd93713e64bbaf2ac2',
                },
                {
                    url: 'src/pages/verify-email.js',
                    revision: '03a20c2b34737e7ecd7a7413e10d87e9',
                },
                {
                    url: 'tailwind.config.js',
                    revision: '60c2864a6dce74ffe787d7defccdea68',
                },
            ],
            { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
        )
})
//# sourceMappingURL=sw.js.map
