export function AddPhoneNumberSignature(phoneNumber) {
    OneSignal.User.addSms(phoneNumber);
}

export function AddEmailSignature(email) {
    OneSignal.User.addEmail(email);
}
