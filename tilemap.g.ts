// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`200010000805050505050505050505050505050505050505050505050505050505050506090000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000400000000000000000000000000000400070003030300000000000000030303030300000000000003030303000000000007000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000070004000000000303030300000000000000000000000000000000000303030007000000000000000000000000000000000000040000000000000000000000000700000000000000000000000000000000030303030300000000000000000000070303030300000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000030303000000000700000000000303030303000000000000000000000000000000000000000000070000000000000000000000000000000000000003030300000000000000000007020000000000000000000000000000000000000000000000000000000400000703030300000000000000000000000000000000000000000000000000000000070101010101010101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222222
2..............................2
...............................2
.222.......22222......2222.....2
...............................2
...............................2
......2222.................222.2
...............................2
................22222..........2
2222...........................2
........................222....2
.....22222.....................2
...................222.........2
...............................2
222............................2
................................
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,myTiles.tile1,sprites.dungeon.floorLightMoss,myTiles.tile2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
