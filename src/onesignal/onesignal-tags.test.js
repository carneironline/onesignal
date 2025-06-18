/// <reference types="vitest/globals" />
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { addTag, removeTag, getTags, setupOneSignalTagging } from './onesignal-tags';

/**
 * @vitest-environment jsdom
 */

describe('onesignal-tags', () => {
    beforeEach(() => {
        global.OneSignal = {
            User: {
                addTag: vi.fn(),
                removeTag: vi.fn(),
                getTags: vi.fn().mockReturnValue({}),
            },
        };
    });

    it('should call OneSignal.User.addTag with correct arguments', () => {
        addTag('foo', 'bar');
        expect(global.OneSignal.User.addTag).toHaveBeenCalledWith('foo', 'bar');
    });

    it('should call OneSignal.User.removeTag with correct argument', () => {
        removeTag('foo');
        expect(global.OneSignal.User.removeTag).toHaveBeenCalledWith('foo');
    });

    it('should call OneSignal.User.getTags', () => {
        getTags();
        expect(global.OneSignal.User.getTags).toHaveBeenCalled();
    });

    it('setupOneSignalTagging should add event listeners and handle click', () => {
        // Mock DOM
        document.body.innerHTML = ` 
      <button data-onesignal-tag="foo" data-onesignal-tag-value="bar"></button>
    `;
        global.OneSignal.User.getTags.mockReturnValue({});

        setupOneSignalTagging();

        const btn = document.querySelector('[data-onesignal-tag]');
        btn.click();

        expect(global.OneSignal.User.addTag).toHaveBeenCalledWith('foo', 'bar');
        expect(btn.classList.contains('onesignal-tag-activated')).toBe(true);

        btn.click();

        expect(global.OneSignal.User.removeTag).toHaveBeenCalledWith('foo');
        expect(btn.classList.contains('onesignal-tag-activated')).toBe(false);
    });
});
