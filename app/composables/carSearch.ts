import type { APICarListItem } from "~/types/api/APICar";

export const useCarSearch = () => {
    let raw: APICarListItem[] = []

    const get = (cars: APICarListItem[], query: string) => {
        const str = query.toLowerCase().trim()

        if (!raw.length) raw = cars
        if (!str) return raw

        const getMatchScore = (car: APICarListItem) => {
            const make = car.make.toLowerCase()
            const model = car.model.toLowerCase()

            let score = 0

            if (make === str) score += 100
            if (model === str) score += 100

            if (make.startsWith(str)) score += 50
            if (model.startsWith(str)) score += 50

            if (make.includes(str)) score += 10
            if (model.includes(str)) score += 10

            return score
        }

        return raw
            .filter(car => {
                const make = car.make.toLowerCase();
                const model = car.model.toLowerCase();

                return make.includes(str) || model.includes(str);
            })
            .sort((a, b) => {
                const scoreA = getMatchScore(a);
                const scoreB = getMatchScore(b);

                return scoreB - scoreA;
            });
    }

    return { get }
}