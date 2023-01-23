import achievements from "@/content/achievements";
import personal from "@/content/personal";
import professionalExperiences from "@/content/professionalExperiences";
import education from "@/content/education";

export function getPersonalInformation() {
  return personal.reverse();
}
export function getAchievements() {
  return achievements.reverse();
}

export function getProfessionalExperiences() {
  return professionalExperiences.reverse();
}

export function getEducation() {
  return education.reverse();
}

export function getCMSIntegration() {
  return {
    Personal: getPersonalInformation(),
    Achievements: getAchievements(),
    ProfessionalExperiences: getProfessionalExperiences().reverse(),
    Education: getEducation().reverse(),
  };
}
