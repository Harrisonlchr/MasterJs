// Importar modulos del router de AprendiendoAngular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// importar componentes

import { VideojuegoComponet} from './videojuego/videojuego.component';
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

// Array de rutas
const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'videojuego', component: VideojuegoComponet},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: '**', component: HomeComponent},

];

// Exportar el modulo del touter

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
