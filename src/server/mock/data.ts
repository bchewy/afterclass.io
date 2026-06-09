import {
  GradingBasis,
  ReviewType,
  UniversityAbbreviation,
} from "@prisma/client";

import type { Review } from "@/modules/reviews/types";
import type { SearchCourseResult } from "@/modules/search/functions/searchCourse";
import type { SearchProfResult } from "@/modules/search/functions/searchProf";

import universitiesJson from "../../../prisma/data/1_universities.json";
import facultiesJson from "../../../prisma/data/2_faculties.json";
import coursesJson from "../../../prisma/data/3_courses.json";
import professorsJson from "../../../prisma/data/5_professors.json";
import classesJson from "../../../prisma/data/7_classes.json";
import classTimingsJson from "../../../prisma/data/15_class_timings.json";
import classExamTimingsJson from "../../../prisma/data/16_class_exam_timings.json";
import acadTermsJson from "../../../prisma/data/14_acad_terms.json";

type MockCourse = { id: string; name: string; code: string };
type MockProfessor = { id: string; name: string; slug: string };
type MockAcadTerm = (typeof acadTermsJson)[number];
type MockClass = {
  id: string;
  section: string;
  courseId: string;
  professorId: string | null;
  acadTermId: string;
  createdAt: Date;
  updatedAt: Date;
  gradingBasis: GradingBasis | null;
  courseOutlineUrl: string | null;
  bossId: number;
  course: { code: string; name: string };
  professor: { name: string } | null;
  classTimings: {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    venue: string | null;
  }[];
  classExamTimings: {
    dayOfWeek: string;
    date: Date;
    startTime: string;
    endTime: string;
  }[];
};

const courseById = new Map(
  coursesJson.map((course) => [course.id, course] as const),
);
const professorById = new Map(
  professorsJson.map((professor) => [professor.id, professor] as const),
);

export const mockAcadTerm = (acadTermsJson.find((term) => term.id === "AY202425T2") ??
  acadTermsJson.at(-1)) as MockAcadTerm;

export const mockCourses: MockCourse[] = coursesJson
  .slice(0, 24)
  .map(({ id, name, code }) => ({ id, name, code }));

export const mockProfessors: MockProfessor[] = professorsJson
  .slice(0, 20)
  .map(({ id, name, slug }) => ({ id, name, slug }));

export const mockClasses: MockClass[] = classesJson
  .slice(0, 12)
  .map((klass) => {
    const course = courseById.get(klass.courseId);
    const professor = klass.professorId
      ? professorById.get(klass.professorId)
      : undefined;

    return {
      id: klass.id,
      section: klass.section,
      courseId: klass.courseId,
      professorId: klass.professorId,
      acadTermId: klass.acadTermId,
      createdAt: new Date(klass.createdAt),
      updatedAt: new Date(klass.updatedAt),
      gradingBasis: klass.gradingBasis as GradingBasis,
      courseOutlineUrl: klass.courseOutlineUrl,
      bossId: klass.bossId,
      course: {
        code: course?.code ?? "UNKNOWN",
        name: course?.name ?? "Unknown course",
      },
      professor: professor ? { name: professor.name } : null,
      classTimings: classTimingsJson
        .filter((timing) => timing.classId === klass.id)
        .map(({ dayOfWeek, startTime, endTime, venue }) => ({
          dayOfWeek,
          startTime,
          endTime,
          venue,
        })),
      classExamTimings: classExamTimingsJson
        .filter((timing) => timing.classId === klass.id)
        .map(({ dayOfWeek, date, startTime, endTime }) => ({
          dayOfWeek,
          date: new Date(date),
          startTime,
          endTime,
        })),
    };
  });

const reviewBodies = [
  "Clear lectures and fair grading. Weekly quizzes were predictable if you did the readings. The final project was the heaviest lift but genuinely useful.",
  "Fast-paced but well structured. Office hours saved me before the midterm. Would take again for the project portfolio alone.",
  "Heavy workload outside class. Participation matters more than the syllabus suggests. Start assignments early.",
  "One of the better core modules in the major. Concepts transfer directly to internships. Slides are uploaded consistently.",
  "Tutorial discussions carry a lot of weight. Prof gives actionable feedback on drafts. Group work was balanced.",
  "Content is interesting but assessments feel scattered. Read past year papers before quizzes.",
  "Dry delivery at times, but the grading rubric is transparent. Easy to score if you mirror the model answers.",
  "Engaging seminars and practical case studies. The bidding season crowd is real so manage expectations on curve.",
];

export const mockReviews: Review[] = mockProfessors.slice(0, 8).map((professor, i) => {
  const course = mockCourses[i % mockCourses.length]!;
  return {
    id: `mock-review-${i + 1}`,
    body: reviewBodies[i]!,
    tips: i % 2 === 0 ? "Sit near the front for participation credit." : "",
    rating: (i % 5) + 1,
    courseCode: course.code,
    courseName: course.name,
    username: i % 3 === 0 ? "Anonymous" : `student_${i + 1}`,
    likeCount: 12 + i * 3,
    countEventViews: 80 + i * 17,
    createdAt: Date.now() - i * 86_400_000 * 4,
    university: UniversityAbbreviation.SMU,
    reviewFor: ReviewType.PROFESSOR,
    professorName: professor.name,
    professorSlug: professor.slug,
    reviewLabels: [
      { name: "ENGAGING" },
      { name: "FAIR_GRADING" },
      { name: "PRACTICAL" },
    ].slice(0, (i % 3) + 1),
  };
});

export function mockSearchCourses(query: string): SearchCourseResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return mockCourses
    .filter(
      (course) =>
        course.code.toLowerCase().includes(q) ||
        course.name.toLowerCase().includes(q),
    )
    .slice(0, 5)
    .map((course) => ({
      uniAbbrv: UniversityAbbreviation.SMU,
      courseCode: course.code,
      courseName: course.name,
      profCount: 3,
      reviewCount: 18,
    }));
}

export function mockCourseByCode(code: string) {
  const course = coursesJson.find((item) => item.code === code);
  if (!course) return null;

  const faculty = facultiesJson.find((item) => item.id === course.belongToFacultyId);
  const university = universitiesJson.find(
    (item) => item.id === course.belongToUniversityId,
  );

  return {
    ...course,
    creditUnits: course.creditUnits,
    belongToFaculty: faculty
      ? {
          id: faculty.id,
          name: faculty.name,
          acronym: faculty.acronym,
          siteUrl: faculty.siteUrl,
        }
      : null,
    belongToUniversity: university
      ? {
          id: university.id,
          name: university.name,
          abbrv: university.abbrv,
          siteUrl: university.siteUrl,
        }
      : null,
  };
}

export function mockProfessorBySlug(slug: string) {
  const professor = professorsJson.find((item) => item.slug === slug);
  if (!professor) return null;

  const university = universitiesJson.find(
    (item) => item.id === professor.belongToUniversityId,
  );

  return {
    ...professor,
    belongToUniversity: university ?? null,
  };
}

export function mockSearchProfessors(query: string): SearchProfResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return mockProfessors
    .filter(
      (professor) =>
        professor.name.toLowerCase().includes(q) ||
        professor.slug.toLowerCase().includes(q),
    )
    .slice(0, 5)
    .map((professor) => ({
      uniAbbrv: UniversityAbbreviation.SMU,
      profName: professor.name,
      profSlug: professor.slug,
      courseCount: 4,
      reviewCount: 22,
    }));
}
