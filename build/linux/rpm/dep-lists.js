"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceGeneratedDepsByArch = exports.additionalDeps = void 0;
// Based on https://source.chromium.org/chromium/chromium/src/+/main:chrome/installer/linux/rpm/additional_deps
// Additional dependencies not in the rpm find-requires output.
exports.additionalDeps = [
    'ca-certificates',
    'libgtk-3.so.0()(64bit)',
    'libnss3.so(NSS_3.22)(64bit)',
    'libssl3.so(NSS_3.28)(64bit)',
    'rpmlib(FileDigests) <= 4.6.0-1',
    'libvulkan.so.1()(64bit)',
    'libcurl.so.4()(64bit)',
    'xdg-utils' // OS integration
];
exports.referenceGeneratedDepsByArch = {
    'x86_64': [
        'ca-certificates',
        'ld-linux-x86-64.so.2()(64bit)',
        'ld-linux-x86-64.so.2(GLIBC_2.2.5)(64bit)',
        'ld-linux-x86-64.so.2(GLIBC_2.3)(64bit)',
        'libX11.so.6()(64bit)',
        'libXcomposite.so.1()(64bit)',
        'libXdamage.so.1()(64bit)',
        'libXext.so.6()(64bit)',
        'libXfixes.so.3()(64bit)',
        'libXrandr.so.2()(64bit)',
        'libasound.so.2()(64bit)',
        'libasound.so.2(ALSA_0.9)(64bit)',
        'libasound.so.2(ALSA_0.9.0rc4)(64bit)',
        'libatk-1.0.so.0()(64bit)',
        'libatk-bridge-2.0.so.0()(64bit)',
        'libatspi.so.0()(64bit)',
        'libc.so.6()(64bit)',
        'libc.so.6(GLIBC_2.10)(64bit)',
        'libc.so.6(GLIBC_2.11)(64bit)',
        'libc.so.6(GLIBC_2.14)(64bit)',
        'libc.so.6(GLIBC_2.15)(64bit)',
        'libc.so.6(GLIBC_2.16)(64bit)',
        'libc.so.6(GLIBC_2.17)(64bit)',
        'libc.so.6(GLIBC_2.2.5)(64bit)',
        'libc.so.6(GLIBC_2.3)(64bit)',
        'libc.so.6(GLIBC_2.3.2)(64bit)',
        'libc.so.6(GLIBC_2.3.3)(64bit)',
        'libc.so.6(GLIBC_2.3.4)(64bit)',
        'libc.so.6(GLIBC_2.4)(64bit)',
        'libc.so.6(GLIBC_2.6)(64bit)',
        'libc.so.6(GLIBC_2.7)(64bit)',
        'libc.so.6(GLIBC_2.8)(64bit)',
        'libc.so.6(GLIBC_2.9)(64bit)',
        'libcairo.so.2()(64bit)',
        'libcurl.so.4()(64bit)',
        'libdbus-1.so.3()(64bit)',
        'libdl.so.2()(64bit)',
        'libdl.so.2(GLIBC_2.2.5)(64bit)',
        'libdrm.so.2()(64bit)',
        'libexpat.so.1()(64bit)',
        'libgbm.so.1()(64bit)',
        'libgcc_s.so.1()(64bit)',
        'libgcc_s.so.1(GCC_3.0)(64bit)',
        'libgio-2.0.so.0()(64bit)',
        'libglib-2.0.so.0()(64bit)',
        'libgobject-2.0.so.0()(64bit)',
        'libgssapi_krb5.so.2()(64bit)',
        'libgssapi_krb5.so.2(gssapi_krb5_2_MIT)(64bit)',
        'libgtk-3.so.0()(64bit)',
        'libkrb5.so.3()(64bit)',
        'libkrb5.so.3(krb5_3_MIT)(64bit)',
        'libm.so.6()(64bit)',
        'libm.so.6(GLIBC_2.2.5)(64bit)',
        'libnspr4.so()(64bit)',
        'libnss3.so()(64bit)',
        'libnss3.so(NSS_3.11)(64bit)',
        'libnss3.so(NSS_3.12)(64bit)',
        'libnss3.so(NSS_3.12.1)(64bit)',
        'libnss3.so(NSS_3.2)(64bit)',
        'libnss3.so(NSS_3.22)(64bit)',
        'libnss3.so(NSS_3.3)(64bit)',
        'libnss3.so(NSS_3.30)(64bit)',
        'libnss3.so(NSS_3.4)(64bit)',
        'libnss3.so(NSS_3.5)(64bit)',
        'libnss3.so(NSS_3.9.2)(64bit)',
        'libnssutil3.so()(64bit)',
        'libnssutil3.so(NSSUTIL_3.12.3)(64bit)',
        'libpango-1.0.so.0()(64bit)',
        'libpthread.so.0()(64bit)',
        'libpthread.so.0(GLIBC_2.12)(64bit)',
        'libpthread.so.0(GLIBC_2.2.5)(64bit)',
        'libpthread.so.0(GLIBC_2.3.2)(64bit)',
        'libpthread.so.0(GLIBC_2.3.3)(64bit)',
        'libpthread.so.0(GLIBC_2.3.4)(64bit)',
        'librt.so.1()(64bit)',
        'librt.so.1(GLIBC_2.2.5)(64bit)',
        'libsecret-1.so.0()(64bit)',
        'libsmime3.so()(64bit)',
        'libsmime3.so(NSS_3.10)(64bit)',
        'libsmime3.so(NSS_3.2)(64bit)',
        'libssl3.so(NSS_3.28)(64bit)',
        'libutil.so.1()(64bit)',
        'libutil.so.1(GLIBC_2.2.5)(64bit)',
        'libxcb.so.1()(64bit)',
        'libxkbcommon.so.0()(64bit)',
        'libxkbfile.so.1()(64bit)',
        'rpmlib(FileDigests) <= 4.6.0-1',
        'rtld(GNU_HASH)',
        'xdg-utils'
    ],
    'armv7hl': [
        'ca-certificates',
        'ld-linux-armhf.so.3',
        'ld-linux-armhf.so.3(GLIBC_2.4)',
        'libX11.so.6',
        'libXcomposite.so.1',
        'libXdamage.so.1',
        'libXext.so.6',
        'libXfixes.so.3',
        'libXrandr.so.2',
        'libasound.so.2',
        'libasound.so.2(ALSA_0.9)',
        'libasound.so.2(ALSA_0.9.0rc4)',
        'libatk-1.0.so.0',
        'libatk-bridge-2.0.so.0',
        'libatspi.so.0',
        'libc.so.6',
        'libc.so.6(GLIBC_2.10)',
        'libc.so.6(GLIBC_2.11)',
        'libc.so.6(GLIBC_2.15)',
        'libc.so.6(GLIBC_2.16)',
        'libc.so.6(GLIBC_2.17)',
        'libc.so.6(GLIBC_2.4)',
        'libc.so.6(GLIBC_2.6)',
        'libc.so.6(GLIBC_2.7)',
        'libc.so.6(GLIBC_2.8)',
        'libc.so.6(GLIBC_2.9)',
        'libcairo.so.2',
        'libcurl.so.4()(64bit)',
        'libdbus-1.so.3',
        'libdl.so.2',
        'libdl.so.2(GLIBC_2.4)',
        'libdrm.so.2',
        'libexpat.so.1',
        'libgbm.so.1',
        'libgcc_s.so.1',
        'libgcc_s.so.1(GCC_3.0)',
        'libgcc_s.so.1(GCC_3.5)',
        'libgio-2.0.so.0',
        'libglib-2.0.so.0',
        'libgobject-2.0.so.0',
        'libgssapi_krb5.so.2',
        'libgssapi_krb5.so.2(gssapi_krb5_2_MIT)',
        'libgtk-3.so.0',
        'libgtk-3.so.0()(64bit)',
        'libkrb5.so.3',
        'libkrb5.so.3(krb5_3_MIT)',
        'libm.so.6',
        'libm.so.6(GLIBC_2.4)',
        'libnspr4.so',
        'libnss3.so',
        'libnss3.so(NSS_3.11)',
        'libnss3.so(NSS_3.12)',
        'libnss3.so(NSS_3.12.1)',
        'libnss3.so(NSS_3.13)',
        'libnss3.so(NSS_3.2)',
        'libnss3.so(NSS_3.22)',
        'libnss3.so(NSS_3.22)(64bit)',
        'libnss3.so(NSS_3.3)',
        'libnss3.so(NSS_3.30)',
        'libnss3.so(NSS_3.4)',
        'libnss3.so(NSS_3.5)',
        'libnss3.so(NSS_3.9.2)',
        'libnssutil3.so',
        'libnssutil3.so(NSSUTIL_3.12.3)',
        'libpango-1.0.so.0',
        'libpthread.so.0',
        'libpthread.so.0(GLIBC_2.12)',
        'libpthread.so.0(GLIBC_2.4)',
        'librt.so.1',
        'librt.so.1(GLIBC_2.4)',
        'libsecret-1.so.0',
        'libsmime3.so',
        'libsmime3.so(NSS_3.10)',
        'libsmime3.so(NSS_3.2)',
        'libssl3.so(NSS_3.28)(64bit)',
        'libstdc++.so.6',
        'libstdc++.so.6(CXXABI_1.3)',
        'libstdc++.so.6(CXXABI_1.3.5)',
        'libstdc++.so.6(CXXABI_1.3.8)',
        'libstdc++.so.6(CXXABI_1.3.9)',
        'libstdc++.so.6(CXXABI_ARM_1.3.3)',
        'libstdc++.so.6(GLIBCXX_3.4)',
        'libstdc++.so.6(GLIBCXX_3.4.11)',
        'libstdc++.so.6(GLIBCXX_3.4.14)',
        'libstdc++.so.6(GLIBCXX_3.4.15)',
        'libstdc++.so.6(GLIBCXX_3.4.18)',
        'libstdc++.so.6(GLIBCXX_3.4.19)',
        'libstdc++.so.6(GLIBCXX_3.4.20)',
        'libstdc++.so.6(GLIBCXX_3.4.21)',
        'libstdc++.so.6(GLIBCXX_3.4.22)',
        'libstdc++.so.6(GLIBCXX_3.4.5)',
        'libstdc++.so.6(GLIBCXX_3.4.9)',
        'libutil.so.1',
        'libutil.so.1(GLIBC_2.4)',
        'libxcb.so.1',
        'libxkbcommon.so.0',
        'libxkbfile.so.1',
        'rpmlib(FileDigests) <= 4.6.0-1',
        'rtld(GNU_HASH)',
        'xdg-utils'
    ],
    'aarch64': [
        'ca-certificates',
        'ld-linux-aarch64.so.1()(64bit)',
        'ld-linux-aarch64.so.1(GLIBC_2.17)(64bit)',
        'libX11.so.6()(64bit)',
        'libXcomposite.so.1()(64bit)',
        'libXdamage.so.1()(64bit)',
        'libXext.so.6()(64bit)',
        'libXfixes.so.3()(64bit)',
        'libXrandr.so.2()(64bit)',
        'libasound.so.2()(64bit)',
        'libasound.so.2(ALSA_0.9)(64bit)',
        'libasound.so.2(ALSA_0.9.0rc4)(64bit)',
        'libatk-1.0.so.0()(64bit)',
        'libatk-bridge-2.0.so.0()(64bit)',
        'libatspi.so.0()(64bit)',
        'libc.so.6()(64bit)',
        'libc.so.6(GLIBC_2.17)(64bit)',
        'libcairo.so.2()(64bit)',
        'libcurl.so.4()(64bit)',
        'libdbus-1.so.3()(64bit)',
        'libdbus-1.so.3(LIBDBUS_1_3)(64bit)',
        'libdl.so.2()(64bit)',
        'libdl.so.2(GLIBC_2.17)(64bit)',
        'libdrm.so.2()(64bit)',
        'libexpat.so.1()(64bit)',
        'libgbm.so.1()(64bit)',
        'libgcc_s.so.1()(64bit)',
        'libgcc_s.so.1(GCC_3.0)(64bit)',
        'libgcc_s.so.1(GCC_4.2.0)(64bit)',
        'libgcc_s.so.1(GCC_4.5.0)(64bit)',
        'libgio-2.0.so.0()(64bit)',
        'libglib-2.0.so.0()(64bit)',
        'libgobject-2.0.so.0()(64bit)',
        'libgssapi_krb5.so.2()(64bit)',
        'libgssapi_krb5.so.2(gssapi_krb5_2_MIT)(64bit)',
        'libgtk-3.so.0()(64bit)',
        'libkrb5.so.3()(64bit)',
        'libkrb5.so.3(krb5_3_MIT)(64bit)',
        'libm.so.6()(64bit)',
        'libm.so.6(GLIBC_2.17)(64bit)',
        'libnspr4.so()(64bit)',
        'libnss3.so()(64bit)',
        'libnss3.so(NSS_3.11)(64bit)',
        'libnss3.so(NSS_3.12)(64bit)',
        'libnss3.so(NSS_3.12.1)(64bit)',
        'libnss3.so(NSS_3.13)(64bit)',
        'libnss3.so(NSS_3.2)(64bit)',
        'libnss3.so(NSS_3.22)(64bit)',
        'libnss3.so(NSS_3.3)(64bit)',
        'libnss3.so(NSS_3.30)(64bit)',
        'libnss3.so(NSS_3.4)(64bit)',
        'libnss3.so(NSS_3.5)(64bit)',
        'libnss3.so(NSS_3.9.2)(64bit)',
        'libnssutil3.so()(64bit)',
        'libnssutil3.so(NSSUTIL_3.12.3)(64bit)',
        'libpango-1.0.so.0()(64bit)',
        'libpthread.so.0()(64bit)',
        'libpthread.so.0(GLIBC_2.17)(64bit)',
        'librt.so.1()(64bit)',
        'librt.so.1(GLIBC_2.17)(64bit)',
        'libsecret-1.so.0()(64bit)',
        'libsmime3.so()(64bit)',
        'libsmime3.so(NSS_3.10)(64bit)',
        'libsmime3.so(NSS_3.2)(64bit)',
        'libssl3.so(NSS_3.28)(64bit)',
        'libstdc++.so.6()(64bit)',
        'libstdc++.so.6(CXXABI_1.3)(64bit)',
        'libstdc++.so.6(CXXABI_1.3.5)(64bit)',
        'libstdc++.so.6(CXXABI_1.3.8)(64bit)',
        'libstdc++.so.6(CXXABI_1.3.9)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.11)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.14)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.15)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.18)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.19)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.20)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.21)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.22)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.5)(64bit)',
        'libstdc++.so.6(GLIBCXX_3.4.9)(64bit)',
        'libutil.so.1()(64bit)',
        'libutil.so.1(GLIBC_2.17)(64bit)',
        'libxcb.so.1()(64bit)',
        'libxkbcommon.so.0()(64bit)',
        'libxkbcommon.so.0(V_0.5.0)(64bit)',
        'libxkbfile.so.1()(64bit)',
        'rpmlib(FileDigests) <= 4.6.0-1',
        'rtld(GNU_HASH)',
        'xdg-utils'
    ]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwLWxpc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVwLWxpc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O2dHQUdnRzs7O0FBRWhHLCtHQUErRztBQUMvRywrREFBK0Q7QUFDbEQsUUFBQSxjQUFjLEdBQUc7SUFDN0IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFdBQVcsQ0FBQyxpQkFBaUI7Q0FDN0IsQ0FBQztBQUVXLFFBQUEsNEJBQTRCLEdBQUc7SUFDM0MsUUFBUSxFQUFFO1FBQ1QsaUJBQWlCO1FBQ2pCLCtCQUErQjtRQUMvQiwwQ0FBMEM7UUFDMUMsd0NBQXdDO1FBQ3hDLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixpQ0FBaUM7UUFDakMsc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5Qiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQiwrQkFBK0I7UUFDL0IsK0JBQStCO1FBQy9CLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUNoQyxzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsK0JBQStCO1FBQy9CLDBCQUEwQjtR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