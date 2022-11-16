function bithdayFormated(bithday: string) {
  const split = bithday.split("/");
  const day = split[0];
  const month = split[1];
  const year = split[2];
  return `${year}-${month}-${day}`;
}

function userAge(bithday: string) {
  const dateFormated = bithdayFormated(bithday);
  const date = new Date(dateFormated);
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const month = today.getMonth() - date.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  return age;
}

const activityFactorRage = (physicalActivity: number) => {
  switch (physicalActivity) {
    case 0:
      return 1;
      break;
    case 1:
      return 1.5;
      break;
    case 2:
      return 1.7;
      break;
    default:
      return null;
      break;
  }
};

const convertPhysicalActivity = (physicalActivity: number) => {
  switch (physicalActivity) {
    case 0: return 1.3
      break;
    case 1: return 1.5
      break;
    case 2: return 1.7
      break;
  }
};

const calcBasalMetabolicRate = (
  genre: number,
  weight: number,
  height: number,
  bithday: string,
  physicalActivity: number
) => {
  const age = userAge(bithday);
  const levelPhysicalActivity = convertPhysicalActivity(physicalActivity);
    switch (genre) {
      case 0:
        return Number(levelPhysicalActivity) * (9.56 * weight) + (1.85 * height) - (4.68 * age) + 665;
          //(9,56 x peso em quilos) + (1,85 x altura em centímetros) – (4,68 x idade em anos) + 665
        break;
        case 1:
          return Number(levelPhysicalActivity) * (13.75 * weight) + (5 * height) - (6.76 * age) + 66.5;
          //(13,75 x peso em quilos) + (5 x altura em centímetros) – (6,76 x idade em anos) + 66,5.
        break;
      default:
        return null;
        break;
  }
  
};

const calcProtein = (weight: number, physicalActivity: number) => {
  const activityFactor = activityFactorRage(physicalActivity);
  if (activityFactor === null) return activityFactor;

  return activityFactor * weight * 4;
};

const calcCarb = (weight: number, typeDiet: number) => {
  switch (typeDiet) {
    case 0:
      return weight * 30;
      break;
    case 1:
      return weight * 40;
      break;
    case 2:
      return weight * 50;
      break;
    default:
      return null;
      break;
  }
};

const calcFatness = (weight: number) => {
  return weight * 9;
};

export { calcBasalMetabolicRate, calcProtein, calcCarb, calcFatness };
