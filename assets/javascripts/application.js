/*! http://responsiveslides.com v1.54 by @viljamis */
!function(e,t,n){e.fn.responsiveSlides=function(a){var s=e.extend({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:e.noop,after:e.noop},a);return this.each(function(){n++;var o,i,r,l,c,u,d=e(this),f=0,p=d.children(),v=p.size(),h=parseFloat(s.speed),m=parseFloat(s.timeout),C=parseFloat(s.maxwidth),w=s.namespace,g=w+n,x=w+"_nav "+g+"_nav",$=w+"_here",b=g+"_on",y=g+"_s",k=e("<ul class='"+w+"_tabs "+g+"_tabs' />"),_={"float":"left",position:"relative",opacity:1,zIndex:2},T={"float":"none",position:"absolute",opacity:0,zIndex:1},I=function(){var e=(document.body||document.documentElement).style,t="transition";if("string"==typeof e[t])return!0;o=["Moz","Webkit","Khtml","O","ms"];var n,t=t.charAt(0).toUpperCase()+t.substr(1);for(n=0;n<o.length;n++)if("string"==typeof e[o[n]+t])return!0;return!1}(),z=function(t){s.before(t),I?(p.removeClass(b).css(T).eq(t).addClass(b).css(_),f=t,setTimeout(function(){s.after(t)},h)):p.stop().fadeOut(h,function(){e(this).removeClass(b).css(T).css("opacity",1)}).eq(t).fadeIn(h,function(){e(this).addClass(b).css(_),s.after(t),f=t})};if(s.random&&(p.sort(function(){return Math.round(Math.random())-.5}),d.empty().append(p)),p.each(function(e){this.id=y+e}),d.addClass(w+" "+g),a&&a.maxwidth&&d.css("max-width",C),p.hide().css(T).eq(0).addClass(b).css(_).show(),I&&p.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"}),1<p.size()){if(h+100>m)return;if(s.pager&&!s.manualControls){var q=[];p.each(function(e){e+=1,q+="<li><a href='#' class='"+y+e+"'>"+e+"</a></li>"}),k.append(q),a.navContainer?e(s.navContainer).append(k):d.after(k)}if(s.manualControls&&(k=e(s.manualControls),k.addClass(w+"_tabs "+g+"_tabs")),(s.pager||s.manualControls)&&k.find("li").each(function(t){e(this).addClass(y+(t+1))}),(s.pager||s.manualControls)&&(u=k.find("a"),i=function(e){u.closest("li").removeClass($).eq(e).addClass($)}),s.auto&&(r=function(){c=setInterval(function(){p.stop(!0,!0);var e=v>f+1?f+1:0;(s.pager||s.manualControls)&&i(e),z(e)},m)})(),l=function(){s.auto&&(clearInterval(c),r())},s.pause&&d.hover(function(){clearInterval(c)},function(){l()}),(s.pager||s.manualControls)&&(u.bind("click",function(t){t.preventDefault(),s.pauseControls||l(),t=u.index(this),f===t||e("."+b).queue("fx").length||(i(t),z(t))}).eq(0).closest("li").addClass($),s.pauseControls&&u.hover(function(){clearInterval(c)},function(){l()})),s.nav){w="<a href='#' class='"+x+" prev'>"+s.prevText+"</a><a href='#' class='"+x+" next'>"+s.nextText+"</a>",a.navContainer?e(s.navContainer).append(w):d.after(w);var g=e("."+g+"_nav"),D=g.filter(".prev");g.bind("click",function(t){if(t.preventDefault(),t=e("."+b),!t.queue("fx").length){var n=p.index(t);t=n-1,n=v>n+1?f+1:0,z(e(this)[0]===D[0]?t:n),(s.pager||s.manualControls)&&i(e(this)[0]===D[0]?t:n),s.pauseControls||l()}}),s.pauseControls&&g.hover(function(){clearInterval(c)},function(){l()})}}if("undefined"==typeof document.body.style.maxWidth&&a.maxwidth){var j=function(){d.css("width","100%"),d.width()>C&&d.css("width",C)};j(),e(t).bind("resize",function(){j()})}})}}(jQuery,this,0),$(document).ready(function(e){e(".features-filter-selector-wrap").on("click",".features-selector",function(t){t.preventDefault(),event.stopPropagation(),e(this).closest(".features-filter-selector-wrap").addClass("active"),console.log("foo"),e("body").toggleClass("opened")}),e(".features-filter-selector-wrap").on("click",".features-filter-value",function(t){var n=e(this).attr("data-value"),a=e(this).text();e(this).closest(".features").removeClass().addClass("features "+n),e(this).closest(".features-filter-selector-wrap").removeClass("active").find(".features-selected-value").text(a)}),e(".sha-link").on("click",function(){e(this).parent().find(".sha-tooltip").toggle()}),e("body").on("click",function(){e(this).hasClass("opened")&&e(".features-filter-selector-wrap").hasClass("active")&&(e(".features-filter-selector-wrap").removeClass("active"),e("body").removeClass("opened"))})}),$(function(){var e=$(".navbtn"),t=$(".mainnav");$(window).on("resize",function(){$(this).width()<570&&t.hasClass("keep-nav-closed")&&$(".mainnav").hide().removeAttr("class"),e.is(":hidden")&&t.is(":hidden")&&$(window).width()>569&&$(".mainnav").show().addClass("keep-nav-closed")}),$(".navbtn").on("click",function(e){e.preventDefault(),$(".mainnav").toggleClass("open")}),$(".menu").click(function(){$(this).toggleClass("open"),$(".slidenav").toggleClass("open"),$("body").toggleClass("nav-open")}),$(window).scroll(function(){var e=$(window).scrollTop();e>1?$(".top").addClass("scroll-on"):$(".top").removeClass("scroll-on")})}),jQuery(document).ready(function(e){e(".help_cta").click(function(t){e(".signup").slideDown("fast")}),e(".signup .close").click(function(t){e(".signup").slideUp("fast")})}),jQuery(document).ready(function(e){e(".rslides").responsiveSlides({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:function(){},after:function(){}})}),$(document).ready(function(){$(".back-top").hide(),$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".back-top").fadeIn():$(".back-top").fadeOut()}),$(".back-top").click(function(){return $("body,html").animate({scrollTop:0},800),!1})})});