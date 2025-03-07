// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

'use strict';

/* eslint-disable  */

export namespace vscMockStrings {
    /**
     * Determines if haystack starts with needle.
     */
    export function startsWith(haystack: string, needle: string): boolean {
        if (haystack.length < needle.length) {
            return false;
        }

        for (let i = 0; i < needle.length; i++) {
            if (haystack[i] !== needle[i]) {
                return false;
            }
        }

        return true;
    }

    /**
     * Determines if haystack ends with needle.
     */
    export function endsWith(haystack: string, needle: string): boolean {
        let diff = haystack.length - needle.length;
        if (diff > 0) {
            return haystack.indexOf(needle, diff) === diff;
        } else if (diff === 0) {
            return haystack === needle;
        } else {
            return false;
        }
    }
}
