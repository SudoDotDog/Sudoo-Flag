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

    const chance: Chance.Chance = new Chance('flag-flag');

    it('should be able to construct', (): void => {

        const instance: FlagManager = FlagManager.empty();
        expect(instance).to.be.instanceOf(FlagManager);
    });

    it('should be able to construct with target list', (): void => {

        const firstTarget: string = chance.string();
        const secondTarget: string = chance.string();

        const instance: FlagManager = FlagManager.fromTargets([
            firstTarget,
            secondTarget,
        ]);

        expect(instance).to.be.instanceOf(FlagManager);
        expect(instance.targetLength).to.be.equal(2);
    });
});
