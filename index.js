// 함수 정의를 미리 한다. (ready 보다 먼저)
var moveScroll = function(selector){
	// selector : home, about.... 클래스명
	// os에는 위치에 대한 숫자값이 들어간다.
	var os = $('.' + selector).offset().top
	//스크롤을 이동하는 에니메이션 추가!
	// window를 쓰지 않고 아래와 같이 선택한 이유:
	// 브라우저 호환성이 가장 좋은 선택자이므로.
	$('html, body').animate({scrollTop: os}, 1000)
}

$(document).ready(function(){
	// about-me 클래스 부분을 펼치고 싶다. 스크롤이 특정 위치일 때.
	$('#about-mind').hide()
	$('#about-history').hide()
	$('.guage').css('width', 0) //게이지바의 너비가 전부 0px이 된다. 
	
	var isAboutShow = false
	var isGuageShow = false
		
	// 타이핑 효과
	var comment = "즐기는 자가 성공한다."
	var idx = 0
	//문자열을 분리한다.
	comment = comment.split('')
	console.log(comment)
	
	// 배열에 들어있는 문자를 한 글자씩 보여지게 한다.
	// 시간 간격을 두고, 동작한다.
	var tickin = setInterval(typing, 300)
	
	function typing(){
		if(idx < comment.length){
			if(comment[idx] == '*'){
				$('.text').append('<br />')
			}else {
				$('.text').append(comment[idx])
			}
			idx++;
		}else {
			clearInterval(tickin)
		}
	}
	
	$(window).scroll(function(){
		if(!isAboutShow){
			if($(window).scrollTop() > $('.about-me').offset().top){
				isAboutShow = true //이렇게 하고나면 다시는 동작하지 않는다!
				$('#about-mind').slideToggle(500)
				$('#about-history').slideToggle(500)
			}
		}
		
		if(!isGuageShow){
            if($(window).scrollTop() > $('#all-skills').offset().top-150){
				// 게이지가 생겨나는 애니메이션을 하면된다.
				// width 가 0이었다가 일정 수준만큼 늘어나면 된다!
				// 게이지바가 3개이고, 각각 게이지가 다르다! 90, 80, 100
				$($('.guage')[0]).animate({'width':'90%'}, 1000)
				$($('.guage')[1]).animate({'width':'80%'}, 1000)
				$($('.guage')[2]).animate({'width':'100%'}, 1000)
				isGuageShow = true
			}
		}
		
	})
	
})