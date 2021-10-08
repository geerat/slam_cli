export type Direction = 'east' | 'south' | 'north' | 'west';

export interface Configuration {
    table: TableConfiguration;
    map: MapConfiguration;
}
export interface TableConfiguration {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}

export interface MapConfiguration {
    east: DirectionConfiguration;
    west: DirectionConfiguration;
    south: DirectionConfiguration;
    north: DirectionConfiguration;
}

interface DirectionConfiguration {
    right: Direction;
    left: Direction;
    dx: number;
    dy: number;
}
