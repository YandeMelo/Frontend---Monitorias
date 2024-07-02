import { Routes } from '@angular/router';
import { LoginComponent } from './pages/inicio/login/login.component';
import { HomeComponent } from './pages/inicio/home/home.component';
import { RegisterComponent } from './pages/inicio/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeAlunoComponent } from './pages/aluno/home-aluno/home-aluno.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';
import { MonitoriasDisponiveisComponent } from './pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { CandidatarMonitoriaComponent } from './pages/aluno/candidatar-monitoria/candidatar-monitoria.component';
import { StatusCandidaturaComponent } from './pages/aluno/status-candidatura/status-candidatura.component';
import { AbrirMonitoriaComponent } from './pages/professor/abrir-monitoria/abrir-monitoria.component';
import { MonitoriasAbertasComponent } from './pages/professor/monitorias-abertas/monitorias-abertas.component';
import { ConsultarMonitoriaComponent } from './pages/professor/consultar-monitoria/consultar-monitoria.component';
import { ConsultarCandidatosComponent } from './pages/professor/consultar-candidatos/consultar-candidatos.component';

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
        path: "aluno/candidatura",
        component: StatusCandidaturaComponent,
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
        path: "professor/monitorias",
        component: MonitoriasAbertasComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_PROFESSOR']
        }
    },
    {
        path: "professor/monitorias/consultar",
        component: ConsultarMonitoriaComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_PROFESSOR']
        }
    },
    {
        path: "professor/monitorias/consultar/candidatos",
        component: ConsultarCandidatosComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_PROFESSOR']
        }
    },
    {
        path: "professor/abrir",
        component: AbrirMonitoriaComponent,
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
