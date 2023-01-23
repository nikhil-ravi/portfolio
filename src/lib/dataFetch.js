import skills from "@/content/skillsData";
import projects from "@/content/projectData";

export function getPinnedSkills() {
  return skills.filter((skill) => skill.pinned);
}
export function getProjects() {
  return projects;
}
