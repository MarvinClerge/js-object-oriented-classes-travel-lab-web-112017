class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }

}

class Route {
  constructor(startLocation, endLocation) {
    this.startLocation = startLocation;
    this.endLocation = endLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const vertical = this.endLocation.vertical - this.startLocation.vertical;

    if (this.startLocation.horizontal !== this.endLocation.horizontal) {
      let startHorizontal, endHorizontal;

      //FIND START LOCATION
      for (const i in eastWest) {
        if (this.startLocation.horizontal === eastWest[i]) {
          startHorizontal = i
        }
      }

      //FIND END LOCATION
      for (const i in eastWest) {
        if (this.endLocation.horizontal === eastWest[i]) {
          endHorizontal = i
        }
      }

      const horizontal = endHorizontal - startHorizontal;
      return vertical + horizontal;
    }
    return vertical;
  }

  estimatedTime(peak = false) {
    if (peak === true) {
      return this.blocksTravelled() / 2
    }
    return this.blocksTravelled() / 3
  }
}
