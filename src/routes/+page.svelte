<div class="theme_switcher">
	<img src="$lib/assets/1_arrow6_left.png" class="left" id="left" />
	<img src="$lib/assets/1_arrow6_right.png" class="right" id="right" />
</div>
<div class="streamPlayer box" id="center">
	<div class="topbar">
		<img src="$lib/assets/card.png" class="drag" id="drag" />
		<img src="$lib/assets/1_small.png" class="size small" id="size" />
		<p class="nowplaying" style="grid-row: 1;"> 
			Now Playing: <span class="metadata" id="metadata"></span> 
		</p>
	</div>
	
	<div class="controlbox">
		<button style="grid-row: 1;" class="streambtn" id="play">
			<img id="play_img" class="play_img" src="$lib/assets/1_play.png" /> 
		</button>
		<button style="grid-row: 1;" class="streambtn" id="stop">
			<img id="pause_img" class="pause_img" src="$lib/assets/1_pause.png" />
		</button>
		<button style="grid-row: 1;" class="streambtn" id="link">
			<img id="link_img" class="link_img" src="$lib/assets/3_disk_pile.png" />
		</button>
		<button style="grid-row: 1;" class="streambtn" id="youtube">
			<img id="youtube_img" class="youtube_img" src="$lib/assets/3_projector.png" />
		</button>
		<div class="borders"><input type="range" min="1" max="100" value="50" class="slider" id="volume"></div>
		<img id="speaker_img" class="speaker_img" src="$lib/assets/3_speaker.png" />

	</div>

	<div id="canvasParent" style=" display: grid;">
		<canvas id="canvas" style="display: grid;grid-column: 1;grid-row: 1;margin-left: 30px;" width="770"
			height="360"></canvas>
		<table id="canvasCover"
			style="width: 800px;height: 350px;grid-column: 1;z-index: 999;grid-row: 1;grid-template-columns: repeat(1, 20px); border: 1px solid; table-layout: fixed; border-collapse: collapse">
			<tbody>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> +30dB</p>
					</td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="147.5"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="64.2"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="147.5"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="64.2"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="147.5"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="64.2"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="38"></td>
					<td style="width: 0px; border-left: .5px solid;" rowspan="10"></td>
					<td width="27"></td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> +25dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> +20dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> +15dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> +10dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> +5dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> 0dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> -5dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> -10dB</p>
					</td>
				</tr>
				<tr style="border: 1px solid;">
					<td width="25">
						<p style="font-size: 10px; grid-column: 1;"> -15dB</p>
					</td>
				</tr>
			</tbody>
		</table>
		<table id="canvasFooter" style="width:800px; height: 13px;">
			<tr>
				<td width="10"></td>
				<td width="160">
					<p class="hertz">10Hz</p>
				</td>
				<td width="60">
					<p class="hertz">50Hz</p>
				</td>
				<td width="165">
					<p class="hertz">100Hz</p>
				</td>
				<td width="66">
					<p class="hertz">500Hz</p>
				</td>
				<td width="150">
					<p class="hertz">1kHz</p>
				</td>
				<td width="65">
					<p class="hertz">5kHz</p>
				</td>
				<td>
					<p class="hertz">10kHz</p>
				</td>
				<td>
					<p class="hertz">15kHz</p>
				</td>
				<td>
					<p class="hertz">20kHz</p>
				</td>
			</tr>
		</table>
	</div>


</div>

<div class="linksbox box">
	<div class="topbar">
		<img src="$lib/assets/card.png" class="drag" id="drag" />
		<img src="$lib/assets/1_small.png" class="size small" id="size" />
		<p class="chatbar" style="grid-row: 1;">Stream Links</p>
	</div>
	<a style="grid-row: 2; grid-column: 1;" href="https://subspacefm.xyz:8443/subspacefm.ogg.m3u" download>M3U</a>
	<a style="grid-row: 2; grid-column: 3;" href="https://subspacefm.xyz:8443/subspacefm.ogg.xspf" download>XSPF</a>
</div>

<div class="chatbox box">
	<div class="topbar">
		<img src="$lib/assets/card.png" class="drag" id="drag" />
		<img src="$lib/assets/1_small.png" class="size small" id="size" />
		<p class="chatbar" style="grid-row: 1;"> Chat </p>
	</div>
	<div id="toolbar" class="toolbar">
		<button style="grid-row: 1;" class="toolbtn" id="login"> <img id="login" class="login_img"
				src="$lib/assets/2_small_lock.png" /> </button>
		<button style="grid-row: 1;" class="toolbtn" id="userlist"> <img id="userlist" class="userlist_img"
				src="$lib/assets/2_small_daybook.png" /> </button>
		<button style="grid-row: 1;" class="toolbtn" id="help"> <img id="questiong_img" class="question_img"
				src="$lib/assets/2_small_question.png" /> </button>

	</div>

	<div id="message-container"></div>
	<img style="display:none;" src="$lib/assets/2_small_baby.png" class="hidden baby" id="baby" />
	<img style="display:none;" src="$lib/assets/2_mac_speech.png" class="hidden sys" id="sys" />
	<form id="send-container" autocomplete="off">
		<input type="text" id="message-input">
		<button class="send" type="submit" id="send-button"><img src="$lib/assets/2_speech_embossed.png"
				class="send_img" id="send_img" /></button>
	</form>
</div>
<div class="loginbox box">
	<div class="topbar">
		<img src="$lib/assets/card.png" class="drag" id="drag" />
		<img src="$lib/assets/1_small.png" class="size small" id="size" />
		<p class="loginbar" style="grid-row: 1;"> Login </p>
	</div>
	<form id="login-container" autocomplete="off">
		<table>
			<tbody>
				<tr>
					<label for="username-input"> Username: </label><input type="text" id="username-input">
				</tr>
				<tr>
					<label for="password-input"> Password: </label>
				</tr>
				<tr>
					<input type="password" id="password-input">
					<button class="login" type="button" id="login-button"><img src="$lib/assets/1_yes1.png"
							class="login_img" id="login_img" /></button>
				</tr>
			</tbody>
		</table>
	</form>
</div>

<div class="youtubebox box">
	<div class="topbar">
		<img src="$lib/assets/card.png" class="drag" id="drag" />
		<img src="$lib/assets/1_small.png" class="size small" id="size" />
		<p class="youtubebar" style="grid-row: 1;"> <span id="youtube_title"></span> </p>
	</div>
	<iframe id="video_frame" width="420" height="315" src="">
</div>

<style>
	@import '$lib/assets/font/stylesheet.css';

	:root {
	  --background: url('$lib/assets/enlighten.jpg') no-repeat center center fixed;
	  --color-primary: rgba(255, 255, 255, 0.85);
	  --color-accent: #000000;
	  --color-button: #e5e5e5;
	  --color-active: lightgrey;
	  --font-color: black;
	  --secondary-font: black;
	  --logo: black;
	  --color-image2: #000000;
	  --color-image1: #e5e5e5;
	}

	.theme-light {
	  --background: url('$lib/assets/enlighten.jpg') no-repeat center center fixed;
	  --color-primary: rgba(255, 255, 255, 0.85);
	  --color-accent: #000000;
	  --color-button: #e5e5e5;
	  --color-active: lightgrey;
	  --font-color: black;
	  --secondary-font: black;
	  --logo: black;
	  --color-image2: #000000;
	  --color-image1: #e5e5e5;
	  --visualizer1: #000;
	  --visualizer2: #777;
	  --visualizer3: #bbb;
	  --visualizer_cap: #131b1c;
	}

	.theme-dark {
	  --background: url('$lib/assets/lenigma.jpg') no-repeat center center fixed;
	  --color-primary: rgba(54, 55, 60, 0.72);
	  --color-button: #49625e73;
	  --color-accent: #352c2c;
	  --color-active: rgba(54, 55, 60, 0.72);
	  --font-color: #bcbfbc;
	  --secondary-font: #303935;
	  --logo: white;
	  --color-image2: #352c2c;
	  --color-image1: #717e80;
	  --visualizer1: #717e80;
	  --visualizer2: #3d4445;
	  --visualizer3: #131b1c;
	  --visualizer_cap: #131b1c;
	}

	.theme-pink {
	  --background: url('$lib/assets/pink.jpg') no-repeat top center fixed;
	  --background-color: ;
	  --color-primary: rgba(255, 255, 255, 0.24);
	  --color-button: #c6acdc;
	  --color-accent: #af9bbb;
	  --color-active: rgba(255, 255, 255, 0.24);
	  --font-color: #ac5fc2;
	  --secondary-font: #ac5fc2;
	  --logo: white;
	  --color-image2: #9b52ae;
	  --color-image1: #ddd5e1;
	  --visualizer1: #af9bbb;
	  --visualizer2: #c5bdc9;
	  --visualizer3: #fff;
	  --visualizer_cap: #fff;
	}

	.theme-green {
	  --background: url('$lib/assets/green.jpg') no-repeat center center fixed;
	  --color-primary: rgba(101, 152, 75, 0.44);
	  --color-button: #bfcabc;
	  --color-accent: #352c2c;
	  --color-active: #cdd3df;
	  --font-color: #010200;
	  --secondary-font: #29421f;
	  --logo: white;
	  --color-image2: #352c2c;
	  --color-image1: #bfcabc;
	  --visualizer1: #538740;
	  --visualizer2: #96b68d;
	  --visualizer3: #fff;
	  --visualizer_cap: #538740;
	}

	.theme-yellow {
	  --background: url('$lib/assets/yellow.jpg') no-repeat center center fixed;
	  --color-primary: rgba(180, 133, 57, 0.62);
	  --color-button: #c89c4d;
	  --color-accent: #703200;
	  --color-active: #e6c99066;
	  ;
	  --font-color: #723b04;
	  --secondary-font: #642b00;
	  --logo: white;
	  --color-image2: #703200;
	  --color-image1: #d2b769;
	  --visualizer1: #723b04;
	  --visualizer2: #c89c4d;
	  --visualizer3: #c89c4d;
	  --visualizer_cap: #723b04;

	}

	.theme-phillips {
	  --background: url('$lib/assets/phillips.jpg') no-repeat center center fixed;
	  --background-color: ;
	  --color-primary: rgba(91, 56, 111, 0.64);
	  --color-button: #5b8caa;
	  --color-accent: #af9bbb;
	  --color-active: rgba(111, 21, 162, 0.38);
	  --font-color: #f5d9ff;
	  --secondary-font: #f5d9ff;
	  --logo: white;
	  --color-image2: #1a1565;
	  --color-image1: #8b6eb1;
	  --visualizer1: #0d0c31;
	  --visualizer2: #5675aa;
	  --visualizer3: #822978;
	  --visualizer_cap: #7a00c8;
	}

	.theme-blue {
	  --background: url('$lib/assets/blue.jpg') no-repeat center center fixed;
	  --background-color: ;
	  --color-primary: rgba(188, 203, 225, 0.38);
	  --color-button: #5f9fbd;
	  --color-accent: #1b4864;
	  --color-active: rgba(133, 187, 208, 0.53);
	  --font-color: #0d496d;
	  --secondary-font: #276888;
	  --logo: white;
	  --color-image2: #074065;
	  --color-image1: #c6cade;
	  --visualizer1: #1d4051;
	  --visualizer2: #518aa0;
	  --visualizer3: #bdc6d7;
	  --visualizer_cap: #074267;
	}

	html {
	  background: var(--background);
	  -webkit-background-size: cover;
	  -moz-background-size: cover;
	  -o-background-size: cover;
	  background-size: cover;
	  font-family: "EB Garamond";
	  color: var(--font-color);
	  width: auto;
	}

	.streamPlayer {
	  margin: auto;
	  margin-bottom: 15px;
	  border: 3px solid var(--color-accent);
	  padding: 10px;
	  background-color: var(--color-primary);
	  width: 810px;
	  height: auto;
	  position: absolute;
	  top: 15px;
	  left: calc(50% - 405px);
	}

	.nowplaying,
	.chatbar,
	.youtubebar,
	.loginbar {
	  color: var(--secondary-font);
	  margin-top: 9px;
	  margin-left: -1px;
	  margin-bottom: 9px;
	}

	.metadata {
	  color: var(--secondary-font);
	}

	.streambtn {
	  width: 50px;
	  background-color: var(--color-button);
	  border: 2px solid var(--color-accent);
	  color: var(--font-color);
	  padding: 10px 16px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
	  font-family: "EB Garamond";
	  margin: 2.5px;
	  margin-bottom: 5px;
	  cursor: pointer;
	}

	.toolbtn {
	  width: 42px;
	  background-color: var(--color-button);
	  border: 1.5px solid var(--color-accent);
	  color: var(--font-color);
	  padding: 5px 0px 0px 0px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
	  font-family: "EB Garamond";
	  margin: 2.5px;
	  margin-bottom: 2.5px;
	  margin-bottom: 5px;
	  cursor: pointer;
	}

	.linksbox {
	  width: 300px;
	  text-align: center;
	  margin: auto;
	  margin-bottom: auto;
	  margin-bottom: 15px;
	  border: 3px solid var(--color-accent);
	  background-color: var(--color-primary);
	  padding: 10px;
	  position: absolute;
	  left: calc(50% - 150px);
	  top: 903px;
	}

	.pheader {
	  margin: auto;
	  color: var(--secondary-font);
	}

	.bar-wrapper {
	  height: 300px;
	  position: relative;
	}

	.topbar {
	  border: 3px solid var(--color-accent);
	  margin-top: -13px;
	  margin-left: -13px;
	  margin-right: -13px;
	  margin-bottom: 3px;
	  background: var(--color-image1);
	  display: grid;
	  grid-template-columns: repeat(2, 47px);
	  text-align: left;
	}

	.toolbar {
	  background-color: var(--color-active);
	  border: 1.5px solid var(--color-accent);
	  margin-top: 0px;
	  margin-left: 637px;
	  margin-right: -4px;
	  margin-bottom: 5px;
	  display: grid;
	  grid-template-columns: repeat(2, 47px);
	  text-align: left;
	  direction: rtl;
	}

	.bar {
	  position: relative;
	  bottom: 0;
	  width: 5px;
	  display: inline-block;
	  border: 1px solid var(--color-accent);
	  height: 5px;
	  border-bottom: 3px solid var(--color-accent);
	}

	.theme {
	  font-family: 'Helvetica', 'Arial', sans-serif;
	  font-size: 11pt;
	  height: 35px;
	  width: 35px;
	  text-align: center;
	}

	#light {
	  background-color: var(--logo);
	  color: var(--color-button);
	  border: 2px solid var(--color-button);
	}

	#dark {
	  background-color: var(--color-button);
	  color: var(--logo);
	  border: 2px solid var(--logo);
	}

	#light:hover,
	#light:active,
	#dark:hover,
	#dark:active {
	  background-color: lightgrey;
	}

	a:link,
	a:visited {
	  background-color: var(--color-button);
	  border: 2px solid var(--color-accent);
	  color: var(--font-color);
	  padding: 10px 16px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
	  font-family: "EB Garamond";
	  margin: 2.5px;
	  margin-bottom: 5px;
	}

	.send,
	.login {
	  background-color: var(--color-button);
	  border: 2px solid var(--color-accent);
	  color: var(--font-color);
	  cursor: pointer;
	}

	.login {
	  margin-left: 10px;
	  margin-top: -100000px;
	}

	a:hover,
	a:active {
	  background-color: var(--color-active);
	}

	.hertz {
	  font-size: 10px;
	}

	tr {
	  border: 1px solid var(--color-accent);
	}

	.chatbox {
	  width: 775px;
	  justify-content: center;
	  margin: auto;
	  margin-bottom: auto;
	  margin-bottom: 15px;
	  border: 3px solid var(--color-accent);
	  background-color: var(--color-primary);
	  padding: 10px;
	  position: absolute;
	  left: calc(50% - 285px);
	  top: 548px;
	}

	.controlbox {
	  display: grid;
	  grid-template-columns: repeat(200, 60px);
	}

	#left,
	#right {
	  cursor: pointer;
	}

	#message-container {
	  width: 799px;
	  height: 250px;
	  overflow-y: auto;
	  max-width: 730px;
	}

	#message-container div {
	  background-color: var(--color-button);
	  padding: 5px;
	}

	#message-container div:nth-child(2n) {
	  background-color: var(--color-active);
	}

	#send-container,
	#login-container {}

	#message-input {
	  width: 500px;
	  background-color: var(--color-button);
	  border: 1px solid var(--color-accent);
	}

	#username-input,
	#password-input {
	  width: 120px;
	  background-color: var(--color-button);
	  border: 1px solid var(--color-accent);
	}

	.theme_switcher {
	  position: fixed;
	  z-index: 1000;
	}

	.drag,
	.size {
	  grid-row: 1;
	  margin-top: 3px;
	  margin-left: 3px;
	}

	.size {
	  cursor: pointer;
	}

	.baby {
	  margin-right: 3px;
	}

	.link_img {
	  height: 28px;
	  margin-left: -8px;
	}

	.send_img {
	  margin-top: 3px;
	}

	.youtube_img {
	  height: 28px;
	  margin-left: -6px;
	}

	.speaker_img {
	  margin-left: 90px;
	  margin-top: 12px;
	  height: 34px;
	}

	.youtubebox {
	  display: none;
	  width: 425px;
	  margin-bottom: 15px;
	  border: 3px solid var(--color-accent);
	  padding: 10px;
	  background-color: var(--color-primary);
	  height: auto;
	  position: absolute;
	}

	.loginbox {
	  display: none;
	  width: 175px;
	  margin-bottom: 15px;
	  border: 3px solid var(--color-accent);
	  padding: 10px;
	  background-color: var(--color-primary);
	  height: auto;
	  position: absolute;
	}

	.slider {
	  -webkit-appearance: none;
	  width: 120px;
	  height: 15px;
	  background: var(--color-active);
	  border-color: var(--color-accent);
	  margin-bottom: -2px;
	  margin-top: 6px;
	}

	.borders {
	  width: max-content;
	  height: max-content;
	  margin: 19px;
	  border: 2px solid var(--color-accent);
	}

	.slider::-webkit-slider-thumb {
	  -webkit-appearance: none;
	  appearance: none;
	  width: 15px;
	  height: 15px;
	  border-radius: 0px;
	  background: var(--color-button);
	  border-color: var(--color-accent);
	  cursor: pointer;
	}

	.slider::-moz-range-thumb {
	  width: 15px;
	  height: 15px;
	  border-radius: 0px;
	  background: var(--color-button);
	  cursor: pointer;
	  border-color: var(--color-accent);
	}
</style>
