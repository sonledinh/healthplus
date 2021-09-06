(function ($, app) {

    var homeCls = function () {
        var el = {};

        this.run = function () {
            this.init();
            this.bindEvents();
        };

        this.init = function () {

        };

        this.bindEvents = function () {
            frontJs();
            toggSidebar();
            tab_content();
            menu_mobile();
        };

        var frontJs = function () {
            $('.slide-td-hot').slick({
                autoplay: false,
                arrow: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1, 
                prevArrow: '',
                nextArrow: '', 
                speed: 500,
            });  

            $('.slide-sp').slick({
                autoplay: false,
                arrow: true,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1, 
                prevArrow: '<a href="javascript:void(0)" class="prev"><img src="images/arr-left-or.png" class="img-fluid" alt=""></a>',
                nextArrow: '<a href="javascript:void(0)" class="next"><img src="images/arr-right-or.png" class="img-fluid" alt=""></a>',
                speed: 500,
                responsive: [
                    {
                        breakpoint: 1023, 
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        } 
                    }, 
                    {
                        breakpoint: 767, 
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        } 
                    }, 
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            }); 

            $('.slide-video').slick({
                autoplay: false,
                arrow: true,
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1, 
                prevArrow: '<a href="javascript:void(0)" class="prev"><img src="images/arr-left-gr.png" class="img-fluid" alt=""></a>',
                nextArrow: '<a href="javascript:void(0)" class="next"><img src="images/arr-right-gr.png" class="img-fluid" alt=""></a>',
                speed: 500,
                responsive: [
                    {
                        breakpoint: 1023, 
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        } 
                    }, 
                    {
                        breakpoint: 767, 
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        } 
                    }, 
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            }); 

            $('.slide-big-cate').slick({
                autoplay: false,
                arrow: false,
                dots: true,
                slidesToShow: 1, 
                slidesToScroll: 1, 
                prevArrow: '',
                nextArrow: '', 
                speed: 500,
            }); 
        };

        var toggSidebar = function () {
            $('.t-bar').click(function(event) {
                // $('.sub-bar').slideUp(400);
                $(this).next().slideToggle(400);
            });
        };

        var tab_content = function () {
            $('.tab-top a').click(function(){
                var $this = $(this);
                var $theTab = $(this).attr('id');
                console.log($theTab);
                if($this.hasClass('active')){
                } else{
                  $this.closest('.box-tab').find('.tab-top a, .tabs_container .tab-content').removeClass('active');
                  $('.tabs_container .tab-content[data-tab="'+$theTab+'"], .tab-top a[id="'+$theTab+'"]').addClass('active');
                }
                
            });
        };

        var menu_mobile = function () {
            jQuery(document).ready(function( $ ) {
              $("#menu").mmenu({
                 "extensions": [
                    "fx-menu-zoom"
                 ],
                 "counters": true
              });
            });

            $('.search-mb a').click(function(event) {
                $(this).toggleClass('active');
                $('.box-search-mb').slideToggle(300);
            });
        };
    };


    $(document).ready(function () {
        var homeObj = new homeCls();
        homeObj.run();
        // On resize

    });
}(jQuery, $.app));
