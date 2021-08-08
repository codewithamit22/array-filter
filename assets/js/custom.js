let data = [
	
	{
		name     : "Mizanur Rahman",
		age      : 24,
		gender   : "Male",
		location : "Mymensingh",
		cell     : "01724230923",
		photo    : "1.jpg",
		prof     : "Web Developer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Hemal Ahmed",
		age      : "25",
		gender   : "Male",
		location : "Joshore",
		cell     : "01734295333",
		photo    : "2.jpg",
		prof     : "MERN Developer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Afruja Akter",
		age      : 23,
		gender   : "Female",
		location : "Gazipur",
		cell     : "0149820938",
		photo    : "3.jpg",
		prof     : "PHP Developer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Suborna Khan",
		age      : 30,
		gender   : "Female",
		location : "Dhaka",
		cell     : "01620808829",
		photo    : "4.jpg",
		prof     : "Java Developer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Arif Hossen",
		age      : 50,
		gender   : "Male",
		location : "Rangpur",
		cell     : "01820808829",
		photo    : "5.jpg",
		prof     : "IOS Developer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Taslima Liza",
		age      : 38,
		gender   : "Female",
		location : "Dhaka",
		cell     : "01920808829",
		photo    : "6.jpg",
		prof     : "Laravel Developer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Mukul Hossen",
		age      : 45,
		gender   : "Male",
		location : "Mymensingh",
		cell     : "01738499038",
		photo    : "7.jpg",
		prof     : "Graphics Designer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	},
	{
		name     : "Apu Ahmed",
		age      : 70,
		gender   : "Male",
		location : "Comilla",
		cell     : "01920808829",
		photo    : "8.jpg",
		prof     : "Textrail Engeneer",
		desc     : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ratione!"
	}

];

// Get Elements
let sig_dt = document.querySelector("#sig-data");
let gender = document.querySelectorAll("#filter input[name=gender]");
let loct_ion = document.querySelectorAll("#filter input[name=location]");

// Get Elements
let photo    = document.querySelector(".sld-ca img");
let stu_nam  = document.querySelector(".sld-ca h2");
let prof     = document.querySelector(".sld-ca h5");
let desc     = document.querySelector(".sld-ca img");
let prev_btn = document.querySelector(".nav #prev");
let next_btn = document.querySelector(".nav #next");

let def_val = 0;

// Next data show
next_btn.onclick = () => {

	if( def_val > data.length - 1 ){
		def_val = 0;
	}

	showUser(def_val);
	console.log(def_val);
	def_val++;
}

// Previous data show
prev_btn.onclick = () => {

	if( def_val < 0 ){
		def_val = data.length - 1;
	}

	showUser(def_val);
	console.log(def_val);
	def_val--; 
}




function showUser(index = 3){

	photo.setAttribute( "src","assets/images/" + data[index].photo );
	stu_nam.innerHTML = data[index].name;
	prof.innerHTML = data[index].prof;
	prof.innerHTML = data[index].prof;
}

showUser();


let start_slider = setInterval( () => {

	if( def_val > data.length - 1 ){
		def_val = 0;
	}

	showUser(def_val);
	def_val++;
}, 2000 );


for( let i=0; i < gender.length; i++ ){

	gender[i].onclick = () => {
		let gen_val = gender[i].value;
		sig_dt.innerHTML = '';
		
		data.map( (stu) => {

			if( stu.gender.toLocaleLowerCase() == gen_val || gen_val == '' ){
				sig_dt.innerHTML += `<div class="col-md-4 mb-4">
							<div class="card">
								<div class="card-body">
									<div class="slider">
										<img class="shadow" src="assets/images/${stu.photo}" alt="">
										<h2>${stu.name}</h2>
										<h5>${stu.prof}</h5>
										<span>Cell : ${stu.cell} </span><span>Location : ${stu.location}</span>
										<p>${stu.desc}</p>
									</div>
								</div>
							</div>
						</div>`;
			}
} );

	};
}

// Data show with location
for( let i = 0; i < loct_ion.length; i++ ){

	loct_ion[i].onchange = () => {

		let loct_val = loct_ion[i].value;

		sig_dt.innerHTML = '';
		
		data.map( (stu) => {

			if( stu.location.toLocaleLowerCase() == loct_val ){
				sig_dt.innerHTML += `<div class="col-md-4 mb-4">
							<div class="card">
								<div class="card-body">
									<div class="slider">
										<img class="shadow" src="assets/images/${stu.photo}" alt="">
										<h2>${stu.name}</h2>
										<h5>${stu.prof}</h5>
										<span>Cell : ${stu.cell} </span><span>Location : ${stu.location}</span>
										<p>${stu.desc}</p>
									</div>
								</div>
							</div>
						</div>`;
			}
} );
		
	}
	
}



data.map( (stu) => {

			
	sig_dt.innerHTML += `<div class="col-md-4 mb-4">
				<div class="card">
					<div class="card-body">
						<div class="slider">
							<img class="shadow" src="assets/images/${stu.photo}" alt="">
							<h2>${stu.name}</h2>
							<h5>${stu.prof}</h5>
							<span>Cell : ${stu.cell} </span><span>Location : ${stu.location}</span>
							<p>${stu.desc}</p>
						</div>
					</div>
				</div>
			</div>`;
			
} );



