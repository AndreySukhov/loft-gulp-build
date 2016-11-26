'use strict'

module.exports = function() {
    $.gulp.task('sprite:img', function(){

        var outPut = $.gulp.src('./source/images/*.*')
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss'
            }))
        outPut.img.pipe($.gulp.dest('./source/images/'))
        outPut.css.pipe($.gulp.dest('./source/style/sprites'))

        return outPut


    });
}