class Spaceship {
	constructor(name, array){
		this.name = name
		this.phasers = 5
		this.phasersCharge = "uncharged"
		this.shields = 4
		this.cloaked = false
		this.warpDrive = "disengaged"
		this.docked = true
		this.crew = array
		this.assign()

	}
	
	assign(){
		for (const crewmember of this.crew) {
			crewmember.currentShip = this
		}
		if (this.crew.length > 0){
			this.docked = false

		}

	}

	

}

