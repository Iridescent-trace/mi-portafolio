

//FUNCION POPOVERS BOOTSTRAP
$(function () {
	$('[data-toggle="popover"]').popover()
})

//VENTANAS MODALES
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//TOOLTIP
$(function () {
$('[data-toggle="tooltip"]').tooltip()
})
