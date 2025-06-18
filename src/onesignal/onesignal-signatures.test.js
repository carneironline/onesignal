import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AddPhoneNumberSignature, AddEmailSignature } from './onesignal-signatures';

describe('onesignal-signatures', () => {
    beforeEach(() => {
        global.OneSignal = {
            User: {
                addSms: vi.fn(),
                addEmail: vi.fn(),
            },
        };
    });

    it('should call OneSignal.User.addSms with the phone number', () => {
        AddPhoneNumberSignature('123456789');
        expect(global.OneSignal.User.addSms).toHaveBeenCalledWith('123456789');
    });

    it('should call OneSignal.User.addEmail with the email', () => {
        AddEmailSignature('test@example.com');
        expect(global.OneSignal.User.addEmail).toHaveBeenCalledWith('test@example.com');
    });
});
