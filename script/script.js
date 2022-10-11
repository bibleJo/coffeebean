$(document).ready(function(){

    $('#top_scroll').click(function() {
		$('html, body').animate({scrollTop:0},300)
	})

    $('#header2_box>ul>li').mouseenter(function(){
        $(this).children('.sub').stop().fadeIn()
    })
    $('#header2_box>ul>li').mouseleave(function(){
        $(this).children('.sub').stop().fadeOut()
    })
    $('#new_btbox>ul>li:nth-child(1)').click(function(){
        $('#new_btbox>ul>li:nth-child(1)>img').attr({'src':'images/icons/paging_on.png'})
        $('#new_btbox>ul>li:nth-child(2)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#new_btbox>ul>li:nth-child(3)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#new_product').animate({'left':'0'},1000)
    })
    $('#new_btbox>ul>li:nth-child(2)').click(function(){
        $('#new_btbox>ul>li:nth-child(2)>img').attr({'src':'images/icons/paging_on.png'})
        $('#new_btbox>ul>li:nth-child(1)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#new_btbox>ul>li:nth-child(3)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#new_product').animate({'left':'-1230px'},1000)
    })
    $('#new_btbox>ul>li:nth-child(3)').click(function(){
        $('#new_btbox>ul>li:nth-child(3)>img').attr({'src':'images/icons/paging_on.png'})
        $('#new_btbox>ul>li:nth-child(1)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#new_btbox>ul>li:nth-child(2)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#new_product').animate({'left':'-2460px'},1000)
    })
    $('#pick_btbox>ul>li:nth-child(1)').click(function(){
        $('#pick_btbox>ul>li:nth-child(1)>img').attr({'src':'images/icons/paging_on.png'})
        $('#pick_btbox>ul>li:nth-child(2)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#pick_product').animate({'left':'0'},1000)
    })
    $('#pick_btbox>ul>li:nth-child(2)').click(function(){
        $('#pick_btbox>ul>li:nth-child(2)>img').attr({'src':'images/icons/paging_on.png'})
        $('#pick_btbox>ul>li:nth-child(1)>img').attr({'src':'images/icons/paging_on_popup.png'})
        $('#pick_product').animate({'left':'-300px'},1000)
    })
})