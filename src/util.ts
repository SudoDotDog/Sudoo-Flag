/**
 * @author WMXPY
 * @namespace Flag
 * @description Util
 */

import { FlagConfig } from "./declare";

export const utilAttachFlag = (flagConfig: FlagConfig, newFlag: string): FlagConfig => {

    const existFlags: string[] = flagConfig.flags;

    if (existFlags.includes(newFlag)) {
        return flagConfig;
    }

    return {
        ...flagConfig,
        flags: [...existFlags, newFlag],
    };
};

export const utilRemoveFlag = (flagConfig: FlagConfig, removeFlag: string): FlagConfig => {

    const existFlags: string[] = flagConfig.flags;

    if (!existFlags.includes(removeFlag)) {
        return flagConfig;
    }

    return {
        ...flagConfig,
        flags: existFlags.filter((flag: string) => {
            return flag !== removeFlag;
        }),
    };
};
