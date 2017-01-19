var input = document.getElementById('imageInput');
var faceTexture = document.getElementById('faceTexture');

input.addEventListener('change', function(event) {
	var file = event.target.files[0]; 
	var header = document.getElementById('header');
	var subheader = document.getElementById('subheader');
	var scene = document.getElementById('scene')


	header.classList.remove('before');
	header.classList.add('after');
	subheader.style.display = 'none';
	scene.innerHTML = `<a-scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>
          <img id="faceTexture" src=${URL.createObjectURL(file)}>
        </a-assets>

        <!-- snowflakes -->

		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="0 10 0" to="0 0 0" dur="3000"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="-2 10 2" to="-2 0 2" dur="2000"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="-4 10 -3" to="-4 0 -3" dur="5000"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="8 10 -3" to="8 0 -3" dur="2900"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="4 10 -7" to="4 0 -7" dur="4000"></a-animation>
		</a-sphere>


        <a-sphere position="0 1.25 -1" radius="1.25" color="#eaf4ff">
            <a-sphere position="0 1.25 0" radius="1" color="#eaf4ff">
              <a-cylinder rotation="0 0 -75" position="1 0.7 0" radius="0.08" height="1.5" color="brown">
              </a-cylinder>
              <a-cylinder rotation="0 0 75" position="-1 0.5 0" radius="0.08" height="1.5" color="brown"> 
              </a-cylinder>
              <a-sphere position="0 1 0" radius=".75" color="#eaf4ff" src="#faceTexture"></a-sphere>
            </a-sphere>
        </a-sphere>
        <a-plane rotation="-90 0 0" width="10" height="7" color="#EDFFE8"></a-plane>
        <a-sky color="#99b3ff"></a-sky>
        <a-entity position="0 0 3.8">

          <a-camera></a-camera>
        </a-entity>
      </a-scene>`;
});