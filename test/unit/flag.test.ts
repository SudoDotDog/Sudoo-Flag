/**
 * @author WMXPY
 * @namespace Flag
 * @description Flag
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { FlagManager } from "../../src";

describe('Given {FlagManager} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('flag-flag');

    it('should be able to construct', (): void => {

        const instance: FlagManager = FlagManager.empty();
        expect(instance).to.be.instanceOf(FlagManager);
    });
});
