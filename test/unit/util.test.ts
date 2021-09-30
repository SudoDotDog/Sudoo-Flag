/**
 * @author WMXPY
 * @namespace Flag
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { FlagConfig, utilAttachFlag, utilRemoveFlag } from "../../src";
import { MockTwoFlagType } from "../mock/declare";

describe('Given (Util) Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('flag-util');

    it('should be able to attach flag', (): void => {

        const targetName: string = chance.string();

        const originalConfig: FlagConfig<MockTwoFlagType> = {
            target: targetName,
            flags: ['hello'],
        };

        const newConfig: FlagConfig<MockTwoFlagType> = utilAttachFlag(originalConfig, 'world');

        expect(newConfig.flags).to.be.lengthOf(2);
        expect(newConfig.flags[0]).to.be.equal('hello');
        expect(newConfig.flags[1]).to.be.equal('world');
    });

    it('should be able to remove flag', (): void => {

        const targetName: string = chance.string();

        const originalConfig: FlagConfig<MockTwoFlagType> = {
            target: targetName,
            flags: ['hello', 'world'],
        };

        const newConfig: FlagConfig<MockTwoFlagType> = utilRemoveFlag(originalConfig, 'world');

        expect(newConfig.flags).to.be.lengthOf(1);
        expect(newConfig.flags[0]).to.be.equal('hello');
    });
});
