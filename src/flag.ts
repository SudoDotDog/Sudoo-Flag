/**
 * @author WMXPY
 * @namespace Flag
 * @description Flag
 */

import { FlagConfig, FlagStorage } from "./declare";
import { utilAttachFlag, utilRemoveFlag } from "./util";

export class FlagManager<F extends string = string> {

    public static empty<F extends string = string>(): FlagManager<F> {

        return new FlagManager<F>([], []);
    }

    public static fromTargets<F extends string = string>(targets: F[]): FlagManager<F> {

        return new FlagManager<F>(targets, []);
    }

    public static fromStorage<F extends string = string>(storage: FlagStorage<F>): FlagManager<F> {

        return new FlagManager<F>(storage.targets, storage.flags);
    }

    private readonly _targets: string[];
    private readonly _flags: Map<string, FlagConfig<F>>;

    private constructor(targets: string[], flags: Array<FlagConfig<F>>) {

        this._targets = targets;
        this._flags = new Map();

        for (const flag of flags) {
            this._flags.set(flag.target, flag);
        }
    }

    public get targetLength(): number {
        return this._targets.length;
    }
    public get flagLength(): number {
        return this._flags.size;
    }

    public getFlag(target: string): string[] {

        const flagConfig: FlagConfig<F> | undefined = this._flags.get(target);

        if (!flagConfig) {
            return [];
        }
        return flagConfig.flags;
    }

    public attachFlag(target: string, flag: F): this {

        const flagConfig: FlagConfig<F> | undefined = this._flags.get(target);

        if (!flagConfig) {
            return this;
        }

        const newConfig: FlagConfig<F> = utilAttachFlag(flagConfig, flag);
        this._flags.set(target, newConfig);
        return this;
    }

    public removeFlag(target: string, flag: F): this {

        const flagConfig: FlagConfig<F> | undefined = this._flags.get(target);

        if (!flagConfig) {
            return this;
        }

        const newConfig: FlagConfig<F> = utilRemoveFlag(flagConfig, flag);
        this._flags.set(target, newConfig);
        return this;
    }

    public toStorage(): FlagStorage<F> {

        return {
            targets: this._targets,
            flags: Array.from(this._flags.values()),
        };
    }
}
