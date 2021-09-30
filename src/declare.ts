/**
 * @author WMXPY
 * @namespace Flag
 * @description Declare
 */

export type FlagConfig<F extends string> = {

    readonly target: string;
    readonly flags: F[];
};

export type FlagStorage<F extends string> = {

    readonly targets: string[];
    readonly flags: Array<FlagConfig<F>>;
};
