      $('span.nav-button').click(function () {

                            $('.nav li').slideToggle();

                        })

                        $(window).resize(function () {

                            if ($(window).width() > 952) {

                                $('.nav li').removeAttr('style');

                            }

                        })