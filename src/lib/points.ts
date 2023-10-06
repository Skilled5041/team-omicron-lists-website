export const weighted = (levelBeatenNum: number) => {
	return 0.97 ** (levelBeatenNum - 1);
};

export const calculatePoints = (rank: number, numberLevels: number) => {
	const exponent = ((numberLevels - rank) / (numberLevels / 5)) * (1 / rank) * rank;
	return (numberLevels / 20) * 2 ** exponent + 10;
};

export const calculatePercentageWeight = (percentage: number, minimumPercentage: number) => {
	if (percentage === 100) {
		return 1;
	} else if (percentage < minimumPercentage) {
		return 0;
	}
	return 0.1 + 0.9 * (percentage / 100 - minimumPercentage / 100);
};

interface LevelInfo {
	rank: number;
	minimumPercentage: number;
}

// Sorted array containing ranks of beaten levels
export const calculateUserPointsWeighted = (beatenLevels: LevelInfo[], numberLevels: number) => {
	let points = 0;
	for (let i = 0; i < beatenLevels.length; i++) {
		points +=
			weighted(i + 1) *
			calculatePoints(beatenLevels[i].rank, numberLevels) *
			calculatePercentageWeight(beatenLevels[i].minimumPercentage, 50);
	}
	return points;
};

export const calculateUserPointsUnweighted = (beatenLevels: number[], numberLevels: number) => {
	let points = 0;
	for (let i = 0; i < beatenLevels.length; i++) {
		points += calculatePoints(beatenLevels[i], numberLevels);
	}
	return points;
};
