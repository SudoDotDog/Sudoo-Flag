/**
 * @author WMXPY
 * @namespace Flag
 * @description Declare
 */

export type FlagConfig = {

    readonly target: string;
    readonly flags: string[];
};

export type FlagStorage = {

    readonly targets: string[];
    readonly flags: FlagConfig[];
};
