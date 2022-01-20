import LoginPageContainer from "../pages/LoginPage/LoginPageContainer";
import RegPageContainer from "../pages/RegPage/RegPageContainer";
import SchedulesPage from "../pages/SchedulesPage/SchedulesPage";
import StudentsPage from "../pages/StudentsPage/StudentsPage";
import SubjectsPage from "../pages/SubjectsPage/SubjectsPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";

export const RouteNames = {
  TEACHERS: "/teachers",
  STUDENTS: "/students",
  SCHEDULES: "/schedules",
  SUBJECTS: "/subjects",
  GROUPS: "/groups",
  LOGIN: "/login",
  REGISTRATION: "/registration",
};

export const publicRoutes = [
  { path: RouteNames.REGISTRATION, element: RegPageContainer },
  { path: RouteNames.LOGIN, element: LoginPageContainer },
];

export const teacherRoutes = [
  { path: RouteNames.TEACHERS, element: TeachersPage },
  { path: RouteNames.SCHEDULES, element: SchedulesPage },
  { path: RouteNames.SUBJECTS, element: SubjectsPage },
  { path: RouteNames.STUDENTS, element: StudentsPage },
];
