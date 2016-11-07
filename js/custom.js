function upTime(countTo) {
			const M = 60*60*1000;
			now = new Date();
			countTo = new Date(countTo);
			difference = (now-countTo);
			days=Math.floor(difference/(M*24)*1);
			
			hours=Math.floor((difference%(M*24))/(M)*1);
			mins=Math.floor(((difference%(M*24))%(M))/(60*1000)*1);
			secs=Math.floor((((difference%(M*24))%(M))%(60*1000))/1000*1);
		
			$('#days').html(days);
			$('#hours').html(hours);
			$('#minutes').html(mins);
			$('#seconds').html( secs);
			clearTimeout(upTime.to);
			upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}
jQuery(document).ready(function($) {
	$('#head').slabText();
	$('#head2').slabText();

	upTime('sept,19,2016,08:00:00');
});