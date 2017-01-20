var input = document.getElementById('imageInput');
var faceTexture = document.getElementById('faceTexture');

input.addEventListener('change', function(event) {
	var file = event.target.files[0]; 
	var header = document.getElementById('header');
	var subheader = document.getElementById('subheader');
	var scene = document.getElementById('scene');
	var info = document.getElementById('info');


	header.classList.remove('before');
	header.classList.add('after');
	subheader.style.display = 'none';
	info.style.display = 'none';
	scene.innerHTML = `<a-scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>
          <img id="faceTexture" src=${URL.createObjectURL(file)}>
        </a-assets>

        <!-- snowflakes -->

		<a-sphere position="0 1.25 -1" radius=".03" color="#eaf4ff">
			<a-animation attribute="position" from="0 10 0" to="0 0 0" dur="3000" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="-2 10 2" to="-2 0 2" dur="2400" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".04" color="#eaf4ff">
			<a-animation attribute="position" from="-4 10 -3" to="-4 0 -3" dur="4200" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="8 10 -3" to="8 0 -3" dur="2900" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="4 10 -7" to="4 0 -7" dur="4000" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="8 10 -1" to="8 0 -1" dur="3500" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".02" color="#eaf4ff">
			<a-animation attribute="position" from="-1 10 8" to="-1 0 8" dur="3000" repeat="indefinite"></a-animation>
		</a-sphere>
		<a-sphere position="0 1.25 -1" radius=".03" color="#eaf4ff">
			<a-animation attribute="position" from="5 10 3" to="5 0 3" dur="3000" repeat="indefinite"></a-animation>
		</a-sphere>


        <a-sphere position="0 1.25 -1" radius="1.25" color="#eaf4ff">
            <a-sphere position="0 1.25 0" radius="1" color="#eaf4ff">
			  <!-- BUTTONS -->
              <a-cylinder rotation="90 0 0" position="0 0.2 1" radius="0.08" height=".1" color="#000000">
              </a-cylinder>
              <a-cylinder rotation="90 0 0" position="0 -0.2 1" radius="0.08" height=".1" color="#000000"> 
              </a-cylinder>

              <!-- ARMS -->
              <a-cylinder rotation="0 0 -75" position="1 0.6 0" radius="0.08" height="1.5" color="#5b3601">
              </a-cylinder>
              <a-cylinder rotation="0 0 75" position="-1 0.3 0" radius="0.08" height="1.5" color="#5b3601"> 
              </a-cylinder>
              <a-sphere rotation="0 -90 0" position="0 1 0" radius=".8" color="#eaf4ff" src="#faceTexture"></a-sphere>
            </a-sphere>
        </a-sphere>
        <a-plane rotation="-90 0 0" width="10" height="7" color="#edffe8"></a-plane>
        <a-sky color="#99b3ff"></a-sky>
        <a-entity position="0 0 3.8">

          <a-camera></a-camera>
        </a-entity>
      </a-scene>`;
});