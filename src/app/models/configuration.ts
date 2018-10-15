import {GridLocation} from ./models/grid-location

export class Configuration {
    rows: number;
    columns: number;
    mineLocations: Array<GridLocation>;
    exitLocation: GridLocation;
}
