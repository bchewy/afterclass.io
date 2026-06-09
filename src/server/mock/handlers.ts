import {
  mockAcadTerm,
  mockClasses,
  mockCourseByCode,
  mockCourses,
  mockProfessorBySlug,
  mockProfessors,
  mockReviews,
  mockSearchCourses,
  mockSearchProfessors,
} from "./data";

type ReviewsListInput = {
  cursor?: string | null;
  limit?: number;
  courseId?: string;
  profId?: string;
};

type ClassesInput = {
  courseCode?: string;
  profSlug?: string;
  limit?: number;
};

export function mockReviewsList(input: ReviewsListInput) {
  const limit = input.limit ?? 10;
  let items = [...mockReviews];

  if (input.courseId) {
    const course = mockCourses.find((c) => c.id === input.courseId);
    if (course) {
      items = items.filter((review) => review.courseCode === course.code);
    }
  }

  if (input.profId) {
    const professor = mockProfessors.find((p) => p.id === input.profId);
    if (professor) {
      items = items.filter((review) => review.professorSlug === professor.slug);
    }
  }

  const start = input.cursor
    ? items.findIndex((review) => review.id === input.cursor) + 1
    : 0;
  const page = items.slice(start, start + limit + 1);
  let nextCursor: string | undefined;

  if (page.length > limit) {
    const next = page.pop();
    nextCursor = next?.id;
  }

  return { items: page, nextCursor };
}

export function mockClassesList(input: ClassesInput) {
  let items = [...mockClasses];

  if (input.courseCode) {
    items = items.filter((klass) => klass.course.code === input.courseCode);
  }

  if (input.profSlug) {
    const professor = mockProfessors.find((p) => p.slug === input.profSlug);
    items = items.filter((klass) => klass.professor?.name === professor?.name);
  }

  const limit = input.limit ?? 100;
  return items.slice(0, limit);
}

export {
  mockAcadTerm,
  mockCourseByCode,
  mockCourses,
  mockProfessorBySlug,
  mockProfessors,
  mockSearchCourses,
  mockSearchProfessors,
};
