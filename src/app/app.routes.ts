import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CandidatarMonitoriaComponent } from './pages/aluno/candidatar-monitoria/candidatar-monitoria.component';
import { HomeAlunoComponent } from './pages/aluno/home-aluno/home-aluno.component';
import { MonitoriasDisponiveisComponent } from './pages/aluno/monitorias-disponiveis/monitorias-disponiveis.component';
import { StatusCandidaturaComponent } from './pages/aluno/status-candidatura/status-candidatura.component';
import { HomeComponent } from './pages/inicio/home/home.component';
import { LoginComponent } from './pages/inicio/login/login.component';
import { RegisterComponent } from './pages/inicio/register/register.component';
import { AbrirMonitoriaComponent } from './pages/professor/abrir-monitoria/abrir-monitoria.component';
import { AvaliarCandidatoComponent } from './pages/professor/avaliar-candidato/avaliar-candidato.component';
import { AvaliarMonitoriaComponent } from './pages/professor/avaliar-monitoria/avaliar-monitoria.component';
import { ConsultarCandidatosComponent } from './pages/professor/consultar-candidatos/consultar-candidatos.component';
import { ConsultarMonitoriaComponent } from './pages/professor/consultar-monitoria/consultar-monitoria.component';
import { HomeProfessorComponent } from './pages/professor/home-professor/home-professor.component';
import { MonitoriasAbertasComponent } from './pages/professor/monitorias-abertas/monitorias-abertas.component';
import { PerfilAlunoComponent } from './pages/aluno/perfil-aluno/perfil-aluno.component';
import { PerfilProfessorComponent } from './pages/professor/perfil-professor/perfil-professor.component';

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
        path: "aluno/perfil",
        component: PerfilAlunoComponent,
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
        path: "professor/perfil",
        component: PerfilProfessorComponent,
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
        path: "professor/monitorias/candidatos",
        component: ConsultarCandidatosComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_PROFESSOR']
        }
    },
    {
        path: "professor/candidatos/avaliar",
        component: AvaliarCandidatoComponent,
        canActivate: [AuthGuard],
        data: {
            expectedRoles: ['ROLE_PROFESSOR']
        }
    },
    {
        path: "professor/monitorias/avaliar",
        component: AvaliarMonitoriaComponent,
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
