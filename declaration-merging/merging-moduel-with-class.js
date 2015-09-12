var Album = (function () {
    function Album() {
    }
    return Album;
})();
var Album;
(function (Album) {
    var AlbumLabel = (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    })();
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
