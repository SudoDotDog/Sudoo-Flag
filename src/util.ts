/**
 * @author WMXPY
 * @namespace Flag
 * @description Util
 */

import { FlagConfig } from "./declare";

export const utilAttachFlag = <F extends string>(flagConfig: FlagConfig<F>, newFlag: F): FlagConfig<F> => {

    const existFlags: F[] = flagConfig.flags;

    if (existFlags.includes(newFlag)) {
        return flagConfig;
    }

    return {
        ...flagConfig,
        flags: [...existFlags, newFlag],
    };
};

export const utilRemoveFlag = <F extends string>(flagConfig: FlagConfig<F>, removeFlag: F): FlagConfig<F> => {

    const existFlags: F[] = flagConfig.flags;

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
