// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001070707070707070707070707070702080909090909090909090909090909060809090909090a0a0a0a0a0a0a0909060809090909090a0a0a0a0a0a0a0909060809090909090a0a09090909090909060809090909090a0a090909090909090608090a0a0a0a0a0a090909090909090608090a0a0a0a0a0a0a0a0a0a0a09090608090a0a0a0a0a0a0a0a0a0a0a09090608090a0a0a0a0a0a09090909090909060809090909090a0a09090909090909060809090909090a0a09090909090909060809090909090a0a0a0a0a0a0a0909060809090909090a0a0a0a0a0a0a0909060809090909090909090909090909090603050505050505050505050505050504`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.skillmap.islandTile0,sprites.skillmap.islandTile2,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile7,sprites.skillmap.islandTile5,sprites.skillmap.islandTile1,sprites.skillmap.islandTile3,sprites.skillmap.islandTile4,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
