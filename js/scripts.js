$(window).resize(function() {
  $("body").css("width","");
  pupMakeup();
  makeup();
});

$(window).load(function() {
  $("body").css("width",$("body").width()-1).css("width",$("body").width()+1);
  $(".slider").each(function() {
    $(this).css("height",$(this).find("img").eq(0).height());
  });
  makeup();
});

$(document).ready(function () {

  // ----------------------------------------------------------

  if ($(".simple-slider").length) {
    $(".simple-slider").each(function() {
      $(this).simpleSlider({
        width:659
      });
    });
  }

  $("input:checkbox").each(function() {
    if ($(this).is(":disabled")) {
      $(this).parents(".form-item").addClass("disabled")
    }
  });
  
  $("input:radio").each(function() {
    if ($(this).is(":disabled")) {
      $(this).parents(".form-item").addClass("disabled")
    }
  });

  $(".voting-hint .close").click(function() {
    $(".voting-hint").fadeOut(150);
  });
  
  $(".welcome-steps .w-step-3 .pic").bind("mouseenter",function() {
    var lightsCont = $(".lamp-lights");
    var lights = lightsCont.find("img");
    lights.hide();
    var lt1 = setTimeout(function() {
      lights.eq(0).fadeTo(250,1);
    },0);
    var lt2 = setTimeout(function() {
      lights.eq(1).fadeTo(250,1);
    },250);
    var lt3 = setTimeout(function() {
      lights.eq(2).fadeTo(250,1);
    },500);
    var lt4 = setTimeout(function() {
      lights.eq(3).fadeTo(250,1);
    },750);
    var lt5 = setTimeout(function() {
      lights.eq(4).fadeTo(250,1);
    },1000);
    var lt6 = setTimeout(function() {
      lights.eq(5).fadeTo(250,1);
    },1250);
    var lt7 = setTimeout(function() {
      lights.eq(6).fadeTo(250,1);
    },1500);
  });
  
  $(".hosting-slider").mainSlider();
  
  if ($(".form-date").length) {
    $(".form-date").datepicker({
      dateFormat: "d MM yy",
      onSelect: function() {
        //$(this).parents(".form-item").find(".placeholder").hide();
        $(this).focus().removeClass("error");
        $(this).blur();
      },
      firstDay: 1
    })
  }

  if ($("#cv_file").length) {
    $("#cv_file").nicefileinput({ 
      label : 'Загрузить резюме'
    });
  }
  
  // Expandable blocks
  
  $(".expandable").each(function() {
    var trigger = $(this).find(".trigger");
    var expandable = $(this);
    trigger.click(function() {
      expandable.toggleClass("expandable-expanded")
      expandable.find(".expandable-content").slideToggle(250);
    })
  });

  if ($("input:checkbox").length) {
    $("input:checkbox").iCheck()
  }
  
  if ($("input:radio").length) {
    $("input:radio").iCheck()
  }

  $(".slider").each(function() {
    var slider = $(this);
    $(this).find("img").eq(0).load(function() {
      slider.css("height",$(this).height());
    });
    
  });
  
  // Tabbed content
  
  $(".tabbed-content").each(function() {
    var tabs = $(this).children(".tabs").find(".tab");
    var tabContents = $(this).children(".tabs-content").children(".tab-content");
    
    if (!tabs.hasClass("act") && !$(this).hasClass("tabs-hidden")) {
      tabs.first().addClass("act");
    }
    
    tabContents.hide();
    tabContents.filter("[rel='"+tabs.filter(".act").attr("rel")+"']").show();
    
    tabs.click(function() {
      if (!tabs.parents().hasClass("tabs-triggered")) {
        
        tabs.removeClass("act");
        $(this).addClass("act");
        
        window.location.hash = $(this).attr("rel");
        
        tabContents.hide();
        
        tabContents.filter("[rel='"+$(this).attr("rel")+"']").fadeIn(250)
      }
      
    });
    
    tabs.find(".tabs-trigger").click(function() {
      if (tabs.parents().hasClass("tabs-triggered")) {
        
        tabs.removeClass("act");
        $(this).parents(".tab").addClass("act");
        
        window.location.hash = $(this).parents(".tab").attr("rel");
        
        tabContents.hide();
        
        tabContents.filter("[rel='"+$(this).parents(".tab").attr("rel")+"']").fadeIn(250)
      }
      
    });
    
  });
  
  var locationHash = window.location.hash.replace("#","");
  
  if ($(".tab[rel='" + locationHash + "']").length) {
    $(".tab[rel='" + locationHash + "']").click();
  }
  
  // Tabs prev/next
  
    if ($(this).find(".tabs-nav").length) {
      $(".tabbed-content").each(function() {
        var prev = $(this).find(".tabs-nav .prev");
        var next = $(this).find(".tabs-nav .next");
        
        var tabs = $(this).find(".tabs");
        
        if (tabs.find(".act").prev(".tab").length) {
          prev.show();
          prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
        } else {
          prev.hide();
        }
        
        if (tabs.find(".act").next(".tab").length) {
          next.show();
          next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
        } else {
          next.hide();
        }
        
        prev.click(function() {
          tabs.find(".act").prev(".tab").click();
          if (tabs.find(".act").prev(".tab").length) {
            next.show();
            $(this).find("span").html(tabs.find(".act").prev(".tab").find("span").html());
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          } else {
            $(this).hide();
            next.find("span").html(tabs.find(".act").next(".tab").find("span").html());
          }
        });
        
        next.click(function() {
          tabs.find(".act").next(".tab").click();
          if (tabs.find(".act").next(".tab").length) {
            prev.show();
            $(this).find("span").html(tabs.find(".act").next(".tab").find("span").html());
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          } else {
            $(this).hide();
            prev.find("span").html(tabs.find(".act").prev(".tab").find("span").html());
          }
        })
        
      });
    }

  $(".common-form select").customSelect();

  // Simple slider
  
  // if ($(".slider").length) {
    // $(".slider").each(function() {
      // $(this).simpleSlider({
        // width:530
      // });
    // });
  // }

  $(".fancybox").fancybox({
    padding: 0,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $(".form-text").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });

  $(".form-phone").mask("+7 (999) 999-99-99");

  validateForms();

  makeup();
  
});

function makeup() {

  $('.page-text img').filter(function() {
      var $th = $(this);
      return !$th.prev('img').length && !$(this).parents(".slider").length && ($th.parent().hasClass("page-text") || $th.parent("p").parent().hasClass("page-text")) && !$(this).next('img').length;
  }).each(function() {
      
    var $th = $(this);
    if (!$th.parents(".article-pic").length) {
      $th.wrap("<div class='article-pic' />")
      if ($th.attr("title")) $th.after("<div class='title' style='width:"+$th.width()+"px;'>"+$th.attr("title")+"</div>");
    }
    $th.load(function() {
      $th.next(".title").css("width",$th.width())
    });
  });

  if ($(".login-cont").length) {
    $(".login-cont").css("height","auto");
    $(".login-cont").css("height",$(".top-wrap").height() - $(".footer").height() - $(".header").height());
  } else if ($(".content .page-block").length == 1) {
    $(".content .page-block").css("height","auto");
    if ($(".content .page-block").height() < ($(".top-wrap").height() - $(".footer").height() - $(".header").outerHeight(true) - 95 - $(".content .page-block").innerHeight() + $(".content .page-block").height() - $(".content .page-block").outerHeight(true) + $(".content .page-block").outerHeight() - $(".content h1:first-child").outerHeight(true)) && !$(".innovations-form").length && !$(".welcome-steps").length) {
      $(".content .page-block").css("height",$(".top-wrap").height() - $(".footer").height() - $(".header").outerHeight(true) - 95 - $(".content .page-block").innerHeight() + $(".content .page-block").height() - $(".content .page-block").outerHeight(true) + $(".content .page-block").outerHeight() - $(".content h1:first-child").outerHeight(true));
    }
  }

  // $("blockquote .cont").each(function() {
    // $(this).find("p").first().html("<span class='quote quote-begin'>&laquo;</span>" + $(this).find("p").first().html())
    // $(this).find("p").last().html($(this).find("p").first().html() + "<span class='quote quote-end'>&raquo;</span>")
  // });
  
  $("ol li").each(function() {
    if (!$(this).find(".num").length) {
      var index = parseInt($(this).prevAll("li").length,10);
      index += 1;
      if ($(this).hasClass(".alternate")) {
        $(this).append("<div class='num'>"+index+"</div>");
      } else {
        $(this).append("<div class='num'>"+index+".</div>");
      }
    }
  });

  $("input.form-submit").each(function () {
    if ($(this)[0].tagName == "INPUT" && !$(this).parents("div").find("div.form-submit").length) {
      var divBtn = $("<div></div>");
      var submit = $(this);
      divBtn.attr("class",$(this).attr("class")).attr("id",$(this).attr("id")).html("<span>" + $(this).val() + "</span>");
      $(this).after(divBtn);
      $(this).hide();
      
      if ($(this).is(":disabled")) {
        divBtn.addClass("button-disabled")
      }
      
      divBtn.on("click",function () {
        submit.click();
      });
    }
    
  });
  
  $(".button").each(function() {
    //$(this).html("<span class='btn-cont'><span class='b-l'><span class='b-r'>"+$(this).html()+"</span></span></span>");
  });

  $("input:text, input:password, textarea").each(function() {
	$(this).addClass("initial");
    
    if ($(this).prop("tagName") == "INPUT") {
      // if (!$(this).parents(".input-wrapper").length) $(this).wrap("<div class='input-wrapper'></div>");
      $(this).focus(function() {
        $(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        $(this).prev().prev(".placeholder").hide();
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    } else {
      $(this).focus(function() {
		$(this).removeClass("initial");
        $(this).parents(".form-item").find(".placeholder").hide();
      });
      $(this).blur(function() {
        if (!$(this).val()) {
          $(this).addClass("initial");
          $(this).parents(".form-item").find(".placeholder").show();
        }
      });
    }
      
    $(this).parents(".form-item").find(".placeholder").click(function() {
      $(this).focus();
	  // alert(1);
    });
    
  });
  
}

function validateForms() {
  
  $(".common-form form").each(function() {
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        // element.parents(".input-wrapper").addClass("input-wrapper-error");
        error.insertAfter(element).wrap("<div class='error-wrapper' />");
        element.prev(".placeholder").addClass("placeholder-error")
        if (element[0].tagName == "SELECT") {
          element.parents(".form-item").find(".param-selector").addClass("param-sel-error")
        }
      },
      unhighlight: function(element, errorClass, validClass) {
        // $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
        $(element).next(".error-wrapper").remove();
        $(element).prev(".placeholder").removeClass("placeholder-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".form-item").find(".param-selector").removeClass("selector-error")
        }
      },
      invalidHandler: function(form, validatorcalc) {
          var errors = validatorcalc.numberOfInvalids();
          if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
              validatorcalc.errorList[0].element.focus();
          }
      }
    });
    
    if ($(this).find(".form-email").length) {
      $(this).find(".form-email").rules('add', {
        email: true,
        messages: {
          required:  "Введите правильный адрес!"
        }
      });
    }
    
    if ($(this).find(".form-date").length) {
      $(this).find(".form-date").rules('add', {
        messages: {
          required:  "Выберите дату!"
        }
      });
    }
    
    
  });  
    
}

function closePopup() {
  $(".tint").fadeTo(500,0,function() {
    $(this).remove();
  });
  $(".popup-act").removeClass("popup-act").fadeTo(300,0,function() {
    $(this).hide();
  });
}

function pupMakeup() {
  var popup = $(".popup-act");
  var pupTop = $(window).scrollTop() + ($(window).height() - popup.outerHeight(true))/2;
  if (pupTop < 20) pupTop = 20;
  $(".tint").css("height",$(window).height()).css("width",$("body").width());
  if (!popup.hasClass("price-popup")) {
    popup.css("top",pupTop).css("left",($(window).width()-popup.outerWidth(true))/2 - 20);
  } else {
    popup.css("margin-top",$(window).scrollTop() - popup.parent().offset().top - popup.parent().outerHeight(true) + ($(window).height()-popup.outerHeight(true))/2);
  }
  
}

function openPopup(pupId) {
  var popup = $("#"+pupId);
  $("body").append("<div class='tint' style='display:none;' />");
  popup.addClass("popup-act").fadeTo(500,1);
  
  $(".tint").fadeTo(300,1);
  pupMakeup();
  
  if (!popup.children(".popup-shadow").length) {
    popup.append("<div class='popup-shadow' />");
  } 
  
  jQuery(document).keydown(function(e){
    if (e == null) { // ie
      keycode = event.keyCode;
    } else { // mozilla
      keycode = e.which;
    }
    
    if(keycode == 27){ // escape, close box
      closePopup()
    }
    
  });
  
  $(".tint").on("click", function () {
    closePopup()
  });
  
  $(".popup .close, .popup .cancel").on("click", function () {
    closePopup()
  });
}

(function( $ ) {
  $.fn.simpleSlider = function(options) {
    var slider = $(this);
    
    if (!slider.parents(".simple-slider").length) {
      slider.css("width",options.width);
      // slider.css("height",options.height);
      slider.wrap("<div class='simple-slider' />");
      slider.children().each(function() {
        $(this).wrap("<div class='slide'><div class='pic-wrapper'><div class='pic' style='width:"+options.width+"px;'></div></div></div>")
        if (options.showtitles && $(this).attr("title")) {
          $(this).parents(".slide").append("<div class='img-descr'>"+$(this).attr("title")+"</div>")
        }
      });
      var items = $(this).children("div.slide");
      
      var sliderSize = items.length;
      
      items.each(function() {
        $(this).addClass("slide").attr("index",$(this).index());
        imgMarginTop = -$(this).find("img").height()/2+options.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        $(this).find("img").css("margin-top",imgMarginTop).after("<div class='pic-mask' />");
        if ($(this).find("img").hasClass("noframe")) {
          $(this).find(".pic-mask").hide();
        }
      });
      
      items.hide();
      items.eq(0).addClass("current").show();
      
      slider.css("height",items.eq(0).find("img").height());
      items.eq(0).find("img").load(function() {
        slider.css("height",items.eq(0).find("img").height());
      });
      
      
      if (sliderSize > 1) {
        slider.after("<div class='next' />");
        slider.after("<div class='prev' />");
      }
      
      // slider.find(".pic-mask").css("width",options.width-20)
      // slider.find(".pic-mask").css("height",options.height-20)
      
      var prevBtn = slider.parents(".simple-slider").find(".prev");
      var nextBtn = slider.parents(".simple-slider").find(".next");
      
      prevBtn.css("top",options.height/2-24)
      nextBtn.css("top",options.height/2-24)
      
      nextBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex < sliderSize-1) {
          curIndex++;
          items.eq(curIndex-1).fadeOut(250).removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).fadeOut(250).removeClass("current");
          items.eq(0).fadeIn(250).addClass("current");
          slider.css("height",items.eq(0).height());
        }
        imgMarginTop = -items.eq(curIndex).find("img").height()/2+slider.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        items.eq(curIndex).find("img").css("margin-top",imgMarginTop);
      });
      
      prevBtn.click(function() {
        curIndex = parseInt(slider.find(".current").attr("index"))
        if (curIndex > 0) {
          curIndex--;
          items.eq(curIndex+1).fadeOut(250).removeClass("current");
          items.eq(curIndex).fadeIn(250).addClass("current");
          slider.css("height",items.eq(curIndex).height());
        } else {
          items.eq(curIndex).fadeOut(250).removeClass("current");
          items.eq(sliderSize-1).fadeIn(250).addClass("current");
          slider.css("height",items.eq(sliderSize-1).height());
        }
        imgMarginTop = -items.eq(curIndex).find("img").height()/2+slider.height/2;
        if (imgMarginTop > 0) imgMarginTop = 0;
        items.eq(curIndex).find("img").css("margin-top",imgMarginTop);
      });
    
    }
    
  };
})( jQuery );

(function( $ ) {
  $.fn.customSelect = function() {
    var selects = $(this);
    selects.each(function () {
      var select = $(this);
      
      if (!$(this).next(".param-selector").length) {
        select.css("visibility","hidden").css("position","absolute").css("z-index","-1");
        select.after("<div class='param-selector' id='" + select.attr("id") + "-selector'>");
        var selector = select.next(".param-selector");
        
        if (select.is(":disabled")) {
          selector.addClass("selector-disabled")
        }
        
        
        selector.append("<div class='param-sel' />").append("<div class='dropdown' />");
        var dropdown = selector.find(".dropdown");
        // dropdown.append("<div class='top-border' />");
        var paramSel = selector.find(".param-sel");
        paramSel.addClass("initial");
        paramSel.append("<div class='arr' />");
        paramSel.append("<div class='sel-value' />");
        
        if (select.find("option[value=" + select.val() + "]").attr("flag")) {
          paramSel.find(".sel-value").html("<img src='" + select.find("option[value=" + select.val() + "]").attr("flag") + "' />" + select.find("option[value=" + select.val() + "]").html());
        } else {
          paramSel.find(".sel-value").html(select.find("option[value=" + select.val() + "]").html());
        }
        
        select.find("option").each(function () {
          if ($(this).attr("flag")) {
            var flag = "<img src=" + $(this).attr("flag") + " />";
          } else {
            flag = "";
          }
          if ($(this).val() != select.val()/* || select.attr("ttl")*/) {
            dropdown.append("<div val='" + $(this).attr("value") + "'>" + flag + $(this).html() + "</div>");
          } else {
            dropdown.append("<div style='display:none' val='" + $(this).attr("value") + "'>" + flag + $(this).html() + "</div>");
          }
        });
      
      
        paramSel.click(function() {
          if (!select.is(":disabled")) {
            if (dropdown.css("display") != "block") {
              $(".dropdown").fadeOut(150);
              $(".param-open").removeClass("param-open");
              dropdown.fadeIn(150);
              selector.addClass("param-open");
              var maxWidth = 0;
              
              // $(this).parents(".form-item").prevAll(".form-item").css("z-index","6000");
              // $(this).parents(".form-item").css("z-index","6001");
              // $(this).parents(".form-item").nextAll(".form-item").css("z-index","6000");
              
              dropdown.find("div").each(function () {
                if ($(this).width() >= maxWidth) {
                  maxWidth = $(this).width();
                }
                if (paramSel.width() >= maxWidth) {
                  maxWidth = paramSel.width() + 1;
                }
              });
              
              //paramSel.css("width", maxWidth + "px");
              // dropdown.find("div").css("width", maxWidth + "px");
              // dropdown.css("width", maxWidth);
              
              // ddOverflow = $("html").height() - (dropdown.offset().top + dropdown.height());
              // if (ddOverflow < 0) {
                // dropdown.css("margin-top", -30 - dropdown.height());
              // }
              
              //dropdown.css("top",paramSel.position().top + paramSel.height());
              
            } else {
              dropdown.fadeOut(150);
              selector.removeClass("param-open");
            }
          }
        });
        
        dropdown.find("div").click(function () {
          selector.removeClass("param-sel-error");
          paramSel.removeClass("initial");
          var div = $(this);
          paramSel.find(".sel-value").html($(this).html());
          if ($(this).attr("flag")) {
            paramSel.find(".sel-value").attr("flag",$(this).attr("flag"));
          }
          select.val($(this).attr("val")).change();
          if (select.hasClass("hide-ttl")) {
            //select.find("option[value='']").remove();
            dropdown.find("div[val='']").remove();
          }
          dropdown.fadeOut(150, function () {
            dropdown.find("div").show().removeClass("selected");
            div.addClass("selected");
            div.parents(".param-open").removeClass("param-open");
          });
          if ($(this).attr("val")) {
            selector.parents(".form-item").find(".error-wrapper").remove();
          }
        });
      
      }
    });
    
  };
})( jQuery );


jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле!",
    remote: "Please fix this field.",
    email: "Введите правильный e-mail",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
    var slider = $(this);
    var slides = slider.children(".slide");
    var sliderSize = slides.size();
    
    slider.append("<div class='lister'></div>");
    
    var lister = slider.children(".lister");
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    //sliderMakeup();
    
    if (sliderSize > 1) {
    
      for (i=1;i<=sliderSize;i++) {
        lister.append("<div class='item'></div>")
      }
      
      var listerItems = lister.children(".item");
      
      listerItems.eq(0).addClass("act");
      
      
      
      listerItems.on("click",function () {
        if (!$(this).hasClass("act")) {
          listerItems.removeClass("act");
          $(this).addClass("act");
          slides.fadeOut(250).removeClass("slide-act");
          slides.eq($(this).index()).fadeIn(250).addClass("slide-act");
          //sliderMakeup();
        }
      });
      
      // listerItems.bind("mouseover",function () {
        // $(this).click();
      // });
      
      slides.bind("click",function () {
        if (listerItems.filter(".act").next().length) {
          listerItems.filter(".act").next().click();
        } else {
          listerItems.eq(0).click();
        }
      });
      
      var play = 1;
      
      slider.bind("mouseover",function () {
        play = 0;
      });
      slider.bind("mouseout",function () {
        play = 1;
      });
      
      if (play) {
        var t = setInterval(function () {
          if (play) {
            if (lister.find(".act").index() < sliderSize-1) {
              lister.find(".act").next(".item").click();
            } else {
              listerItems.eq(0).click();
            }
          }
        },5000);
      }
    }
  }
})( jQuery );