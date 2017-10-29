$(document).ready(function(){
    $('#datepicker').datepicker({
        //..
        format: 'dd/mm/yyyy',
    	startDate: '+1d',
    	endDate: '+7d',
        multidate: 2 //Just allow 2 dates to be picked start and enddate
    });
    
    $("#dd").on('click', function(){
        $(this).toggleClass('active');
    });

});