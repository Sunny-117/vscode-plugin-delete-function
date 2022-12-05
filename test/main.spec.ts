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
    let index = 10;
    const functionNode = getFunctionNode(code, index);
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

test.only('arrow func', () => {
    const code = `
		const getName1 = ()=> 'hello'
		const getName2 = ()=> 'hello'
	`;
    let index = 10;
    const functionNode = getFunctionNode(code, index);
    expect(functionNode).toEqual({
        name: "getName1",
        start: {
            "column": 2,
            "index": 3,
            "line": 2,
        },
        end: {
            "column": 31,
            "index": 32,
            "line": 2,
        },

    });
});