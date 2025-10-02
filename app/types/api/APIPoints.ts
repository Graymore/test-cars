enum APICarPointList {
    '/cars',
    '/car',
    '/car/additional'
}

export type APICarPoints = keyof typeof APICarPointList;