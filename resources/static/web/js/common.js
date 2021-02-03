$(function () {
    // 右侧菜单事件
    var isClick = true;
    var isOpen = false;
    var $rightNav = $('#right-nav');
    var $rightNavPicture = $('#right-nav .pictrue');
    if ($rightNav[0]) {
        $rightNavPicture.on('touchstart', function (evt) {
            var e = event || evt;
            e.preventDefault();
            isClick = true;
        });
        $rightNavPicture.on('touchmove', function (evt) {
            var e = event || evt;
            e.preventDefault();
            if (isOpen) return;
            if (e.targetTouches.length == 1) {
                var touch = e.targetTouches[0];  // 把元素放在手指所在的位置
                $rightNav.css("right",($(window).width() - touch.pageX - parseInt($rightNav.width())/2 + 'px'));
                $rightNav.css("top",(touch.pageY - parseInt($rightNav.height())/2 + 'px'));
            }
            isClick=false;
        })
        $rightNavPicture.on('touchend', function (evt) {
            var e = event || evt;
            e.preventDefault();
            if (isClick) {
                $rightNav.find('.homeCon').toggleClass('on');
                isOpen = !isOpen;
            }
        })
    }
    // 数量增减控件
    $('.carnum .plus').on('touchstart', function () {
        var $carnum = $($(this).parents('.carnum')[0]);
        var $numInput = $carnum.find('input');
        $numInput.val($numInput.val() * 1 + 1)
        if ($numInput.val() * 1 > 1) {
            $carnum.find('.reduce').removeClass('on');
        }
    })
    $('.carnum .reduce').on('touchstart', function () {
        if ($(this).hasClass('on')) {
                return;
        }
        var $carnum = $($(this).parents('.carnum')[0]);
        var $numInput = $carnum.find('input');
        if ($numInput.val() * 1 <= 1) {
            $carnum.find('.reduce').addClass('on');
        }
        if ($(this).hasClass('on')) {
            return;
        }
        $numInput.val($numInput.val() * 1 - 1)
    })
})
function isPhoneNo(phone) {
 var pattern = /^1[34578]\d{9}$/;
 return pattern.test(phone);
}
