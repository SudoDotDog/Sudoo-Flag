/**
 * @author WMXPY
 * @namespace Flag
 * @description Flag
 */

import { FlagStorage } from "./declare";

export class FlagManager {

    public static empty(): FlagManager {
        return new FlagManager();
    }

    public static from(storage: FlagStorage): FlagManager {
        return new FlagManager();
    }

    private constructor() {
        // tslint:disable-next-line
    }
}
