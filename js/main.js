$(document).ready(function(){

	  
   $('.modal-trigger').leanModal();
   $('#modal1').openModal();
   $('#linhaX').keyup(function(){
   		$('#labelX').text($(this).val());
   })

   $('#linhaY').keyup(function(){
   		$('#labelY').text($(this).val());
   })  

   $('#tituloCfg').keyup(function(){
   		$('#titulo').text($(this).val());
   })


   $('#larguraCfg').keyup(function(){
   		$('.cont').css('max-width',$(this).val()+'px')
   })


   $('#add').click(function(){
   	$('#alturaBarAdd').focus();
   })

	$('#addBar').click(function(){
		
		addBar();
	})



	$('#formAdd').submit(function(){
		addBar();
		$('#modal2').closeModal();
	})


	$('.container-grafico').on('click','.bar',function(){
		altura = prompt('Digite a altura');
		$(this).attr('data-height',altura);
		grafico();
	})


   maxBar = 350;  
   grafico();
})

function grafico(){
	$('.bar').each(function (i) {
			$(this).css('height','0px');

            alt = $(this).attr('data-height');

            altura = (maxBar*alt/100)
            if(alt == 0)
            	altura = 2;

             if(alt > 100)
            	altura = 100;

             if(alt < 0)
            	altura = 0;

            $(this).css('height',altura+'px');
    });
}


function addBar(){
		altura = $('#alturaBarAdd').val();
		 if(altura == 0)
            	altura = 2;

             if(altura > 100)
            	altura = 100;

             if(altura < 0)
            	altura = 0;

		html = '<div class="bar" data-height="'+altura+'"></div>'
		$('#alturaBarAdd').val('');
		$('.container-grafico').append(html);
		$('.container-grafico').scrollLeft(9999);
		grafico();
}