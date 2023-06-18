// // Initialize and display the map
// function initMap() {
//     // Set the coordinates for your location
//     var myLatLng = { lat: 40.7128, lng: -74.0060 };
  
//     // Create a new map instance
//     var map = new google.maps.Map(document.getElementById("map"), {
//       center: myLatLng,
//       zoom: 12
//     });
  
//     // Add a marker to the map
//     var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       title: "My Location"
//     });
//   }
  
//   var id=document.getElementById("downloadButton");
//   id.addEventListener("click", function() {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "/home/ali/Downloads/ALI/Practice_Javascipt/ALI_RAZA_SOOMRO_CV.docx", true);
//     xhr.responseType = "blob";
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             var downloadLink = document.createElement("a");
//             var blob = new Blob([xhr.response], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
//             var url = URL.createObjectURL(blob);
//             downloadLink.href = url;
//             downloadLink.download = "ALI_RAZA_SOOMRO_CV.docx";
//             downloadLink.click();
//         }
//     };
//     xhr.send();
// });


