$(document).ready(function(){
    $(".icobg").click(function(){
        $(this).addClass('big01');
        setTimeout(function(){
            $(".icobg").removeClass('big01');
        }, 500);
    });
    $(".icofitting").click(function(){
        $(this).addClass('big02');
        setTimeout(function(){
            $(".icofitting").removeClass('big02');
        }, 500);
    });
    $(".icoimage").click(function(){
        $(this).addClass('big03');
        setTimeout(function(){
            $(".icoimage").removeClass('big03');
        }, 500);
    });
    $(".icolist").click(function(){
        $(this).addClass('big04');
        setTimeout(function(){
            $(".icolist").removeClass('big04');
        }, 500);
    });
    $(".icodongzuo").click(function(){
        $(this).addClass('big05');
        setTimeout(function(){
            $(".icodongzuo").removeClass('big05');
        }, 500);
    });
    $(".icofood").click(function(){
        $(this).addClass('big06');
        setTimeout(function(){
            $(".icofood").removeClass('big06');
        }, 500);
    });
    $(".icohuanyi").click(function(){
        $(this).addClass('big07');
        setTimeout(function(){
            $(".icohuanyi").removeClass('big07');
        }, 500);
    });
    $(".icoliaotian").click(function(){
        $(this).addClass('big08');
        setTimeout(function(){
            $(".icoliaotian").removeClass('big08');
        }, 500);
    });
    $(".icoxizao").click(function(){
        $(this).addClass('big09');
        setTimeout(function(){
            $(".icoxizao").removeClass('big09');
        }, 500);
    });
    $(".belt").click(function(){
        $(this).addClass('big10');
        setTimeout(function(){
            $(".belt").removeClass('big10');
        }, 500);
    });
    $(".brooch").click(function(){
        $(this).addClass('big11');
        setTimeout(function(){
            $(".brooch").removeClass('big11');
        }, 500);
    });
    $(".coller").click(function(){
        $(this).addClass('big12');
        setTimeout(function(){
            $(".coller").removeClass('big12');
        }, 500);
    });
    $(".colour").click(function(){
        $(this).addClass('big13');
        setTimeout(function(){
            $(".colour").removeClass('big13');
        }, 500);
    });
    $(".model").click(function(){
        $(this).addClass('big14');
        setTimeout(function(){
            $(".model").removeClass('big14');
        }, 500);
    });
    $(".sleeve").click(function(){
        $(this).addClass('big15');
        setTimeout(function(){
            $(".sleeve").removeClass('big15');
        }, 500);
    });

    $(".menu").click(function () {
            $(".nav_box").removeClass("hide");
            $("#mask").addClass("mask");
    });
    $(".close").click(function () {
        $(".nav_box").addClass("hide");
        $("#mask").removeClass("mask");
    });
});