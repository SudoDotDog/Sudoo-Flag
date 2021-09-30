/**
 * @author WMXPY
 * @namespace Flag
 * @description Flag
 */

import { FlagConfig } from ".";
import { FlagStorage } from "./declare";

export class FlagManager {

    public static empty(): FlagManager {

        return new FlagManager([], []);
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
}
