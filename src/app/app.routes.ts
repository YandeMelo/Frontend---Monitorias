import { Routes } from '@angular/router';
import { LoginComponent } from './pages/inicio/login/login.component';
import { HomeComponent } from './pages/inicio/home/home.component';
import { RegisterComponent } from './pages/inicio/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeAlunoComponent } from './pages/aluno/home-aluno/home-aluno.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';
import { MonitoriasDisponiveisComponent } from './pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { CandidatarMonitoriaComponent } from './pages/aluno/candidatar-monitoria/candidatar-monitoria.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "aluno",
        component: HomeAlunoComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_ALUNO']
        }
    },
    {
        path: "aluno/monitorias",
        component: MonitoriasDisponiveisComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_ALUNO']
        }
    },
    {
        path: "aluno/monitorias/candidatar",
        component: CandidatarMonitoriaComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_ALUNO']
        }
    },
    {
        path: "professor",
        component: HomeProfessorComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_PROFESSOR']
        }
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "**",
        redirectTo: ""
    },
];
