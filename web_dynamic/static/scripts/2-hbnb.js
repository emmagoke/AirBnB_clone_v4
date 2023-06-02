$(document).ready(function () {
 let check = {};
 $('input:checkbox').change(function() {
   if ($(this).is(':checked')) {
     check[$(this).data('id')] = $(this).data('name');
   } else {
     delete check[$(this).data('id')];
   }
   $('div.amenities h4').html(function () {
     let amenity = Object.values(check);
     if (amenity.length === 0) {
       return ('&nbsp')
     } else {
       return (amenity.join(', '))
     }
   })
 })
 $.get("http://localhost:5001/api/v1/status/").done(function(data) {
   $('div#api_status').addClass('available');
 }).fail(function(data) {
   $('div#api_status').removeClass('available');
 })
})

// $(document).ready(init);

// const HOST = '0.0.0.0';

// function init () {
//   const amenityObj = {};
//   $('.amenities .popover input').change(function () {
//     if ($(this).is(':checked')) {
//       amenityObj[$(this).attr('data-name')] = $(this).attr('data-id');
//     } else if ($(this).is(':not(:checked)')) {
//       delete amenityObj[$(this).attr('data-name')];
//     }
//     const names = Object.keys(amenityObj);
//     $('.amenities h4').text(names.sort().join(', '));
//   });

//   apiStatus();
// }

// function apiStatus () {
//   const API_URL = `http://${HOST}:5001/api/v1/status/`;
//   $.get(API_URL, (data, textStatus) => {
//     if (textStatus === 'success' && data.status === 'OK') {
//       $('#api_status').addClass('available');
//     } else {
//       $('#api_status').removeClass('available');
//     }
//   });
// }