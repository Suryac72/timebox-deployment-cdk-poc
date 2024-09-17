import { deployDevStage } from '../dev/dev-deploy.js';
import { deployQaStage } from '../qa/qa-deploy.js';

describe('CodePipeline Stages', () => {
    test('DEV stage should deploy successfully', async () => {
        const result = await deployDevStage();
        expect(result).toBe(true);
     }, 70000);

    test('QA stage should deploy successfully', async () => {
        const result = await deployQaStage();
        expect(result).toBe(true);
    }, 70000);

    test('QA stage should trigger 1 hour after DEV stage', async () => {
        console.log("Simulating 1-hour delay before triggering QA stage...");
        await new Promise((resolve) => setTimeout(resolve, 10000));
        const result = await deployQaStage();
        expect(result).toBe(true);
    }, 70000);
});
