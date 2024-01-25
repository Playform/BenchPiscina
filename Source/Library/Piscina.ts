export const { dirname, resolve } = await import("path");

export const { default: Piscina } = await import("piscina");

export const File = (await import("url")).fileURLToPath(import.meta.url);

export const Calculation = new Piscina({
	filename: resolve(`${dirname(File)}/../../Target/test/calculation.js`),
});

export const _Function = new Piscina({
	filename: resolve(`${dirname(File)}/../../Target/test/function-call.js`),
});

await Promise.all([
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
	await Calculation.run({}),
	await _Function.run({}),
]);
