import '../css/app.scss';
import $ from "jquery";


let testTradingView = {};

testTradingView.showMore = function() {
	$(".table-button").click(function(){
	  $('.table-line--hidden').show(250);
	});
}
testTradingView.actionsFollowers = function() {
	$(".top-line--icon").click(function(){
		if($(this).attr('data-status') === 'follow') {
			$(this).attr('data-status', 'unfollow');
			$(this).addClass('top-line--icon-add');
			$(this).addClass('top-line--icon--unfollow');
			$(this).removeClass('top-line--icon--follow');

			let countFollowers = parseFloat($(this).parents('.table-line__item').parents('.table-master__line').find('.table-line__item--wrapper-row').find('.table-line__item--five').text());
			let newQuantityFollowers = countFollowers + 1;
			$(this).parents('.table-line__item').parents('.table-master__line').find('.table-line__item--wrapper-row').find('.table-line__item--five').text(newQuantityFollowers);
	  } else {
			$(this).removeClass('top-line--icon-add');
			$(this).attr('data-status', 'follow');
			$(this).removeClass('top-line--icon--unfollow');
			$(this).addClass('top-line--icon--follow');

			let countFollowers = parseFloat($(this).parents('.table-line__item').parents('.table-master__line').find('.table-line__item--wrapper-row').find('.table-line__item--five').text());
			let newQuantityFollowers = countFollowers - 1;
			$(this).parents('.table-line__item').parents('.table-master__line').find('.table-line__item--wrapper-row').find('.table-line__item--five').text(newQuantityFollowers);
	  }
	});
	
	

	$('.top-line--icon').hover(function () {
	  if($(this).attr('data-status') === 'follow') {
			$(this).addClass('top-line--icon--follow');
	  } else {
			$(this).addClass('top-line--icon--unfollow');
	  }
	}, function() {
		$(this).removeClass('top-line--icon--follow');
		$(this).removeClass('top-line--icon--unfollow');

	});
}

$(document).ready(function () {
	testTradingView.showMore();
	testTradingView.actionsFollowers();
});