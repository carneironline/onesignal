import { setupOneSignalTagging } from './onesignal-tags.js';

function getID() {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const id = UserDataGloboId.logado ? UserDataGloboId.glbid : params.get('id');

    return params.has('id') ? id : false;
}

function initOneSignal() {
    window.OneSignalDeferred = window.OneSignalDeferred || [];

    OneSignalDeferred.push(async function (OneSignal) {
        const settings = {
            // appId: 'cc2ec633-9a92-4afa-89ca-be09643d6e36',
            // safari_web_id: 'web.onesignal.auto.2bd24c9c-6b5e-41da-a209-1033c3319dfc',
            // serviceWorkerPath: 'OneSignalSDKWorker.js',
            // notifyButton: {
            //     enable: true,
            // },

            appId: 'cc2ec633-9a92-4afa-89ca-be09643d6e36',
        };

        await OneSignal.init(settings);

        if (getID()) await OneSignal.login(getID());

        setupOneSignalTagging();
    });
}

function init() {
    let count = 0;
    const interval = setInterval(() => {
        if (!(count < 50 && !UserDataGloboId)) {
            initOneSignal();
            clearInterval(interval);
        }

        count++;
    }, 200);
}

init();
