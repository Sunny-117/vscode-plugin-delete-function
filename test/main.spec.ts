import { test, expect } from 'vitest';
import { getFunctionNode } from '../src/main';
test('init', () => {
    const code = `
		function getName(){
			return 'name'
		}
		function getDemo(){
			return 'name'
		}
	`;

    const functionNode = getFunctionNode(code);
    expect(functionNode).toEqual({
        name: "getName",
        start: {
            line: 2, column: 2, index: 3
        },
        end: {
            line: 4, column: 3, index: 43
        },

    });
});