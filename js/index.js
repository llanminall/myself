$(function () {
  Splitting();
  let con01 = $("#con01").offset().top;
  let con02 = $("#con02").offset().top;
  let con03 = $("#con03").offset().top;
  let con04 = $("#con04").offset().top;
  let con05 = $("#con05").offset().top;

  $(".txt03").addClass("on");
  $(".look").find("img").addClass("on");

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);

    if (sc >= con01 && sc < con02) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(0).addClass("on");
    }
    if (sc >= con02 && sc < con03) {
      $("#con02 .education_wrap").addClass("on");
      $("#con02 .skill_wrap").addClass("on");
      $("#con02 .character_wrap").addClass("on");
      $("#con02 .introduce_txt").addClass("on");
      $(".navi li").removeClass("on");
      $(".navi li").eq(1).addClass("on");
    }
    if (sc >= con03 && sc < con04) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(2).addClass("on");
    }
    if (sc >= con04 && sc < con05) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(3).addClass("on");
    }
    if (sc >= con05) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(4).addClass("on");
    }
    if (sc >= con01 && sc < con05) {
      $("#con01 .header").addClass("on");
    }

    $(".header li").on("click", function () {
      let s = $(this).index();
      //  console.log(i);
      let target = $("#wrap > div").eq(s).offset().top;
      console.log(target);
      $("html").stop().animate({ scrollTop: target });
    });
  });
  $(".navi li").on("click", function () {
    let k = $(this).index();
    //  console.log(i);
    let target = $("#wrap > div").eq(k).offset().top;
    console.log(target);
    $("html").stop().animate({ scrollTop: target });
  });

  //con01모션
  setInterval(function () {
    $(".marquee ").animate({ "margin-left": "-300px" }, 1000, function () {
      $(".marquee li:first-child").appendTo(".marquee");
      $(".marquee").css("margin-left", "0");
    });
  }, 2000);
  $(".mainImg").on("mouseenter", function () {
    $(".arrow").find("img").addClass("on");
    $(".mainImg").find("img").addClass("on");
  });
  $(".mainImg").on("mouseleave", function () {
    $(".arrow").find("img").removeClass("on");
    $(".mainImg").find("img").removeClass("on");
  });

  //con02모션
  $(".skill_img01 li").on("mouseenter", function () {
    let i = $(this).index();
    $(".skill_img01 li").removeClass("on");
    $(".skill_img01 li").find("img").eq(i).addClass("on");
  });
  $(".skill_img02 li").on("mouseenter", function () {
    let j = $(this).index();
    console.log(j);
    $(".skill_img02 li").find("img").eq(j).addClass("on");
  });
  $(".skill_img01 li").on("mouseleave", function () {
    let i = $(this).index();
    $(".skill_img01 li").find("img").eq(i).removeClass("on");
  });
  $(".skill_img02 li").on("mouseleave", function () {
    let j = $(this).index();
    console.log(j);
    $(".skill_img02 li").find("img").eq(j).removeClass("on");
  });

  //con03모션
  $(".view01").on("mouseenter", function () {
    $(".view01").addClass("on");
  });
  $(".view01").on("mouseleave", function () {
    $(".view01").removeClass("on");
  });
  $(".view02").on("mouseenter", function () {
    $(".view02").addClass("on");
  });
  $(".view02").on("mouseleave", function () {
    $(".view02").removeClass("on");
  });
  // con03이미지모션
  $(".project_box li").on("mouseenter", function () {
    $(this).find("img").addClass("on");
  });
  $(".project_box li").on("mouseleave", function () {
    $(this).find("img").removeClass("on");
  });
  // con04 모션
  let f = 0;
  $(".illust_modal01 li").on("click", function () {
    f = $(this).index();
    $(".illust_wrap02").show();
    $(".illust_modal02 li").eq(f).animate({ width: "100%", height: "100%" });
  });
  $(".close").on("click", function () {
    $(".illust_wrap02").hide();
    $(".illust_modal02 li").animate({ width: "0%", height: "0%" });
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".illust_modal01",
        start: "top 80%",
        end: "40% 70%",
        scrub: 2,
        // markers: true,
      },
    })
    .to(".illust_modal01 li:nth-child(1)", { y: "0px", duration: 1 }, 0.2)
    .to(".illust_modal01 li:nth-child(2)", { y: "0px", duration: 1 }, 0.4)
    .to(".illust_modal01 li:nth-child(3)", { y: "0px", duration: 1 }, 0.6)
    .to(".illust_modal01 li:nth-child(4)", { y: "0px", duration: 1 }, 0.8)
    .to(".illust_modal01 li:nth-child(5)", { y: "0px", duration: 1 }, 1)
    .to(".illust_modal01 li:nth-child(6)", { y: "0px", duration: 1 }, 1);

  // con05모션
  $("#con05 .thanks_wrap").on("click", function () {
    $("#con05 .thanks_card").toggleClass("on");
  });
  //   let t1 = gsap.timeline();
  //   t1.to(".flower", { y: -200, opacity: 1, rotation: 360, duration: 1 })
  //     .to(".flower02", { y: -250, rotation: 360, opacity: 1, duration: 1 })
  //     .to(".flower03", { y: -300, opacity: 1, rotation: 360, duration: 1 });
});
