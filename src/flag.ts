/**
 * @author WMXPY
 * @namespace Flag
 * @description Flag
 */

import { FlagConfig, FlagStorage } from "./declare";
import { utilAttachFlag, utilRemoveFlag } from "./util";

export class FlagManager {

    public static fromTargets(targets: string[]): FlagManager {

        return new FlagManager(targets, []);
    }

    public static fromStorage(storage: FlagStorage): FlagManager {

        return new FlagManager(storage.targets, storage.flags);
    }

    private readonly _targets: string[];
    private readonly _flags: Map<string, FlagConfig>;

    private constructor(targets: string[], flags: FlagConfig[]) {

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

        const flagConfig: FlagConfig | undefined = this._flags.get(target);

        if (!flagConfig) {
            return [];
        }
        return flagConfig.flags;
    }

    public attachFlag(target: string, flag: string): this {

        const flagConfig: FlagConfig | undefined = this._flags.get(target);

        if (!flagConfig) {
            return this;
        }

        const newConfig: FlagConfig = utilAttachFlag(flagConfig, flag);
        this._flags.set(target, newConfig);
        return this;
    }

    public removeFlag(target: string, flag: string): this {

        const flagConfig: FlagConfig | undefined = this._flags.get(target);

        if (!flagConfig) {
            return this;
        }

        const newConfig: FlagConfig = utilRemoveFlag(flagConfig, flag);
        this._flags.set(target, newConfig);
        return this;
    }
}
