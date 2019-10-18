$(function(){
    $('#search').click(function(){
        $('#searchForm').show()
    });
    $(window).on('resize',function(){
        var w = document.documentElement.clientWidth/35+'px';
        //$('.carousel-caption').css('font-size',w)
    }).trigger('resize');
    $('body').fadeIn(1,function(){
        $('#welcome').modal({
            show:true,
            backdrop:'static',
            keyboard:false
        })
    });
    $('#earth').on('change',function(){
        window.location.href=$(this).val()
    })

})
