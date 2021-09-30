/**
 * @author WMXPY
 * @namespace Flag
 * @description Flag
 */

import { FlagConfig } from ".";
import { FlagStorage } from "./declare";

export class FlagManager {

    public static fromTargets(targets: string[]): FlagManager {

        return new FlagManager(targets, []);
    }

    public static fromStorage(storage: FlagStorage): FlagManager {

        return new FlagManager(storage.targets, storage.flags);
    }

    private readonly targets: string[];
    private readonly flags: FlagConfig[];

    private constructor(targets: string[], flags: FlagConfig[]) {

        this.targets = targets;
        this.flags = flags;
    }

    public get targetLength(): number {
        return this.targets.length;
    }
    public get flagLength(): number {
        return this.flags.length;
    }

    public getFlag(target: string): string[] {

        const flagConfig: FlagConfig | undefined = this._getFlagConfig(target);

        if (!flagConfig) {
            return [];
        }
        return flagConfig.flags;
    }

    public attachFlag(target: string, flag: string): this {

        const flagConfig: FlagConfig | undefined = this._getFlagConfig(target);

        if (!flagConfig) {
            return this;
        }

        flagConfig.flags.push(flag);
        return this;
    }

    private _getFlagConfig(target: string): FlagConfig | undefined {

        return this.flags.find((flag: FlagConfig) => {
            return flag.target === target;
        });
    }
}
