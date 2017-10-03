/// <reference types="bluebird" />
import * as Promise from 'bluebird';
export declare const getSDKTemplates: () => Promise<{
    js: string;
    tsd: string;
}>;
