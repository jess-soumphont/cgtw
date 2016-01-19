


// Audio vars via buzz
	//menu1
	// tridentAudio = new buzz.sound("/audio/01trident.ogg");
	// f22audio = new buzz.sound("/audio/02f22.ogg");
	hellFireAudio = new buzz.sound("/audio/03hellfireMissile.ogg");
	x95audio = new buzz.sound("/audio/04x95.ogg");
	landmineAudio = new buzz.sound("/audio/05landmine.ogg");
	abrahamsAudio = new buzz.sound("/audio/06abrahams.ogg");
	//menu2
	f35Audio = new buzz.sound("/audio/07f35.ogg");
	apacheAudio = new buzz.sound("/audio/08apache.ogg");
	bluAudio = new buzz.sound("/audio/09blu.ogg");
	aaAudio = new buzz.sound("/audio/10aa12.ogg");
	bgmAudio = new buzz.sound("/audio/11bgm.ogg");
	howitzerAudio = new buzz.sound("/audio/12howitzer.ogg");
	//menu3
	airbusAudio = new buzz.sound("/audio/13airbus.ogg");
	reaperAudio = new buzz.sound("/audio/14reaper.ogg");
	uziAudio = new buzz.sound("/audio/15uzi.ogg");
	killWeaponAudio = new buzz.sound("/audio/16killweapon.ogg");
	ballisticAudio = new buzz.sound("/audio/17ballistic.ogg");
	cbuAudio = new buzz.sound("/audio/18cbu.ogg");
	//menu4
	f15Audio = new buzz.sound("/audio/19f15.ogg");
	fgmAudio = new buzz.sound("/audio/20fgm.ogg");
	dsrAudio = new buzz.sound("/audio/21dsr.ogg");
	pavewayAudio = new buzz.sound("/audio/22paveway.ogg");
	mk48Audio = new buzz.sound("/audio/23mk48.ogg");
	activeDenialAudio = new buzz.sound("/audio/24activeDenial.ogg");

if(Howler.ctx && Howler.ctx.state && Howler.ctx.state == "suspended") {
    Howler.ctx.resume().then(function() {
        console.log("AudioContext resumed!");
        // fire your callback here
    });
}
// Audio vars via howler
	//menu1
	tridentAudio = new Howl({
		urls: ["/audio/01trident.ogg"]
	});


	f22audio = new Howl({
		urls: ["/audio/02f22.ogg"]
	});

	// f22audio = new buzz.sound("/audio/02f22.ogg");
	hellFireAudio = new buzz.sound("/audio/03hellfireMissile.ogg");
	x95audio = new buzz.sound("/audio/04x95.ogg");
	landmineAudio = new buzz.sound("/audio/05landmine.ogg");
	abrahamsAudio = new buzz.sound("/audio/06abrahams.ogg");
	//menu2
	f35Audio = new buzz.sound("/audio/07f35.ogg");
	apacheAudio = new buzz.sound("/audio/08apache.ogg");
	bluAudio = new buzz.sound("/audio/09blu.ogg");
	aaAudio = new buzz.sound("/audio/10aa12.ogg");
	bgmAudio = new buzz.sound("/audio/11bgm.ogg");
	howitzerAudio = new buzz.sound("/audio/12howitzer.ogg");
	//menu3
	airbusAudio = new buzz.sound("/audio/13airbus.ogg");
	reaperAudio = new buzz.sound("/audio/14reaper.ogg");
	uziAudio = new buzz.sound("/audio/15uzi.ogg");
	killWeaponAudio = new buzz.sound("/audio/16killweapon.ogg");
	ballisticAudio = new buzz.sound("/audio/17ballistic.ogg");
	cbuAudio = new buzz.sound("/audio/18cbu.ogg");
	//menu4
	f15Audio = new buzz.sound("/audio/19f15.ogg");
	fgmAudio = new buzz.sound("/audio/20fgm.ogg");
	dsrAudio = new buzz.sound("/audio/21dsr.ogg");
	pavewayAudio = new buzz.sound("/audio/22paveway.ogg");
	mk48Audio = new buzz.sound("/audio/23mk48.ogg");
	activeDenialAudio = new buzz.sound("/audio/24activeDenial.ogg");

alert("update");


// ----------------------------------------------------------------

// Menu
Template.menu.onRendered(function(){
	buzz.all().stop();
});

	


Template.menu.events({

	'click .menu-right' : function(){
	 Router.go('menu4');
	},
	'click .menu-right' : function(){
	 Router.go('menu2');
	}
});
// Menu 2
Template.menu2.events({
	'click .menu-left' : function(){
	 Router.go('/');
	},
	'click .menu-right' : function(){
	 Router.go('menu3');
	}
});
// Menu 3
Template.menu3.events({
	'click .menu-left' : function(){
	 Router.go('menu2');
	},
	'click .menu-right' : function(){
	 Router.go('menu4');
	}
});
// Menu 4
Template.menu4.events({
	'click .menu-left' : function(){
	 Router.go('menu3');
	},
	'click .menu-right' : function(){
	 Router.go('/');
	}
});

//Weapons

// Menu 01
Template.tridentMissile.onRendered(function(){
	tridentAudio.play();
});
Template.tridentMissile.events({
	'click .repeat-btn': function(){
		tridentAudio.play();
		alert("woah");
	}
});

Template.f22Raptor.onRendered(function(){
	f22audio.play();
});
Template.f22Raptor.events({
	'touchend .repeat-btn': function(){
		f22audio.play();
		alert("audio play");
	}
});

Template.hellfireMissile.onRendered(function(){
	hellFireAudio.play();
});
Template.hellfireMissile.events({
	'click .repeat-btn': function(){
		hellFireAudio.play();
	}
});

Template.x95Assault.onRendered(function(){
	x95audio.play();
});
Template.x95Assault.events({
	'click .repeat-btn': function(){
		x95audio.play();
	}
});

Template.landmine.onRendered(function(){
	landmine.play();
});
Template.landmine.events({
	'click .repeat-btn': function(){
		landmineAudio.play();
	}
});

Template.abrahams.onRendered(function(){
	abrahamsAudio.play();
});
Template.abrahams.events({
	'click .repeat-btn': function(){
		abrahamsAudio.play();
	}
});

// Menu 02
Template.f35.onRendered(function(){
	f35Audio.play();
});
Template.f35.events({
	'click .repeat-btn': function(){
		f35Audio.play();
	}
});

Template.apache.onRendered(function(){
	apacheAudio.play();
});
Template.apache.events({
	'click .repeat-btn': function(){
		apacheAudio.play();
	}
});

Template.blu.onRendered(function(){
	bluAudio.play();
});
Template.blu.events({
	'click .repeat-btn': function(){
		bluAudio.play();
	}
});

Template.aa12.onRendered(function(){
	aaAudio.play();
});
Template.aa12.events({
	'click .repeat-btn': function(){
		aaAudio.play();
	}
});

Template.bgm.onRendered(function(){
	bgmAudio.play();
});
Template.bgm.events({
	'click .repeat-btn': function(){
		bgmAudio.play();
	}
});

Template.howitzer.onRendered(function(){
	howitzerAudio.play();
});
Template.howitzer.events({
	'click .repeat-btn': function(){
		howitzerAudio.play();
	}
});

//Menu 03

Template.airbus.onRendered(function(){
	airbusAudio.play();
});
Template.airbus.events({
	'click .repeat-btn': function(){
		airbusAudio.play();
	}
});

Template.reaper.onRendered(function(){
	reaperAudio.play();
});
Template.reaper.events({
	'click .repeat-btn': function(){
		reaperAudio.play();
	}
});

Template.uzi.onRendered(function(){
	uziAudio.play();
});
Template.uzi.events({
	'click .repeat-btn': function(){
		uziAudio.play();
	}
});

Template.killWeapon.onRendered(function(){
	killWeaponAudio.play();
});
Template.killWeapon.events({
	'click .repeat-btn': function(){
		killWeaponAudio.play();
	}
});

Template.ballistic.onRendered(function(){
	ballisticAudio.play();
});
Template.ballistic.events({
	'click .repeat-btn': function(){
		ballisticAudio.play();
	}
});

Template.f35.onRendered(function(){
	f35Audio.play();
});
Template.f35.events({
	'click .repeat-btn': function(){
		f35Audio.play();
	}
});

Template.cbu.onRendered(function(){
	cbuAudio.play();
});
Template.cbu.events({
	'click .repeat-btn': function(){
		cbuAudio.play();
	}
});

// menu 04

Template.f15.onRendered(function(){
	f15Audio.play();
});
Template.f15.events({
	'click .repeat-btn': function(){
		f15Audio.play();
	}
});

Template.fgm.onRendered(function(){
	fgmAudio.play();
});
Template.fgm.events({
	'click .repeat-btn': function(){
		fgmAudio.play();
	}
});

Template.dsr.onRendered(function(){
	dsrAudio.play();
});
Template.dsr.events({
	'click .repeat-btn': function(){
		dsrAudio.play();
	}
});

Template.paveway.onRendered(function(){
	pavewayAudio.play();
});
Template.paveway.events({
	'click .repeat-btn': function(){
		pavewayAudio.play();
	}
});

Template.mk48.onRendered(function(){
	mk48Audio.play();
});
Template.mk48.events({
	'click .repeat-btn': function(){
		mk48Audio.play();
	}
});

Template.activeDenial.onRendered(function(){
	activeDenialAudio.play();
});
Template.activeDenial.events({
	'click .repeat-btn': function(){
		activeDenialAudio.play();
	}
});


